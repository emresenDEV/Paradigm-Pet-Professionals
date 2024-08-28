import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';

function Navbar() {
    const [query, setQuery] = useState('');
    const { searchWebsite } = useContext(SearchContext);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        const websiteContent = [
            {
                title: 'Home',
                link: '/',
                sections: [
                    { title: 'Main Section', content: 'Paradigm Pet Professionals has 12 years of experience working with pet owners, certifications in pet health and nutrition, and customer recognition for outstanding support.' },
                    { title: 'Virtual Consultations', content: 'We provide: Virtual Consultations and Presentations One-on-One Consultations Concerning Individual Pets Group Presentations Regarding General Pet Care Does your pet need help? We are here for you! Complete our contact form and we will reach out to you within 24-48 hours.' },
                    { title: 'Beliefs', content: 'At Paradigm Pet Professionals, we believe that pets are a gift from nature to humanity. According to scientific research, opening our homes and hearts to a pet extends our lives and enhances our and our pets\' quality of life. Our goal at Pet Paradigm Professionals is to provide you with tools to assist you in taking care of your loved ones who are furry, scaly, feathered, and slimy. For the past twelve years, our "Pexperts," or pet experts, have worked with professionals and pet owners offering both new pet care consultations and new pet consultations. Looking for some general pet care tips for the most typical breeds of animals? Do you need more guidance choosing the best kind of pet for you and your family? To ensure the long-term health and wellbeing of your new pet, we will collaborate with you and give them individualized evidence-based pet care.' },
                    { title: 'Adoption Links', content: 'General Adoption Resources ASPCA Fish Rescue Snake Rescue Bird Rescue Dog Rescue Cat Rescue' },
                    { title: 'Contact Form', content: 'We are also delighted to guide you through the adoption procedure! We will walk you through every step of the process, from choosing the breed of pet that is most suitable for your household and lifestyle to filling out the necessary paperwork, to bringing your new family member home. To make a consultation request, kindly complete our contact form. Within 48 hours, we\'ll get in touch with you to arrange a consultation. Every field is necessary.' }
                ]
            },
            {
                title: 'Dogs',
                link: '/dogs',
                sections: [
                    { title: 'Diet and Exercise', content: 'If you own a dog, it is crucial to ensure that you take good care of it. Pay attention to what you feed your dog and give it plenty of opportunity to exercise. On this website, you may learn more about how to take care of your pets at different stages of their lives.Dogs should typically be fed fewer meals as they get older during the course of their lifetimes. Puppies should be breastfed for the first two months before being weaned onto three meals a day at roughly the three to six month mark. When they are between the ages of six months and one year, their food consumption should be decreased to two meals per day, and once they are one year old, it should be lowered to just one meal. And between 60 and 70 percent of a dog\'s usual body weight is water. Make sure to keep your dog hydrated because, according to the ASPCA, even a 10% reduction in body fluids can result in disease or death. Dogs, like people, require sunlight and fresh air in addition to a fair amount of activity to maintain the health of their organs. The minimum amount of activity that is advised varies widely depending on breed and size, but generally speaking, 30-120 minutes of exercise each day are advised! Can you picture working out for two hours every day? Okay, I understand that won\'t disturb some of the readers. But I shiver just thinking about it! By the way, exercising your dog does not entail that you are being forced to participate in a push-up competition. Even quick strolls are acceptable! Toys that promote physical activity are also available; just make sure they are age-appropriate and do not contain any harmful materials. Be sure to pay special attention to toys that require supervision.' }
                ]
            },
            {
                title: 'Cats',
                link: '/cats',
                sections: [
                    { title: 'Four Weeks to One Year', content: '...different breeds...' }
                ]
            },
            {
                title: 'Birds',
                link: '/birds',
                sections: [
                    { title: 'Four Weeks to One Year', content: '...different breeds...' }
                ]
            }
        ];

        searchWebsite(query, websiteContent);
        navigate('/search-results');  
    };

    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <div className="dropdown">
                    <button className="dropbtn">
                        Pets
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/cats">Cats</Link>
                        <Link to="/dogs">Dogs</Link>
                        <Link to="/birds">Birds</Link>
                    </div>
                </div>
                <Link to="/contact">Contact Us!</Link>
            </div>
            <div className="navbar-search">
                <form className="form" onSubmit={handleSearch}>
                    <input
                        id="search"
                        type="text"
                        className="input"
                        placeholder="search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button id="searchbtn" className="search-results">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
