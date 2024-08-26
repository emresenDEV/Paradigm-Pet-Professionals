from . import db

class ContactForm(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    timezone = db.Column(db.String(50), nullable=False)
    pet_name = db.Column(db.String(50), nullable=False)
    pet_type = db.Column(db.String(20), nullable=False)
    pet_age = db.Column(db.String(10), nullable=False)
