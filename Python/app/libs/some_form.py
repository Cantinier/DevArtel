from marshmallow import Schema, fields, post_load, ValidationError
import logging

logger = logging.getLogger("first_logger")


class SomeClass:
    def __init__(self, id: int, t_is_disc: int, t_count_lic: int, t_ur_on_adr: int, t_count_firm: int):
        self.id = id
        self.t_is_disc = t_is_disc
        self.t_count_lic = t_count_lic
        self.t_ur_on_adr = t_ur_on_adr
        self.t_count_firm = t_count_firm
        self.all = self.get_all()

    def get_all(self):
        return "{}{}{}{}{}".format(self.id, self.t_is_disc,
                                self.t_count_lic, self.t_ur_on_adr,
                                self.t_count_firm)


class SomeSchema(Schema):
    id = fields.Int(required=True)
    t_is_disc = fields.Int(required=True)
    t_count_lic = fields.Int(required=True)
    t_ur_on_adr = fields.Int(required=True)
    t_count_firm = fields.Int(required=True)
    all = fields.Str()

    @post_load
    def make(self, data):
        return SomeClass(**data)


def get_some_json(json):
    try:
        message_parser = SomeSchema().load(json)
        return SomeSchema(only=('id', 'all')).dump(message_parser)
    except ValidationError:
        raise


if __name__ == "__main__":
    print(get_some_json({"id": 42, "mail": "foo@bar.com", "name": "jjj"}))