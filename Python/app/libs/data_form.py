from marshmallow import Schema, fields, post_load
import logging

logger = logging.getLogger("first_logger")


class DataClass:
    def __init__(self, t_is_disc: int,
                 t_count_lic: int,
                 t_ur_on_adr: int,
                 t_count_firm: int,
                 t_mounts_registr: int,
                 capital: int,
                 debt: int,
                 t_count_tndrs_open: int,
                 t_count_tndrs_succsflly: int,
                 t_count_tndrs_fail: int,
                 count_jail: int
                 ):
        self.t_is_disc = t_is_disc
        self.t_count_lic = t_count_lic
        self.t_ur_on_adr = t_ur_on_adr
        self.t_count_firm = t_count_firm
        self.t_mounts_registr = t_mounts_registr
        self.capital = capital
        self.debt = debt
        self.t_count_tndrs_open = t_count_tndrs_open
        self.t_count_tndrs_succsflly = t_count_tndrs_succsflly
        self.t_count_tndrs_fail = t_count_tndrs_fail
        self.count_jail = count_jail


class DataSchema(Schema):
    t_is_disc = fields.Int(required=True)
    t_count_lic = fields.Int(required=True)
    t_ur_on_adr = fields.Int(required=True)
    t_count_firm = fields.Int(required=True)
    t_mounts_registr = fields.Int(required=True)
    capital = fields.Int(required=True)
    debt = fields.Int(required=True)
    t_count_tndrs_open = fields.Int(required=True)
    t_count_tndrs_succsflly = fields.Int(required=True)
    t_count_tndrs_fail = fields.Int(required=True)
    count_jail = fields.Int(required=False)

    @post_load
    def make(self, data):
        return DataClass(**data)
