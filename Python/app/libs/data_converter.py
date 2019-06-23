import pickle
from numpy import array


class DataConverter:
    converter = None

    def __init__(self):
        if not DataConverter.converter:
            with open('./app/libs/data/converter.pickle', 'rb') as data:
                DataConverter.converter = pickle.load(data)

    @staticmethod
    def transform(data: array) -> array:
        return DataConverter.converter.transform(data)
