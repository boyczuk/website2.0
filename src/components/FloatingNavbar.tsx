import React from 'react';
import './FloatingNavbar.css';

function Navbar() {
    return (
        <div className="navbar-box">
            <p className="navbar-button">About</p>
            <p className="navbar-button">Skills</p>
            <p className="navbar-button">Courses</p>
            <p className="navbar-button">Projects</p>
        </div>
    );
}

export default Navbar;
