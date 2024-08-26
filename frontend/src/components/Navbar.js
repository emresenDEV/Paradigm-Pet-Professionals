import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';

function Navbar() {
    const [query, setQuery] = useState('');
    const { searchWebsite } = useContext(SearchContext);
    const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefault();

        const websiteContent = [
            {
                title: 'Home',
                link: '/',
                sections: [
                    { title: 'Main Section', content: 'Paradigm Pet Professionals has 12 years of experience working with pet owners, certifications in pet health and nutrition, and customer recognition for outstanding support.' },
                    { title: 'Virtual Consultations', content: 'We provide: Virtual Consultations and Presentations One-on-One Consultations Concerning Individual Pets Group Presentations Regarding General Pet Care Does your pet need help? We are here for you! Complete our contact form and we will reach out to you within 24-48 hours.' }
                ]
            },
            {
                title: 'Dogs',
                link: '/dogs',
                sections: [
                    { title: 'Diet and Exercise', content: '...for all breeds of dogs...' }
                ]
            },
            {
                title: 'Cats',
                link: '/cats',
                sections: [
                    { title: 'Four Weeks to One Year', content: '...different breeds...' }
                ]
            }
            {
                title: 'Birds',
                link: '/birds',
                sections: [
                    { title: 'Four Weeks to One Year', content: '...different breeds...' }
                ]
            }
        ];

        searchWebsite(query, websiteContent);
        history.push('/search-results');  // Redirect to the search results page
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
