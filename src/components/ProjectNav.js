import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import '../assets/css/pn-style.css';


function Color() {
    const location = useLocation();
    let loc = location.pathname;
    if (loc === "/patagonia") {
        return (
            <>
                <div id = "rect-purple">
                    <nav className = "navbar">
                        <li>
                            <Link class = "purple"  id = "pat" to = "/patagonia"> Patagonia</Link>
                        </li>

                        <li>
                            <Link class = "purple" to = "/BI-design-challenge">BI Design Challenge</Link>
                        </li>
                        
                        <li>
                            <Link class = "purple" to = "/Retro-arcade">Retro Arcade</Link>
                        </li>

                        <li>
                            <Link class = "purple" to = "/BYOW">BYOW</Link>
                        </li>

                        <li>
                            <Link class = "purple" to = "/Kingpin-donut">KingPin Donut</Link>
                        </li>
                    </nav>
                </div>
            </>
        );
    } 

    else if (loc === "/BI-design-challenge") {
        return (
            <>
                <div id = "rect-blue">
                    <nav className = "navbar">
                        <li>
                            <Link class = "blue" to = "/patagonia"> Patagonia</Link>
                        </li>

                        <li>
                            <Link class = "blue" id = "bi" to = "/BI-design-challenge">BI Design Challenge</Link>
                        </li>
                        
                        <li>
                            <Link class = "blue" to = "/Retro-arcade">Retro Arcade</Link>
                        </li>

                        <li>
                            <Link class = "blue" to = "/BYOW">BYOW</Link>
                        </li>

                        <li>
                            <Link class = "blue" to = "/Kingpin-donut">KingPin Donut</Link>
                        </li>
                    </nav>
                </div>
            </>
        );
    } 

    if (loc === "/Retro-arcade") {
        return (
            <>
                <div id = "rect-red">
                    <nav className = "navbar">
                        <li>
                            <Link class = "red" to = "/patagonia"> Patagonia</Link>
                        </li>

                        <li>
                            <Link class = "red"  to = "/BI-design-challenge">BI Design Challenge</Link>
                        </li>
                        
                        <li>
                            <Link class = "red" id = "ra" to = "/Retro-arcade">Retro Arcade</Link>
                        </li>

                        <li>
                            <Link class = "red" to = "/BYOW">BYOW</Link>
                        </li>

                        <li>
                            <Link class = "red" to = "/Kingpin-donut">KingPin Donut</Link>
                        </li>
                    </nav>
                </div>
            </>
        );
    } 



    if (loc === "/BYOW") {
        return (
            <>
                <div id = "rect-orange">
                    <nav className = "navbar">
                        <li>
                            <Link class = "orange" to = "/patagonia"> Patagonia</Link>
                        </li>

                        <li>
                            <Link class = "orange"  to = "/BI-design-challenge">BI Design Challenge</Link>
                        </li>
                        
                        <li>
                            <Link class = "orange" to = "/Retro-arcade">Retro Arcade</Link>
                        </li>

                        <li>
                            <Link class = "orange" id = "byow" to = "/BYOW">BYOW</Link>
                        </li>

                        <li>
                            <Link class = "orange" to = "/Kingpin-donut">KingPin Donut</Link>
                        </li>
                    </nav>
                </div>
            </>
        );
    } 

    if (loc === "/Kingpin-donut") {
        return (
            <>
                <div id = "rect-pink">
                    <nav className = "navbar">
                        <li>
                            <Link class = "pink" to = "/patagonia"> Patagonia</Link>
                        </li>

                        <li>
                            <Link class = "pink"  to = "/BI-design-challenge">BI Design Challenge</Link>
                        </li>
                        
                        <li>
                            <Link class = "pink" to = "/Retro-arcade">Retro Arcade</Link>
                        </li>

                        <li>
                            <Link class = "pink" to = "/BYOW">BYOW</Link>
                        </li>

                        <li>
                            <Link class = "pink" id = "kp"  to = "/Kingpin-donut">KingPin Donut</Link>
                        </li>
                    </nav>
                </div>
            </>
        );
    } 


    return (
        <>
        </>
    );
}

const ProjectNav = () => (
    <>
        <Color />
    </>
);

export default ProjectNav;