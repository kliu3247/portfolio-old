import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./assets/images/logo.png";
import './assets/css/style.css';

const Navbar = () => (
    <>
    <header className = "header">
        <Link to = "/" className = "logo">
            <img class = "logopic" src = {logo}/>
        </Link>

        <nav className = "navbar">
            <li id = "proj">
                <Link to = "/projects">Projects</Link>
            </li>

            <li>
                <Link to = "/visual-arts">Visual Arts</Link>
            </li>
            
            <li>
                <Link to = "/about">About</Link>
            </li>
        </nav>
    </header>
    </>
);

export default Navbar;