from typing import List, Iterable

from addiction.files import extract_filename, read_file_as_module
from addiction.imports import extract_imports, imports_to_modules, filter_package_imports
from addiction.models import Module
from addiction.modules import validate_module_has_no_dot_imports
from addiction.packages import list_modules


def list_module_dependencies(package_path: str) -> Iterable[Module]:
    package = extract_filename(package_path)
    module_paths = list_modules(package_path)

    for path in module_paths:
        if not validate_module_has_no_dot_imports(path):
            raise ValueError(f"Module '{path}' has dot imports!")

        name = extract_filename(path)
        package_imports = filter_package_imports(
            extract_imports(read_file_as_module(path)), package
        )
        module_imports = tuple(imports_to_modules(package_imports))

        yield Module(name, path, module_imports)