import React from "react";
import Mode from './Mode';

function Navbar({ isDarkMode, toggleDarkMode }) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="container mt-2">
                    <a className="navbar-brand fs-3" href="#">
                        <b>Disha Rathore</b>
                    </a>
                    <div className="space" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-5 mb-lg-0">
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#hero">Home</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#about">About Me</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#education">Education</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#certification">Certifications</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item mx-4">
                                <Mode toggleDarkMode={toggleDarkMode} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
