import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        email: '',
        timezone: '',
        pet_name: '',
        pet_type: '',
        pet_age: '',
    });
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/api/contact', { // Replace with your backend API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setShowPopup(true);
                setTimeout(() => {
                    setShowPopup(false);
                    navigate('/');
                }, 3000); // 3 seconds delay before redirecting
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <div className="content">
                <h1>Contact Us!</h1>
                <p className="content">You've come to the right place! Please complete the entire form in order for us to connect you with the best Pexpert.</p>
                <p className="content">**ALL FIELDS ARE REQUIRED**</p>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <img className="pexpert" src="/images/meeting.png" alt="pet experts discussing pet health" />
                        <label htmlFor="name">Name</label><br />
                        <input type="text" id="name" name="name" placeholder="Your first and Last name.." required value={formData.name} onChange={handleChange} /><br />
                        <label htmlFor="phone_number">Phone Number</label><br />
                        <input type="tel" id="tel" name="phone_number" placeholder="Your phone number.." required value={formData.phone_number} onChange={handleChange} /><br />
                        <label htmlFor="email">Email Address</label><br />
                        <input type="email" id="email" name="email" placeholder="Your email address.." required value={formData.email} onChange={handleChange} /><br />
                        <label htmlFor="timezone">Time Zone</label><br />
                        <select id="timezone" name="timezone" required value={formData.timezone} onChange={handleChange}>
                            <option value="Pacific Standard Time (PST)">Pacific Standard Time (PST)</option>
                            <option value="Mountain Standard Time (MST)">Mountain Standard Time (MST)</option>
                            <option value="Central Standard Time (CST)">Central Standard Time (CST)</option>
                            <option value="Eastern Standard Time (EST)">Eastern Standard Time (EST)</option>
                        </select><br />
                        <label htmlFor="pet_name">Pet's Name</label><br />
                        <input type="text" id="pet_name" name="pet_name" placeholder="Your pet's name.." required value={formData.pet_name} onChange={handleChange} /><br />
                        <label htmlFor="pet_type">Pet Type</label><br />
                        <select id="pet_type" name="pet_type" required value={formData.pet_type} onChange={handleChange}>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Bird">Bird</option>
                            <option value="Other">Other</option>
                        </select><br />
                        <label htmlFor="pet_age">Pet's Age</label><br />
                        <input type="text" id="pet_age" name="pet_age" placeholder="Your pet's age.." required value={formData.pet_age} onChange={handleChange} /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <p className="content">
                    Thank you for trusting Paradigm Pet Professionals. A Pexpert will be in touch within 24-48 hours.
                </p>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="popup">
                    <p>Thank you! Someone will be in contact within 24 hours via phone or email.</p>
                </div>
            )}
        </div>
    );
}

export default Contact;
