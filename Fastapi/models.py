from sqlchemy import Column, Integer,string
from sqlchemy.orm import declarative_base

Base = declarative_base()
class user(Base):
    _tablename_="users"
    id = Column(Integer)
    name = Column(string(100))