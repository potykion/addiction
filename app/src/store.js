import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dependencies: [
            {
                "name": "rbcn_legals.__init__",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\__init__.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.app.app",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\app\\app.py",
                "imports": [
                    "rbcn_legals.app.config"
                ]
            },
            {
                "name": "rbcn_legals.app.config",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\app\\config.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.app.middlewares",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\app\\middlewares.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.app.routes",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\app\\routes.py",
                "imports": [
                    "rbcn_legals.contract.handlers",
                    "rbcn_legals.legals.handlers",
                    "rbcn_legals.fee_docs.handlers"
                ]
            },
            {
                "name": "rbcn_legals.app.__init__",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\app\\__init__.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.common.docs_utils",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\common\\docs_utils.py",
                "imports": [
                    "rbcn_legals.common.file_utils"
                ]
            },
            {
                "name": "rbcn_legals.common.file_utils",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\common\\file_utils.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.common.models",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\common\\models.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.common.num2t4ru",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\common\\num2t4ru.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.common.str_utils",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\common\\str_utils.py",
                "imports": [
                    "rbcn_legals.fee.models"
                ]
            },
            {
                "name": "rbcn_legals.common.testing_utils",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\common\\testing_utils.py",
                "imports": [
                    "rbcn_legals.common.file_utils"
                ]
            },
            {
                "name": "rbcn_legals.common.translation_utils",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\common\\translation_utils.py",
                "imports": [
                    "rbcn_legals.common.num2t4ru"
                ]
            },
            {
                "name": "rbcn_legals.common.__init__",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\common\\__init__.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.contract.db",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\contract\\db.py",
                "imports": [
                    "rbcn_legals.contract.models"
                ]
            },
            {
                "name": "rbcn_legals.contract.docs",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\contract\\docs.py",
                "imports": [
                    "rbcn_legals.common.docs_utils",
                    "rbcn_legals.common.file_utils",
                    "rbcn_legals.common.translation_utils",
                    "rbcn_legals.contract.models"
                ]
            },
            {
                "name": "rbcn_legals.contract.handlers",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\contract\\handlers.py",
                "imports": [
                    "rbcn_legals.contract.db",
                    "rbcn_legals.contract.docs",
                    "rbcn_legals.contract.models",
                    "rbcn_legals.contract.schemas",
                    "rbcn_legals.forms.schemas"
                ]
            },
            {
                "name": "rbcn_legals.contract.models",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\contract\\models.py",
                "imports": [
                    "rbcn_legals.forms.models"
                ]
            },
            {
                "name": "rbcn_legals.contract.schemas",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\contract\\schemas.py",
                "imports": [
                    "rbcn_legals.common.models",
                    "rbcn_legals.contract.models"
                ]
            },
            {
                "name": "rbcn_legals.contract.__init__",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\contract\\__init__.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.fee.company",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\fee\\company.py",
                "imports": [
                    "rbcn_legals.common.models",
                    "rbcn_legals.fee.models",
                    "rbcn_legals.summary.models",
                    "rbcn_legals.legals.models"
                ]
            },
            {
                "name": "rbcn_legals.fee.fee_data",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\fee\\fee_data.py",
                "imports": [
                    "rbcn_legals.common.models",
                    "rbcn_legals.fee.company",
                    "rbcn_legals.fee.models",
                    "rbcn_legals.summary.models",
                    "rbcn_legals.fee.payment_type",
                    "rbcn_legals.fee.venue",
                    "rbcn_legals.legals.models"
                ]
            },
            {
                "name": "rbcn_legals.fee.models",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\fee\\models.py",
                "imports": [
                    "rbcn_legals.summary.models"
                ]
            },
            {
                "name": "rbcn_legals.fee.payment_type",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\fee\\payment_type.py",
                "imports": [
                    "rbcn_legals.summary.models",
                    "rbcn_legals.legals.models"
                ]
            },
            {
                "name": "rbcn_legals.fee.venue",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\fee\\venue.py",
                "imports": [
                    "rbcn_legals.common.models",
                    "rbcn_legals.summary.models",
                    "rbcn_legals.legals.models"
                ]
            },
            {
                "name": "rbcn_legals.fee.__init__",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\fee\\__init__.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.fee_docs.docs",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\fee_docs\\docs.py",
                "imports": [
                    "rbcn_legals.common.docs_utils",
                    "rbcn_legals.common.file_utils",
                    "rbcn_legals.common.docs_utils"
                ]
            },
            {
                "name": "rbcn_legals.fee_docs.fee_docs",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\fee_docs\\fee_docs.py",
                "imports": [
                    "rbcn_legals.common.docs_utils",
                    "rbcn_legals.common.file_utils",
                    "rbcn_legals.common.models",
                    "rbcn_legals.common.str_utils",
                    "rbcn_legals.common.translation_utils",
                    "rbcn_legals.contract.models",
                    "rbcn_legals.fee.models",
                    "rbcn_legals.fee_docs.docs",
                    "rbcn_legals.legals.models",
                    "rbcn_legals.summary.models"
                ]
            },
            {
                "name": "rbcn_legals.fee_docs.handlers",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\fee_docs\\handlers.py",
                "imports": [
                    "rbcn_legals.fee_docs.schemas",
                    "rbcn_legals.fee_docs.fee_docs",
                    "rbcn_legals.fee.fee_data",
                    "rbcn_legals.legals.db",
                    "rbcn_legals.legals.models",
                    "rbcn_legals.legals.schemas",
                    "rbcn_legals.summary.api",
                    "rbcn_legals.summary.models"
                ]
            },
            {
                "name": "rbcn_legals.fee_docs.schemas",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\fee_docs\\schemas.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.fee_docs.__init__",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\fee_docs\\__init__.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.forms.models",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\forms\\models.py",
                "imports": [
                    "rbcn_legals.common.models"
                ]
            },
            {
                "name": "rbcn_legals.forms.schemas",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\forms\\schemas.py",
                "imports": [
                    "rbcn_legals.forms.models"
                ]
            },
            {
                "name": "rbcn_legals.forms.__init__",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\forms\\__init__.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.legals.db",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\legals\\db.py",
                "imports": [
                    "rbcn_legals.app.config"
                ]
            },
            {
                "name": "rbcn_legals.legals.handlers",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\legals\\handlers.py",
                "imports": [
                    "rbcn_legals.forms.schemas",
                    "rbcn_legals.legals.db",
                    "rbcn_legals.legals.models",
                    "rbcn_legals.legals.schemas"
                ]
            },
            {
                "name": "rbcn_legals.legals.models",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\legals\\models.py",
                "imports": [
                    "rbcn_legals.contract.models"
                ]
            },
            {
                "name": "rbcn_legals.legals.schemas",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\legals\\schemas.py",
                "imports": [
                    "rbcn_legals.common.models",
                    "rbcn_legals.contract.schemas",
                    "rbcn_legals.legals.models"
                ]
            },
            {
                "name": "rbcn_legals.legals.__init__",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\legals\\__init__.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.scripts.migrate_from_gae",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\scripts\\migrate_from_gae.py",
                "imports": [
                    "rbcn_legals.app.config",
                    "rbcn_legals.legals.db",
                    "rbcn_legals.legals.models",
                    "rbcn_legals.contract.models",
                    "rbcn_legals.legals.schemas"
                ]
            },
            {
                "name": "rbcn_legals.scripts.__init__",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\scripts\\__init__.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.summary.api",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\summary\\api.py",
                "imports": [
                    "rbcn_legals.common.models",
                    "rbcn_legals.legals.models"
                ]
            },
            {
                "name": "rbcn_legals.summary.models",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\summary\\models.py",
                "imports": [
                    "rbcn_legals.summary.utils",
                    "rbcn_legals.legals.models"
                ]
            },
            {
                "name": "rbcn_legals.summary.utils",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\summary\\utils.py",
                "imports": []
            },
            {
                "name": "rbcn_legals.summary.__init__",
                "path": "C:\\Users\\potyk\\PycharmProjects\\rbcn_legals\\rbcn_legals\\summary\\__init__.py",
                "imports": []
            }
        ]
    },
    mutations: {},
    actions: {}
})
