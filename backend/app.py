from flask import Flask, render_template, request, jsonify, session, redirect
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
from icecream import ic
from flask_cors import CORS 
from flask_session import Session
import config
import uuid
import time

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText



ic.configureOutput(prefix=f'______________ | ', includeContext=True)

app = Flask(__name__)
if __name__ == "__main__":
    app.run(debug=True, port=5000)

app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

CORS(app)

##############################
@app.route("/")
def show_index():
    return render_template("index.html")




@app.get("/email")
def send_verify_email():
    try:
        # Create a gmail fullflaskdemomail
        # Enable (turn on) 2 step verification/factor in the google account manager
        # Visit: https://myaccount.google.com/apppasswords
        # Copy the key :
 
        # Email and password of the sender's Gmail account
        sender_email = "katjamaehleke98@gmail.com"
        password = "ujpv sxpa hspn enze"  # If 2FA is on, use an App Password instead
 
        # Receiver email address
        receiver_email = "katjamaehleke98@gmail.com"
        
        # Create the email message
        message = MIMEMultipart()
        message["From"] = "washworld"
        message["To"] = receiver_email
        message["Subject"] = "Please verify your account"
 
        # Body of the email
        body = f"""Test email"""
        message.attach(MIMEText(body, "html"))
 
        # Connect to Gmail's SMTP server and send the email
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()  # Upgrade the connection to secure
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message.as_string())
        print("Email sent successfully!")
 
        return "email sent"
       
    except Exception as ex:
        return "cannot send email", 500
    finally:
        pass