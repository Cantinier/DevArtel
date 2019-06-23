from marshmallow import ValidationError
from app.libs.data_form import DataSchema
from app.libs.data_converter import DataConverter
from numpy import array
from app.libs.model_comment import ModelLoader, Tokenizer


class CommentChecker:

    @staticmethod
    def tokenize(text):
        tokenizer = Tokenizer()
        return tokenizer.tokenize(text)



    @staticmethod
    def check_comment(json):
        try:
            text_from_json = json['text']
            tokenizer_text = CommentChecker.tokenize(text_from_json)
            check = ModelLoader().check(tokenizer_text)

            return {'result': check}
        except ValidationError:
            raise
