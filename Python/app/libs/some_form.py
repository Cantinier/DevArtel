from marshmallow import Schema, fields, post_load, ValidationError
import logging

logger = logging.getLogger("first_logger")


class SomeSchema(Schema):
    pass


def get_some_json(json):
    try:
        message_parser = SomeSchema().load(json)
        return SomeSchema(only=('id', 'all')).dump(message_parser)
    except ValidationError:
        raise


if __name__ == "__main__":
    print(get_some_json({"id": 42, "mail": "foo@bar.com", "name": "jjj"}))