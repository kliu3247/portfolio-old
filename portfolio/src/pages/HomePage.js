import React from 'react';
import kelly from '../assets/images/kelly.svg';
import '../assets/css/style.css';
import Wave from 'react-wavify'
import ProjectSection from "../components/ProjectSection.js";
import Footer from "../components/Footer.js";

import pic1 from "../assets/images/Patagonia/hangtag.svg";
import pic2 from "../assets/images/retroarcade/retroarcade.svg";
import pic3 from "../assets/images/lab/labdesign.svg";
import pic4 from "../assets/images/BYOW/BYOW.svg";
import pic5 from "../assets/images/kingpin/kingp.svg";

import proj2 from "../projects/Project2";

import { Link } from 'react-scroll';

class HomePage extends React.Component {
    render() {
        return (
            <>
                <div class ="background">
                <div id = "me">
                    <img id = "kelly" src ={kelly} />
                    <section id = "hair-left">   
                        <Wave fill='#0A0E60'
                            paused={false}
                            options={{
                                height: 20,
                                amplitude: 20,
                                speed: 0.15,
                                points: 20
                            }}
                        />
                    </section>
            
                    <section id = "hair-right">   
                        <Wave fill='#0A0E60'
                            paused={false}
                            options={{
                                height: 20,
                                amplitude: 20,
                                speed: 0.15,
                                points: 20,
                            }}
                        />
                    </section>
                </div>

                <h3 id = "med-font">Hello! I'm</h3>
                <h1 id = "big-font">Kelly</h1>

                <p id = "description">I am an engineering student at UC Berkeley. My 
                    philosophy is to <span id = "bold">design for social impact</span>. 
                </p>
            </div>

            
            <Link id = "b" activeClass="active" to="projects" spy={true} smooth={true} duration={1500}>
                Check out my work!
            </Link>
            <button class = "arrow down" id = "arr"></button>

            <div id = "projects">
                <ProjectSection
                    number = '1'
                    image = {pic1}
                    type = "UI/UX | Research"
                    label1 = "PATAGONIA"
                    label2 =  "DIGITAL"
                    label3 = "SPACES"
                    description = "Working to integrate digital spaces into Patagonia’s packaging."
                    link = "/patagonia"
                    
                />
            </div>

            <Link id = "b2" activeClass="active" to="project-2" spy={true} smooth={true} duration={1000}>
                See my next project
            </Link>
           
            <div id = "project-2">
                <ProjectSection
                    
                    number = '3'
                    image = {pic3}
                    type = "UI/UX | RESEARCH"
                    label1 = "BI"
                    label2 = "DESIGN"
                    label3 = "CHALLENGE"
                    description = "Reimagining virtual lab courses with the onset of COVID-19."
                    link = "/BI-design-challenge"
                />   
            </div>

            <Link id = "b3" activeClass="active" to="project-3" spy={true} smooth={true} duration={1000}>
                See my next project
            </Link>


            <div id = "project-3">
                <ProjectSection
                    number = '2'
                    image = {pic2}
                    type = "UI/UX | GRAPHIC DESIGN"
                    label1 = "RETRO"
                    label2 = "ARCADE"
                    label3 = "DESIGN"
                    description = "Reimagining and revamping classic arcade games."
                    link = "/Retro-arcade"
                />
            </div>

            <Link id = "b4" activeClass="active" to="project-4" spy={true} smooth={true} duration={1000}>
                See my next project
            </Link>

            <div id = "project-4">
                <ProjectSection
                    number = '4'
                    image = {pic4}
                    type = "SOFTWARE ENGINEERING"
                    label1 = "BUILD"
                    label2 = "YOUR OWN"
                    label3 = "WORLD"
                    description = "Building a game from ground-up with data structures and algorithms."
                    link = "/BYOW"
                />  
            </div>

            <Link id = "b5" activeClass="active" to="project-5" spy={true} smooth={true} duration={1000}>
                See my next project
            </Link>

            <div id = "project-5">
            <ProjectSection
                number = '5'
                image = {pic5}
                type = "WEB DEVELOPMENT"
                label1 = "KINGPIN"
                label2 = "DONUT"
                label3 = "REDESIGN"
                description = "Redesigning Berkeley's local donut shop’s website."
                link = "/Kingpin-donut"
            />     
            </div>

            <Footer/> 

            </>
            
        );
    }
}

export default HomePage;
