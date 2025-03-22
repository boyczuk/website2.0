import { useState, useRef } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
import ContactPopup from "./ContactPopup";

function Navbar({
    isFrench,
    setIsFrench,
    isPopupOpen,
    setPopupOpen,
}: {
    isFrench: boolean;
    setIsFrench: React.Dispatch<React.SetStateAction<boolean>>;
    isPopupOpen: boolean;
    setPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: isFrench ? "Accueil" : "Home", sectionId: "intro" },
        { name: isFrench ? "Projets" : "Projects", sectionId: "projects" },
        { name: isFrench ? "Expérience de travail" : "Work experience", sectionId: "experience" },
    ];

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setPopupOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setPopupOpen(false);
        }, 100);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    return (
        <div>
            {/* Standard Navbar (Hidden Below 950px) */}
            <div className="bar">
                <div className="nav-container">
                    {/* Left-side navigation */}
                    <ul className="nav-left">
                        {navItems.map((item) => (
                            <li key={item.name} className="nav-group">
                                <button className="nav-button" onClick={() => scrollToSection(item.sectionId)}>
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Right-side navigation */}
                    <ul className="nav-right">
                        <li>
                            <button className="nav-button" onClick={() => setIsFrench(!isFrench)}>
                                <TranslateIcon className="icon-translate" /> {isFrench ? "English" : "Français"}
                            </button>
                        </li>
                        <li
                            style={{ position: "relative" }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="nav-button">{isFrench ? "Contactez-moi" : "Contact info"}</button>
                            <ContactPopup isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen} />
                        </li>
                    </ul>
                </div>

                {/* Hamburger Icon (Visible Below 950px) */}
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "" : <MenuIcon className="hamburger-icon" />}
                </button>
            </div>

            {/* Full-Screen Overlay Menu */}
            <div className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}>
                <button className="close-menu" onClick={() => setMenuOpen(false)}>
                    <CloseIcon className="hamburger-icon" />
                </button>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <button className="mobile-menu-item" onClick={() => scrollToSection(item.sectionId)}>
                                {item.name}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button className="mobile-menu-item" onClick={() => setIsFrench(!isFrench)}>
                            <TranslateIcon className="icon-translate" /> {isFrench ? "English" : "Français"}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
