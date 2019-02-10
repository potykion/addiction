from addiction.files import read_file_as_module
from addiction.imports import extract_imports, filter_package_imports, imports_to_modules


def test_import_statements_generator() -> None:
    path = "rbcn_gateway/handlers.py"
    module = read_file_as_module(path)
    imports = list(extract_imports(module))

    expected_imports = [
        ("aiohttp", ("web",)),
        ("aiohttp.web_response", ("json_response",)),
        ("aiohttp_apispec", ("docs", "use_kwargs", "marshal_with")),
        ("aiopg.sa", ("SAConnection",)),
        ("marshmallow.schema", ("BaseSchema",)),
        ("sqlalchemy", ()),
        ("rbcn_gateway", ("db",)),
        ("rbcn_gateway.schemas", ("EntitySchema", "ServiceSchema")),
        ("rbcn_gateway.models", ("Entity",)),
    ]

    assert imports == expected_imports


def test_filter_package_imports() -> None:
    package = "rbcn_gateway"

    path = f"{package}/handlers.py"
    module = read_file_as_module(path)
    imports = list(extract_imports(module))

    actual_imports = list(filter_package_imports(imports, package))

    expected_imports = [
        ("rbcn_gateway", ("db",)),
        ("rbcn_gateway.schemas", ("EntitySchema", "ServiceSchema")),
        ("rbcn_gateway.models", ("Entity",)),
    ]

    assert actual_imports == expected_imports


def test_imports_to_modules() -> None:
    modules = list(
        imports_to_modules(
            [
                ("rbcn_gateway", ("db",)),
                ("rbcn_gateway.schemas", ("EntitySchema", "ServiceSchema")),
                ("rbcn_gateway.models", ("Entity",)),
            ]
        )
    )

    expected_modules = ["rbcn_gateway.db", "rbcn_gateway.schemas", "rbcn_gateway.models"]

    assert modules == expected_modules
