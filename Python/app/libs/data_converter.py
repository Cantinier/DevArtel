import pickle
from numpy import array
import logging

logger = logging.getLogger("first_logger")


class DataConverter:
    converter = None

    def __init__(self):
        if not DataConverter.converter:
            with open('./data/converter.pickle', 'rb') as data:
                DataConverter.converter = pickle.load(data)
                logger.info("Converter loaded")

    def transform(self, data: array) -> array:
        return DataConverter.converter.transform(data)


if __name__ == "__main__":
    a = array([[0.000e+00, 0.000e+00, 1.000e+00, 1.000e+00, 4.400e+01, 1.813e+06,
       0.000e+00, 1.000e+01, 5.000e+00, 6.000e+00, 0.000e+00]])
    print(DataConverter().transform(a))
    # array([[-0.05402939, -0.14782132, -0.21397636, -0.21899388, -1.23472397, -0.54385875, -0.47447827,  2.22732531, -0.33388654,  0.31518291, -0.37867873]])


