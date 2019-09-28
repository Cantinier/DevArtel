import pyodbc

def get_connect_ms_sql(server_name = 'localhost, 1433',
                       driver = 'ODBC Driver 17 for SQL Server',
                       db_name = 'master',
                       user_name = 'sa',
                       passw = 'HackAss12'):
    params = (
        'Driver={};'
        'Server={};'
        'Database={};'
        'MARS_Connection=yes;'
    ).format(driver, server_name, db_name)

    if user_name is not None and passw is not None:
        params+= (
            'UID = {};'
            'PWD = {};'
        ).format(user_name, passw)

    print(params)
    return pyodbc.connect(params, autocommit=True)

get_connect_ms_sql()