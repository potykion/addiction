import ast
import json
import os
import warnings
from glob import glob
from typing import List, Tuple, Iterable

import attr

from addiction.utils import is_package, extract_module_name

Dependency = str


@attr.s(auto_attribs=True, frozen=True)
class Module:
    name: str
    path: str
    imports: Tuple[str, ...] = attr.ib(factory=tuple)


@attr.s(auto_attribs=True)
class PackageDependencyIndicator:
    package_path: str = attr.ib()

    @package_path.validator
    def package_path_validator(self, _: str, value: str) -> None:
        if not is_package(value):
            raise ValueError(f'"{value}" is not a package.')

    def list_dependencies(self) -> List[Module]:
        return [
            Module(
                name=extract_module_name(module, self.package_path),
                path=module,
                imports=tuple(self._module_dependency_generator(module)),
            )
            for module in self.list_modules()
        ]

    def list_dependencies_json(self) -> str:
        return json.dumps(list(map(attr.asdict, self.list_dependencies())), indent=2)

    def list_modules(self) -> List[str]:
        return glob(os.path.join(self.package_path, "**", "*.py"), recursive=True)

    @property
    def package_name(self) -> str:
        return os.path.basename(self.package_path)

    def _module_dependency_generator(self, module_path: str) -> Iterable[Dependency]:
        with open(module_path, encoding="utf-8") as f:
            module: ast.Module = ast.parse(f.read())

        module_imports = [
            statement
            for statement in module.body
            if isinstance(statement, (ast.Import, ast.ImportFrom))
        ]

        # ast.Import.names - imported names (package, module) as alias
        #   alias.name - imported name
        for import_statement in module_imports:
            if isinstance(import_statement, ast.Import):
                # import {package}, {module}
                for imported in import_statement.names:
                    name = imported.name
                    # import .utils
                    assert not name.startswith("."), "No dot imports allowed."

                    # import ast
                    if not name.startswith(self.package_name):
                        continue

                    name_without_package = name[len(self.package_name) + 1 :]
                    # import addiction
                    if not name_without_package:
                        warnings.warn(f"No package imports supported ({name}).")
                        continue

                    # import addiction.utils (utils is package)
                    if is_package(
                        os.path.join(self.package_path, *name_without_package.split("."))
                    ):
                        warnings.warn(f"No package imports supported ({name}).")
                        continue

                    # import addiction.utils (utils is module)
                    yield name

            # ast.ImportFrom.module - import from module/package
            # ast.ImportFrom.names - imported names (module, vars) as alias
            #   alias.name - imported name
            if isinstance(import_statement, ast.ImportFrom):
                import_from = import_statement.module

                # from .utils import is_package
                assert import_from and not import_from.startswith(
                    "."
                ), f"Dot import found in '{module_path}'."

                # from typing import List
                if not import_from.startswith(self.package_name):
                    continue

                import_from_without_package = import_from[len(self.package_name) + 1 :]
                # from addiction import utils
                if is_package(
                    os.path.join(self.package_path, *import_from_without_package.split("."))
                ):
                    yield from (
                        f"{import_from}.{imported.name}" for imported in import_statement.names
                    )
                # from addiction.utils import is_package
                else:
                    yield import_from
