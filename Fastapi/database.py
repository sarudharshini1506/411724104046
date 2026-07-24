from sqlalchemy import create_engine

DATABASE_URL = ""

engine = create_engine(DATABASE_URL)
from sqlalchemy import create_engine

DATABASE_URL = ""

engine = create_engine(DATABASE_URL)

try:
    conn = engine.connect()
    print("Database Connected Successfully!")
    conn.close()
except Exception as e:
    print(e)