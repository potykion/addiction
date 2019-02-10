import ast


def extract_filename(path: str, without_extension: bool = True) -> str:
    """
    >>> extract_filename(r"rbcn_gateway\\app.py")
    'app'
    """
    filename = path.rsplit("/", 1)[-1].rsplit("\\", 1)[-1]

    if without_extension:
        filename = filename.rsplit(".", 1)[0]

    return filename


def read_file_as_module(path: str) -> ast.Module:
    with open(path) as f:
        return ast.parse(f.read())
