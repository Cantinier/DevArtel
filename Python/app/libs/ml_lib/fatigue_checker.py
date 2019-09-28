from marshmallow import ValidationError
from Python.app.libs.ml_lib.model import ModelLoader
from keras.preprocessing.image import img_to_array, load_img
import numpy as np
from PIL import Image
import os
from keras.models import load_model

import cv2
from PIL import Image

eye_cascade = cv2.CascadeClassifier('./opencv_face.xml')


def image_preprocessing(image):
    img_eye = Image.fromarray(image, 'RGB')
    img_eye = img_eye.resize((34, 26), Image.ANTIALIAS).convert('L')
    return np.expand_dims(np.array(img_eye), axis=2) / 255.


def detect_eyes(image):
    gray_frame = np.array(cv2.cvtColor(np.float32(image), cv2.COLOR_BGR2GRAY), dtype='uint8')

    eyes = eye_cascade.detectMultiScale(gray_frame, 1.3, 5)

    width, height = np.size(image, 1), np.size(image, 0)
    left_eye = np.ones((34, 26, 3))
    right_eye = np.ones((34, 26, 3))
    for (x, y, w, h) in eyes:
        if y > height / 2:
            pass
        eyecenter = x + w / 2
        if eyecenter < width * 0.5:
            left_eye = image[y:y + h, x:x + w]
        else:
            right_eye = image[y:y + h, x:x + w]
    for eye in [left_eye, right_eye]:
        yield image_preprocessing(eye)


def check_fatigue(file):
    print(file)
    file.save('test.jpeg')
    img = cv2.imread('test.jpeg')
    arr_eye = np.array([i for i in detect_eyes(img)])

    model = load_model('./app/libs/data/model7.h5')
    model._make_predict_function()
    predict = [float(i) for i in ModelLoader().predict(arr_eye)]
    #predict = [float(i) for i in model.predict(arr_eye)]
    print('predict ' + str(predict))
    return {'predict ': list(predict)}

