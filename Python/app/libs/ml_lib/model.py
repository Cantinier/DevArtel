from numpy import array
from keras.models import load_model



class ModelLoader:
    model = None

    def __init__(self):
        if not ModelLoader.model:
            ModelLoader.model = load_model('./app/libs/data/model7.h5')

    @staticmethod
    def predict(data: array) -> float:
        return ModelLoader.model.predict(data)
