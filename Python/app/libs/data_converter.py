import pickle


class DataConverter:
    with open('data/converter.pickle', 'rb') as data:
        converter = pickle.load(data)
