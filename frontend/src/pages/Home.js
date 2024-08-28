import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-content">
            {/* Main Content */}
            <img className="consult" src="/images/ipad-meeting.png" alt="Consultation using an iPad outside on a bench" />
            <p className="content" style={{ textAlign: 'center' }}>
                Paradigm Pet Professionals has 12 years of experience working with pet owners, certifications in pet health and nutrition, and customer recognition for outstanding support.
            </p>
            <p className="content" style={{ textAlign: 'center' }}>We provide:</p>
            <ul>
                <li>Virtual Consultations and Presentations</li>
                <li>One-on-One Consultations Concerning Individual Pets</li>
                <li>Group Presentations Regarding General Pet Care</li>
            </ul>
            <p className="content" style={{ textAlign: 'center' }}>
                Does your pet need help? We are here for you! Complete our contact form and we will reach out to you within 24-48 hours.
            </p>

            {/* Contact Button */}
            <div className="center-button">
                <Link to="/contact">
                    <button>Click here to get started!</button>
                </Link>
            </div>

            {/* Additional Content */}
            <p className="content" style={{ textAlign: 'center' }}>
                At Paradigm Pet Professionals, we believe that pets are a gift from nature to humanity. According to scientific research, opening our homes and hearts to a pet extends our lives and enhances our and our pets' quality of life. Our goal at Pet Paradigm Professionals is to provide you with tools to assist you in taking care of your loved ones who are furry, scaly, feathered, and slimy. For the past twelve years, our "Pexperts," or pet experts, have worked with professionals and pet owners offering both new pet care consultations and new pet consultations.
            </p>
            <p className="content" style={{ textAlign: 'center' }}>
                Looking for some general pet care tips for the most typical breeds of animals? Do you need more guidance choosing the best kind of pet for you and your family? To ensure the long-term health and wellbeing of your new pet, we will collaborate with you and give them individualized evidence-based pet care.
            </p>
            <img
                src="/images/best-friend.png"
                alt="Heart collage of many pets"
                style={{ borderRadius: '2em', display: 'block', margin: 'auto', width: '50%' }}
            />

            {/* Resource Links */}
            <ul id="resourcelinks">
                <li><a href="https://theshelterpetproject.org/" target="_blank" rel="noopener noreferrer">General Adoption Resources</a></li>
                <li><a href="https://www.aspca.org/" target="_blank" rel="noopener noreferrer">ASPCA</a></li>
                <li><a href="https://www.sterlingshelter.org/humane-society/koi-fish-rescue/" target="_blank" rel="noopener noreferrer">Fish Rescue</a></li>
                <li><a href="https://savethesnakes.org/snakerescuecall/" target="_blank" rel="noopener noreferrer">Snake Rescue</a></li>
                <li><a href="https://ftlob.rescuegroups.org/" target="_blank" rel="noopener noreferrer">Bird Rescue</a></li>
            </ul>

            <p className="content">
                We are also delighted to guide you through the adoption procedure! We will walk you through every step of the process, from choosing the breed of pet that is most suitable for your household and lifestyle to filling out the necessary paperwork, to bringing your new family member home. To make a consultation request, kindly complete our <Link to="/contact">contact form</Link>. Within 48 hours, we'll get in touch with you to arrange a consultation. Every field is necessary.
            </p>
        </div>
    );
}

export default Home;
