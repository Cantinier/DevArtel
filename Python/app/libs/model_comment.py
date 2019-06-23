import pickle
from numpy import array
from keras.preprocessing.sequence import pad_sequences


class ModelLoader:
    model = None

    def __init__(self):
        if not ModelLoader.model:
            with open('./app/libs/data/model_sentiment.pickle', 'rb') as data:
                ModelLoader.model = pickle.load(data)

    @staticmethod
    def check(text):
        text = pad_sequences(text, maxlen=100)
        return float(ModelLoader.model.predict(text)[0][0])

class Tokenizer:
    tokenizer = None

    def __init__(self):
        if not Tokenizer.tokenizer:
            with open('./app/libs/data/tokenizer.pickle', 'rb') as data:
                Tokenizer.tokenizer = pickle.load(data)

    @staticmethod
    def tokenize(text):
        print(text)
        return Tokenizer.tokenizer.texts_to_sequences([text])