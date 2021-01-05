import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logoblue from "./assets/images/logo-blue.png";
import logo from "./assets/images/logo.png";
import './assets/css/style.css';

import { HashLink } from 'react-router-hash-link';



function LogoChoice() {
    const location = useLocation();
    let loc = location.pathname;
    if (loc === "/") {
        return (
            <>
                <header className = "header">
                    <Link to = "/" className = "logo">
                    <img class = "logopic" src = {logo}/>
                    </Link>

                    <nav className = "navbar">
                        <li id = "proj">
                            <HashLink smooth to="/#projects" class = "white">
                                Projects
                            </HashLink>
                        </li>

                        <li>
                            <Link class = "white" to = "/visual-arts">Visual Arts</Link>
                        </li>
                        
                        <li>
                            <Link class = "white" to = "/about">About</Link>
                        </li>
                    </nav>
                </header>
            </>
        );
    } 
    return (
        <>
            <header className = "header">
                <Link to = "/" className = "logo">
                    <img class = "logopic" src = {logoblue}/>
                </Link>

                <nav className = "navbar">
                    <li id = "proj">
                        <HashLink smooth to="/#projects">
                            Projects
                        </HashLink>
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
}

const Navbar = () => (
    <>
        <LogoChoice />
    </>
);

export default Navbar;