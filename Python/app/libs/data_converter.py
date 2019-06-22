import pickle
from numpy import array
import logging

logger = logging.getLogger("first_logger")


class DataConverter:
    with open('./data/converter.pickle', 'rb') as data:
        converter = pickle.load(data)
        logger.info("Converter loaded")

    def transform(self, data: array) -> array:
        return DataConverter.converter.transform(data)


if __name__ == "__main__":
    dc = DataConverter()
