import os


def is_package(path: str) -> bool:
    is_dir = os.path.isdir(path)
    dunder_init_exists = os.path.exists(os.path.join(path, "__init__.py"))
    return is_dir and dunder_init_exists


def extract_module_name(module_path: str, package_path: str) -> str:
    """
    >>> extract_module_name(r"C:\\Users\\potyk\\PycharmProjects\\loyalty_system\\loyalty_system\\checks\\views.py", r"C:\\Users\\potyk\\PycharmProjects\\loyalty_system\\loyalty_system")
    'loyalty_system.checks.views'
    >>> extract_module_name(r"loyalty_system/checks/views.py", r"loyalty_system")
    'loyalty_system.checks.views'
    """
    package_name = os.path.basename(package_path)

    relative_module_path = os.path.relpath(module_path, package_path)
    module_without_extension = os.path.splitext(relative_module_path)[0]
    module_name = module_without_extension.replace(os.sep, ".")

    return f"{package_name}.{module_name}"
