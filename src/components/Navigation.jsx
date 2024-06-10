import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <NavLink to="/about-me" activeclassname="active">About Me</NavLink>
            <NavLink to="/portfolio" activeclassname="active">Portfolio</NavLink>
            <NavLink to="/resume" activeclassname="active">Resume</NavLink>
            <NavLink to="/contact" activeclassname="active">Contact</NavLink>
        </nav>
    );
}

export default Navigation;