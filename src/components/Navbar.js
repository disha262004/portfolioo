import React, { useState } from "react";
import Mode from './Mode';

function Navbar({ isDarkMode, toggleDarkMode }) {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}>
            <div className="container mt-2">
                <a className="navbar-brand fs-3" href="#"><b>Disha Rathore</b></a>

                {/* Hamburger button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleNavCollapse}
                    aria-controls="navbarSupportedContent"
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible nav links */}
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#hero">Home</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#about">About Me</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#education">Education</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#certification">Certifications</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item mx-2">
                            <Mode toggleDarkMode={toggleDarkMode} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
