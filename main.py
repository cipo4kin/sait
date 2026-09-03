from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://cipo4kin.github.io"],
    allow_credentials=False,
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)


class ContactRequest(BaseModel):
    name: str
    phone: str
    comment: str


@app.post("/contact")
def send_contact(request: ContactRequest):
    return {"message": "Заявка отправлена"}