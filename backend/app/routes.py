from flask import Blueprint, jsonify, request
from . import db
from .models import ContactForm

main = Blueprint('main', __name__)

@main.route('/api/contact', methods=['POST'])
def add_contact():
    data = request.json

    new_contact = ContactForm(
        name=data['name'],
        phone_number=data['phone_number'],
        email=data['email'],
        timezone=data['timezone'],
        pet_name=data['pet_name'],
        pet_type=data['pet_type'],
        pet_age=data['pet_age']
    )

    db.session.add(new_contact)
    db.session.commit()

    return jsonify({'message': 'Contact form submitted successfully'}), 201
