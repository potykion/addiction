import re


def validate_module_has_no_dot_imports(module_path: str) -> bool:
    with open(module_path) as f:
        return not any(re.match(r"from \..*", line) for line in f)
