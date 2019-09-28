import config
import os
from datetime import datetime


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in config.ALLOWED_EXTENSIONS


def upload_file(file):
    filename = datetime.now().strftime("%Y.%m.%d-%H:%M:%S")
    file.save(os.path.join(config.UPLOAD_FOLDER, filename))
    return {"status": "OK"}