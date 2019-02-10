import ast
import os
from typing import Iterable, Tuple, cast

ImportStatement = Tuple[str, Tuple[str, ...]]


def extract_imports(module: ast.Module) -> Iterable[ImportStatement]:
    chunks = module.body
    imports = [chunk for chunk in chunks if isinstance(chunk, (ast.Import, ast.ImportFrom))]

    for import_statement in imports:
        if isinstance(import_statement, ast.Import):
            yield from (
                (str(import_.name), cast(Tuple[str], ())) for import_ in import_statement.names
            )

        if isinstance(import_statement, ast.ImportFrom):
            yield str(import_statement.module), tuple(
                str(import_.name) for import_ in import_statement.names
            )


def filter_package_imports(
    imports: Iterable[ImportStatement], package: str
) -> Iterable[ImportStatement]:
    return (
        (import_from, import_members)
        for import_from, import_members in imports
        if import_from.startswith(package)
    )


def imports_to_modules(package_imports: Iterable[ImportStatement]) -> Iterable[str]:
    for import_from, import_members in package_imports:
        if not import_members:
            yield import_from
            continue

        if is_package(import_from):
            yield from (f"{import_from}.{member}" for member in import_members)
            continue

        yield import_from


def is_package(import_from: str) -> bool:
    return os.path.isdir(import_from.replace('.', "/"))
