import pytest

from addiction.utils import is_package


@pytest.mark.parametrize("path, is_package_", [("addiction", True), ("addiction/api.py", False)])
def test_is_package(path: str, is_package_: bool) -> None:
    assert is_package(path) is is_package_
