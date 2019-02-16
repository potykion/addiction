# Addiction

Find dependencies between modules and packages

## Usage

```
python addict.py show_dependencies {package_path}
```

For example following command:

```
python addict.py show_dependencies addiction
```

will print:

```
Module: addiction\api.py
addiction.files
addiction.imports
addiction.models
addiction.modules
addiction.packages

Module: addiction\files.py

Module: addiction\imports.py

Module: addiction\models.py

Module: addiction\modules.py

Module: addiction\packages.py

Module: addiction\__init__.py
```

