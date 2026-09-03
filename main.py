from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import smtplib
from email.message import EmailMessage

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


SMTP_EMAIL = os.environ["SMTP_EMAIL"]
SMTP_PASSWORD = os.environ["SMTP_PASSWORD"]
TARGET_EMAIL = "klodkodovic888@gmail.com"


@app.post("/contact")
def send_contact(request: ContactRequest):
    message = EmailMessage()

    message["Subject"] = "Новая заявка с сайта ЛЕСЪТИМ"
    message["From"] = SMTP_EMAIL
    message["To"] = TARGET_EMAIL

    message.set_content(
        f"Имя: {request.name}\n"
        f"Телефон: {request.phone}\n"
        f"Комментарий: {request.comment}"
    )

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(SMTP_EMAIL, SMTP_PASSWORD)
        server.send_message(message)

    return {"message": "Заявка отправлена"}