import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/">
                <img id="header-img" src="/images/ppp-logo.png" alt="Paradigm Pet Professionals Logo" width="20%" />
            </Link>
            <h2 style={{ textAlign: 'right', color: '#003BD6', paddingTop: '5%', paddingBottom: '0%' }}>
                <em>Evidence-based pet care advice for every pet lover.</em>
            </h2>
        </header>
    );
}

export default Header;
