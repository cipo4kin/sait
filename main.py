from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()
class ContactRequest(BaseModel):
    name: str
    phone: str
    comment: str
@app.post("/contact")
def send_contact(request: ContactRequest):
    return {"message": "Заявка отправлена"}