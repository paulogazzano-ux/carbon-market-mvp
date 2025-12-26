from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Carbon AI Service")


class RatingRequest(BaseModel):
    project_type: str
    country: str
    standard: str
    vintage: int


class PricingRequest(BaseModel):
    project_type: str
    country: str
    standard: str
    vintage: int
    qty: int
    ask_price: float


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/rating")
def rating(request: RatingRequest):
    return {
        "grade": "A-",
        "score": 87,
        "explanations": [
            f"Strong methodology for {request.project_type}",
            f"Positive track record in {request.country}",
        ],
    }


@app.post("/pricing")
def pricing(request: PricingRequest):
    suggested_price = round(request.ask_price * 0.95, 2)
    return {
        "suggested_price": suggested_price,
        "band": "mid",
    }
