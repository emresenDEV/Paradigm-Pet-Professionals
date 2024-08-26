import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/cats">Cats</Link>
                <Link to="/dogs">Dogs</Link>
                <Link to="/birds">Birds</Link>
                <Link to="/contact">Contact Us!</Link>
            </div>
        </footer>
    );
}

export default Footer;
