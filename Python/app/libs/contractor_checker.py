from marshmallow import Schema, fields, post_load, ValidationError


class ContractorChecker:
    def check_contractor(self, json):
        try:
            #message_parser = SomeSchema().load(json)
            #return SomeSchema(only=('t_is_disc', 'all')).dump(message_parser)
            pass
        except ValidationError:
            raise

if __name__ == "__main__":
    print(ContractorChecker.check_contractor({"t_is_disc": 0, "mail": "foo@bar.com", "name": "jjj"}))