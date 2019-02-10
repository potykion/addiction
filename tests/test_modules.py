from tempfile import NamedTemporaryFile

import pytest

from addiction.modules import validate_module_has_no_dot_imports


def test_validate_module_has_no_dot_imports() -> None:
    with NamedTemporaryFile("w+t", delete=False) as file_:
        file_.write(
            """
            from rbcn_gateway import db
            from rbcn_gateway.schemas import EntitySchema, ServiceSchema
            from rbcn_gateway.models import Entity
        """
        )
        file_.seek(0)
        assert validate_module_has_no_dot_imports(file_.name)


@pytest.mark.parametrize(
    "import_line",
    [
        "from . import db",
        "from .schemas import EntitySchema, ServiceSchema",
        "from .models import Entity",
    ],
)
def test_validate_module_has_no_dot_imports_for_dot_imports(import_line: str) -> None:
    with NamedTemporaryFile("w+t", delete=False) as file_:
        file_.write(import_line)
        file_.seek(0)
        assert not validate_module_has_no_dot_imports(file_.name)
