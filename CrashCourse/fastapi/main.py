from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class SimulationRequest(BaseModel):
    fee: float

@app.get("/health")
def read_root():
    return {"status": "ok"}

@app.post("/simulate")
def run_simulation(config: SimulationRequest):
    return {
        "status": "success",  
    }
