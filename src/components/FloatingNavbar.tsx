import { useState, useEffect } from 'react';
import './FloatingNavbar.css';
import Modal from './Modal';
import CountryGuessMap from '../pages/CountryGuessMap';

interface NavbarProps {
    className?: string;
}

function Navbar(props: NavbarProps) {

    const [activeSection, setActiveSection] = useState('');
    const [showMap, setShowMap] = useState(false);
    const [isMapOpen, setIsMapOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    }

    // Add logic for scrolling based on where the user is looking rather than navbar

    return (
        <>
            <div className={`navbar-box ${props.className}`}>
                <p className={`navbar-button ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>About</p>
                <p className={`navbar-button ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}>Skills & Courses</p>
                <p className={`navbar-button ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>Projects</p>
                <p className={`navbar-button ${activeSection === 'map' ? 'active' : ''}`} onClick={() => setIsMapOpen(true)}>Show Map</p>
            </div>

            <Modal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)}>
                <CountryGuessMap />
            </Modal>
        </>
    );
}

export default Navbar;
