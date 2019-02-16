from addiction.api import PackageDependencyIndicator, Module


def test_package_dependency_indicator() -> None:
    package = "sample_package"

    dependencies = PackageDependencyIndicator(package).list_dependencies()

    expected_modules = [
        Module(f"{package}.parent", f"{package}\\parent.py"),
        Module(f"{package}.child", f"{package}\\child.py", (f"{package}.parent",) * 3),
        Module(f"{package}.__init__", f"{package}\\__init__.py"),
        Module(f"{package}.sub.child", f"{package}\\sub\\child.py", (f"{package}.sub.parent",)),
        Module(f"{package}.sub.parent", f"{package}\\sub\\parent.py"),
        Module(f"{package}.sub.__init__", f"{package}\\sub\\__init__.py"),
    ]
    assert set(dependencies) == set(expected_modules)
