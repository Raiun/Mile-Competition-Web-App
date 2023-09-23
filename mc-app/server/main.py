from fastapi import FastAPI
from db import collection
from bson.json_util import dumps

app = FastAPI()

@app.get("/")
def read_root():
    data = collection.find({})
    return dumps(list(data))
