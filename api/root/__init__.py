from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_restful import Api
from config import Config


def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object(Config)
    app.debug = True
    CORS(app, resources={r"/*": {"origins": "*"}})

    jwt = JWTManager()

    api = Api(app)

    from root.home import Home
    api.add_resource(Home, "/", endpoint="Home")

    from root.auth import auth_bp
    app.register_blueprint(auth_bp)

    from root.dashboard import dashboard_bp
    app.register_blueprint(dashboard_bp, url_prefix="/api")

    api.init_app(app)
    jwt.init_app(app)

    return app
