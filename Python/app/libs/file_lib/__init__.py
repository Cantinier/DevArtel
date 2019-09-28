from datetime import datetime
import logging


def get_file_name():
    file_name = datetime.now().strftime("%d.%m.%Y%Hh%Mm")