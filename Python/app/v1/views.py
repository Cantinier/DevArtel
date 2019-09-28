from marshmallow import ValidationError
from flask import Blueprint, request, jsonify, send_from_directory

from Python.app.libs.file_lib.upload_file import allowed_file, upload_file
from Python.app.libs.ml_lib.fatigue_checker import check_fatigue

import Python.config as config

blueprints_v1 = Blueprint(__name__, 'blueprints_v1', url_prefix='/v1')


@blueprints_v1.route('get_status', methods=['GET'])
def get_status():
    return jsonify({"status": "OK"})


# region ml
@blueprints_v1.route('/ml', methods=['GET', 'POST'])
def ml():
    if request.method == 'POST':
        file = request.files['file']
        result = check_fatigue(file)
        return result
    return '''
        <!doctype html>
        <title>Upload new File</title>
        <h1>Upload new File</h1>
        <form action="" method=post enctype=multipart/form-data>
          <p><input type=file name=file>
             <input type=submit value=Upload>
        </form>
        '''
# endregion


# region arduino
@blueprints_v1.route('/set_stat', methods=['GET', 'POST'])
def set_stat():
    if request.method == 'POST':
        request_json = request.json
        print(request_json)
        return jsonify({"status": "OK"})

# @blueprints_v1.route('/set_stat_test', methods=['GET', 'POST'])
# def set_stat():
#     requests.post(url=API_ENDPOINT, data=data)
# endregion


# region get set screen
@blueprints_v1.route('/upload_file', methods=['GET', 'POST'])
def up_file():
    if request.method == 'POST':
        file = request.files['file']
        if file and allowed_file(file.filename):
            return jsonify(upload_file(file))

    return '''
                <!doctype html>
                <title>Upload new File</title>
                <h1>Upload new File</h1>
                <form action="" method=post enctype=multipart/form-data>
                  <p><input type=file name=file>
                     <input type=submit value=Upload>
                </form>
            '''


@blueprints_v1.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(config.UPLOAD_FOLDER,
                               filename)
# endregion


# region tech
@blueprints_v1.errorhandler(ValidationError)
def validation_json(error: ValidationError):
    return jsonify({'error': error.args[0]}), 400

#
# @blueprints_v1.errorhandler(Exception)
# def all_exception(error: Exception):
#     return jsonify({'error': error.args}), 520
# # endregion

# region messager
@blueprints_v1.route('/get_msg', methods=['GET'])
def get_msg():
    request = list()
    request.append({"Head": "Head msg", "Body": "Body msg"})
    return jsonify(request)
# endregion