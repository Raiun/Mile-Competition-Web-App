from fastapi import FastAPI
from db import collection
from bson.json_util import dumps

app = FastAPI()

@app.get("/")
def read_root():
    data = collection.find({})
    return dumps(list(data))

@app.get("/ryan_votes")
def get_ryan_votes():
    data = collection.find({"Ryan"})
    return dumps(list(data))