import os
from glob import glob
from typing import List


def list_modules(package_path: str) -> List[str]:
    return glob(os.path.join(package_path, "**", "*.py"), recursive=True)
