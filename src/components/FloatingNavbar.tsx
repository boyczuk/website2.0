import { useState, useEffect } from 'react';
import './FloatingNavbar.css';

interface NavbarProps {
    className?: string;
}

function Navbar(props: NavbarProps) {
    
    const [activeSection, setActiveSection] = useState('');

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) { 
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    }

    // Add logic for scrolling based on where the user is looking rather than navbar

    return (
        <div className={`navbar-box ${props.className}`}>
            <p className={`navbar-button ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>About</p>
            <p className={`navbar-button ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}>Skills</p>
            <p className={`navbar-button ${activeSection === 'courses' ? 'active' : ''}`} onClick={() => scrollToSection('courses')}>Courses</p>
            <p className={`navbar-button ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>Projects</p>
        </div>
    );
}

export default Navbar;
