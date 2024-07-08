import { useState, useEffect } from 'react';
import './FloatingNavbar.css';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    className?: string;
}

function Navbar(props: NavbarProps) {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        if (location.pathname === '/recipes') {
            setActiveSection('recipes');
        } else {
            setActiveSection('');
        }
    }, [location]);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    const openRecipesPage = () => {
        window.location.href = '/recipes';
    };

    return (
        <>
            <div className={`navbar-box ${props.className}`}>
                <Link to="/" className={`navbar-button ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>
                    About
                </Link>
                <Link to="/" className={`navbar-button ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}>
                    Skills & Courses
                </Link>
                <Link to="/" className={`navbar-button ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>
                    Projects
                </Link>
                <p className={`navbar-button ${activeSection === 'recipes' ? 'active' : ''}`} onClick={openRecipesPage}>
                    Recipes
                </p>
            </div>
        </>
    );
}

export default Navbar;
