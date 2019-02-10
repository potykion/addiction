from addiction.packages import list_modules


def test_list_modules() -> None:
    actual_modules = list_modules("rbcn_gateway")
    expected_modules = [
        'rbcn_gateway\\app.py',
        'rbcn_gateway\\config.py',
        'rbcn_gateway\\db.py',
        'rbcn_gateway\\handlers.py',
        'rbcn_gateway\\middlewares.py',
        'rbcn_gateway\\routes.py',
        'rbcn_gateway\\utils.py',
        'rbcn_gateway\\__init__.py',
    ]

    assert actual_modules == expected_modules
