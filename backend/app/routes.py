from flask import Flask, Blueprint, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail, Message
from .models import ContactForm

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///instance/app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'paradigmpetprofessionals@gmail.com'
app.config['MAIL_PASSWORD'] = 'Alaska2014!' 
app.config['MAIL_DEFAULT_SENDER'] = 'paradigmpetprofessionals@gmail.com'  

db = SQLAlchemy(app)
mail = Mail(app)
CORS(app)

main = Blueprint('main', __name__)

@main.route('/api/contact', methods=['POST'])
def add_contact():
    try:
        data = request.get_json()

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

        # Send email notification
        msg = Message('New Contact Form Submission',
                        recipients=['paradigmpetprofessionals@gmail.com'])
        msg.body = f"""
        Name: {data['name']}
        Phone Number: {data['phone_number']}
        Email: {data['email']}
        Time Zone: {data['timezone']}
        Pet Name: {data['pet_name']}
        Pet Type: {data['pet_type']}
        Pet Age: {data['pet_age']}
        """
        mail.send(msg)

        return jsonify({'message': 'Contact form submitted successfully'}), 201
    except Exception as e:
        print(f"Error: {e}")  # Logs the error to the server console
        return jsonify({'error': 'Internal Server Error'}), 500

app.register_blueprint(main)

if __name__ == '__main__':
    app.run(debug=True)
