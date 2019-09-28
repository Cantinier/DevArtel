from flask_runner import get_app
import config

app = get_app()

if __name__ == '__main__':
    app.config['UPLOAD_FOLDER'] = config.UPLOAD_FOLDER
    app.run(debug=True, host='10.70.0.243', port=9999)
    #app.run(debug=True, host='127.0.0.1', port=9999)
