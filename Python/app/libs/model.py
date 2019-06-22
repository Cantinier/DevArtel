import pickle
from numpy import array


class ModelLoader:
    with open('./data/model.pickle', 'rb') as model:
        model = pickle.load(model)

    @staticmethod
    def predict(data: array) -> float:
        return ModelLoader.model.predict_proba(data)
