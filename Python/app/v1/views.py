from marshmallow import ValidationError
from traceback import format_exc
from flask import Blueprint, request, jsonify

from ..libs.contractor_checker import ContractorChecker
from ..libs.resp_form import req_test

blueprints_v1 = Blueprint(__name__, 'blueprints_v1', url_prefix='/v1')



@blueprints_v1.route('get_status', methods=['GET'])
def get_status():
    return jsonify({"status": "OK"})


@blueprints_v1.route('check_contractor', methods=['POST'])
def data():
    print(request.json)
    return jsonify(ContractorChecker.check_contractor(request.json))


@blueprints_v1.route('test_rest', methods=['GET'])
def test_rest():
    return jsonify(req_test())


@blueprints_v1.errorhandler(ValidationError)
def validation_json(error: ValidationError):
    return jsonify({'error': error.args[0]}), 400


@blueprints_v1.errorhandler(Exception)
def all_exception(error: Exception):
    return jsonify({'error': error.args}), 520
