from marshmallow import Schema, fields, post_load, ValidationError
import logging

logger = logging.getLogger("first_logger")


class SomeClass:
    def __init__(self, t_is_disc: int,
                 t_count_lic: int,
                 t_ur_on_adr: int,
                 t_count_firm: int,
                 t_mounts_registr: int,
                 capital: int,
                 debt: int,
                 t_count_tndrs: int,
                 t_count_tndrs_open: int,
                 t_count_tndrs_succsflly: int,
                 t_count_tndrs_fail: int,
                 rating: float,
                 count_jail: int
                 ):
        self.t_is_disc = t_is_disc
        self.t_count_lic = t_count_lic
        self.t_ur_on_adr = t_ur_on_adr
        self.t_count_firm = t_count_firm
        self.t_mounts_registr = t_mounts_registr
        self.capital = capital
        self.debt = debt
        self.t_count_tndrs = t_count_tndrs
        self.t_count_tndrs_open = t_count_tndrs_open
        self.t_count_tndrs_succsflly = t_count_tndrs_succsflly
        self.t_count_tndrs_fail = t_count_tndrs_fail
        self.rating = rating
        self.count_jail = count_jail
        self.all = self.get_all()

    def get_all(self):
        return "{}{}{}{}{}".format(self.t_is_disc, self.t_is_disc,
                                   self.t_count_lic, self.t_ur_on_adr,
                                   self.t_count_firm)


class SomeSchema(Schema):
    t_is_disc = fields.Int(required=True)
    t_count_lic = fields.Int(required=True)
    t_ur_on_adr = fields.Int(required=True)
    t_count_firm = fields.Int(required=True)
    t_mounts_registr = fields.Int(required=True)
    capital = fields.Int(required=True)
    debt = fields.Int(required=True)
    t_count_tndrs = fields.Int(required=True)
    t_count_tndrs_open = fields.Int(required=True)
    t_count_tndrs_succsflly = fields.Int(required=True)
    t_count_tndrs_fail = fields.Int(required=True)
    rating = fields.Float(required=False)
    count_jail = fields.Float(required=False)
    all = fields.Str()

    @post_load
    def make(self, data):
        return SomeClass(**data)


def get_some_json(json):
    try:
        message_parser = SomeSchema().load(json)
        return SomeSchema(only=('t_is_disc', 'all')).dump(message_parser)
    except ValidationError:
        raise


if __name__ == "__main__":
    print(get_some_json({"t_is_disc": 0, "mail": "foo@bar.com", "name": "jjj"}))
