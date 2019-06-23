from flask import Flask
from app import blueprints
from logger_sett import logger_set_up


def get_app():
    logger_set_up()
    app = Flask(__name__)
    for blueprint in blueprints:
        app.register_blueprint(blueprint)

    return app
