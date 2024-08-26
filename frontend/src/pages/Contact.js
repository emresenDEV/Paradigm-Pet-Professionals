import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Contact() {
    return (
        <div>
            
            <div className="content">
                <h1>Contact Us!</h1>
                <p className="content">You've come to the right place! Please complete the entire form in order for us to connect you with the best Pexpert.</p>
                <p className="content">**ALL FIELDS ARE REQUIRED**</p>
                <div className="container">
                    <form action="POST">
                        <img className="pexpert" src="/images/meeting.png" alt="pet experts discussing pet health" />
                        <label htmlFor="name">Name</label><br />
                        <input type="text" id="name" name="name" placeholder="Your first and Last name.." required /><br />
                        <label htmlFor="telephone">Phone Number</label><br />
                        <input type="tel" id="tel" name="phonenumber" placeholder="Your phone number.." required /><br />
                        <label htmlFor="email">Email Address</label><br />
                        <input type="email" id="email" name="email" placeholder="Your email address.." required /><br />
                        <label htmlFor="timezone">Time Zone</label><br />
                        <select id="timezone" name="timezone" required>
                            <option value="Pacific Standard Time (PST)">Pacific Standard Time (PST)</option>
                            <option value="Mountain Standard Time (MST)">Mountain Standard Time (MST)</option>
                            <option value="Central Standard Time (CST)">Central Standard Time (CST)</option>
                            <option value="Eastern Standard Time (EST)">Eastern Standard Time (EST)</option>
                        </select><br />
                        <label htmlFor="petname">Pet's Name</label><br />
                        <input type="text" id="petname" name="petname" placeholder="Your pet's name.." required /><br />
                        <label htmlFor="pet-type">Pet Type</label><br />
                        <select id="pet-type" name="pet-type" required>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Bird">Bird</option>
                            <option value="Other">Other</option>
                        </select><br />
                        <label htmlFor="petage">Pet's Age</label><br />
                        <input type="text" id="petage" name="petage" placeholder="Your pet's age.." required /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <p className="content">
                    Thank you for trusting Paradigm Pet Professionals. A Pexpert will be in touch within 24-48 hours.
                </p>
            </div>

        </div>
    );
}

export default Contact;
