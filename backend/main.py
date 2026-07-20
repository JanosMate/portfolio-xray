from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class SimulationRequest(BaseModel):
    allocation: dict[str, float]
    annual_fee_pct: float
    initial_investment: float
    years: int
    n_simulations: int

@app.post("/simulate")
def run_simulation(config: SimulationRequest):
    return {
        "status": "success",  
    }
