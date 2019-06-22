from marshmallow import Schema, fields, post_load, ValidationError
from app.libs.data_form import DataSchema
from app.libs.model import ModelLoader
from app.libs.data_converter import DataConverter
from numpy import array
from app.libs.model import ModelLoader


class ContractorChecker:

    @staticmethod
    def check_contractor(json):
        try:
            message_parser = DataSchema().load(json)
            values = [list(message_parser.__dict__.values())]
            data_array = array(values).astype('float32')
            converted_data = DataConverter().transform(data_array)
            a = float(ModelLoader().predict(converted_data)[0][0])
            return {'predict': a}
        except ValidationError:
            raise



if __name__ == "__main__":
    print(ContractorChecker.check_contractor({
        't_is_disc': 0,
        't_count_lic': 0,
        't_ur_on_adr': 2,
        't_count_firm': 4,
        't_mounts_registr': 100,
        'capital': 10000000,
        'debt': 1000,
        't_count_tndrs_open': 2,
        't_count_tndrs_succsflly': 12,
        't_count_tndrs_fail': 2,
        'count_jail': 0

    }))