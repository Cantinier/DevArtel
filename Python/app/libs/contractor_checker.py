from marshmallow import ValidationError
from app.libs.data_form import DataSchema
from app.libs.data_converter import DataConverter
from numpy import array
from app.libs.model_contr import ModelLoader


class ContractorChecker:

    @staticmethod
    def check_contractor(json):
        try:
            message_parser = DataSchema().load(json)
            values = [list(message_parser.__dict__.values())]
            data_array = array(values).astype('float32')
            converted_data = DataConverter().transform(data_array)
            predict = float(ModelLoader().predict(converted_data)[0][0])
            return {'predict': predict}
        except ValidationError:
            raise
