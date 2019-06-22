import pickle
from numpy import array


class ModelLoader:
    model = None

    def __init__(self):
        if not ModelLoader.model:
            with open('./app/libs/data/model.pickle', 'rb') as data:
                ModelLoader.model = pickle.load(data)
                #logger.info("Model loaded")

    @staticmethod
    def predict(data: array) -> float:
        print(data)
        return ModelLoader.model.predict_proba(data)