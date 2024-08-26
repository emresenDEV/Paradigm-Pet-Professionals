import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar-logo">
                    <img src="/images/ppp-logo.png" alt="Paradigm Pet Professionals Logo" />
                </Link>
            </div>
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
                <form className="form">
                    <input id="search" type="text" className="input" placeholder="search..." />
                    <button id="searchbtn" className="search-results">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
