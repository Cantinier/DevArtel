from flask import Flask
from app import blueprints
from logger_sett import logger_set_up


#from app.libs.models_handler import ModelsHandler
#from app.libs.data_converter import DataConverter


def get_app():
    logger_set_up()
    #ModelsHandler()
    #DataConverter()
    app = Flask(__name__)
    for blueprint in blueprints:
        app.register_blueprint(blueprint)

    return app