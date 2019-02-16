from addiction.api import _dependencies_generator
from addiction.models import Module


def test_list_module_dependencies() -> None:
    actual_dependencies = list(_dependencies_generator("rbcn_gateway"))

    expected_dependencies = [
        Module("__init__", "rbcn_gateway\\__init__.py"),
        Module("app", "rbcn_gateway\\app.py", ("rbcn_gateway.utils",)),
        Module("config", "rbcn_gateway\\config.py"),
        Module("db", "rbcn_gateway\\db.py", ("rbcn_gateway.config",)),
        Module(
            "handlers",
            "rbcn_gateway\\handlers.py",
            ("rbcn_gateway.db", "rbcn_gateway.schemas", "rbcn_gateway.models"),
        ),
        Module("middlewares", "rbcn_gateway\\middlewares.py", ("rbcn_gateway.config",)),
        Module("routes", "rbcn_gateway\\routes.py", ("rbcn_gateway.handlers",)),
        Module("utils", "rbcn_gateway\\utils.py", ("rbcn_gateway.db",)),
    ]

    assert set(actual_dependencies) == set(expected_dependencies)
