import React, { useState } from 'react';
import axios from 'axios';

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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/contact', formData)
            .then(response => {
                alert('Form submitted successfully');
            })
            .catch(error => {
                console.error('There was an error submitting the form!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange} required />
            <label>Phone Number</label>
            <input type="tel" name="phone_number" onChange={handleChange} required />
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} required />
            <label>Time Zone</label>
            <select name="timezone" onChange={handleChange} required>
                <option value="PST">Pacific Standard Time (PST)</option>
                <option value="MST">Mountain Standard Time (MST)</option>
                <option value="CST">Central Standard Time (CST)</option>
                <option value="EST">Eastern Standard Time (EST)</option>
            </select>
            <label>Pet's Name</label>
            <input type="text" name="pet_name" onChange={handleChange} required />
            <label>Pet Type</label>
            <select name="pet_type" onChange={handleChange} required>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Bird">Bird</option>
                <option value="Other">Other</option>
            </select>
            <label>Pet's Age</label>
            <input type="text" name="pet_age" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Contact;
