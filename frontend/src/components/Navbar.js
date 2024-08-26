import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <div className="dropdown">
                <button className="dropbtn" id="highlight">
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
            <div className="form-container">
                <form className="form">
                    <input id="search" type="text" className="input" placeholder="search..." />
                    <button id="searchbtn" className="search-results">Search</button>
                </form>
            </div>
        </div>
    );
}

export default Navbar;
