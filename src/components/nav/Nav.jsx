import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return (
        <nav className="navbar">
            <NavLink to="/">About</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
};

export default Nav;
