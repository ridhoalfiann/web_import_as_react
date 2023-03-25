import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    // const [activeNav, setActiveNav] = useState('/')
    return (
        <nav className="navbar">
            {/* <ul className="navbar-list">
                <NavLink to="/">
                    <li className="navbar-item">
                        <button className="navbar-link active">About</button>
                    </li>
                </NavLink>

                <NavLink to="/">
                    <li className="navbar-item">
                        <button className="navbar-link active">About</button>
                    </li>
                </NavLink>

                <NavLink to="/">
                    <li className="navbar-item">
                        <button className="navbar-link active">About</button>
                    </li>
                </NavLink>

                <NavLink to="/">
                    <li className="navbar-item">
                        <button className="navbar-link active">About</button>
                    </li>
                </NavLink> */}

                <NavLink to="/">
                    About
                </NavLink>

                <NavLink to="/resume">
                    Resume
                </NavLink>

                <NavLink to="/portfolio">
                    Portfolio
                </NavLink>

                <NavLink to="/blog">
                    Blog
                </NavLink>

                <NavLink to="/contact">
                    Contact
                </NavLink>
            {/* </ul> */}
        </nav>
    );
};

export default Nav;
