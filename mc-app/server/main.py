from fastapi import FastAPI
from db import collection

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}
