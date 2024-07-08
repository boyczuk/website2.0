// Navbar.tsx
import React, { useState } from 'react';
import './FloatingNavbar.css';
import { Link } from 'react-router-dom';

interface NavbarProps {
    className?: string;
    setIsMapOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const [activeSection, setActiveSection] = useState('');

    return (
        <>
            <div className={`navbar-box ${props.className}`}>
                <Link to="/" className={`navbar-button ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setActiveSection('about')}>About</Link>
                <Link to="/" className={`navbar-button ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => setActiveSection('skills')}>Skills & Courses</Link>
                <Link to="/" className={`navbar-button ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => setActiveSection('projects')}>Projects</Link>
                <Link to="/recipes" className={`navbar-button ${activeSection === 'recipes' ? 'active' : ''}`}>Recipes</Link>
            </div>
        </>
    );
}

export default Navbar;
