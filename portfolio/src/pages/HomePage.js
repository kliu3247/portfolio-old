import React from 'react';
import kelly from '../assets/images/kelly.svg';
import '../assets/css/style.css';
import Wave from 'react-wavify'
import ProjectSection from "../components/ProjectSection.js";

import pic1 from "../assets/images/Patagonia/hangtag.svg";
import pic2 from "../assets/images/retroarcade/retroarcade.svg";
import pic3 from "../assets/images/lab/labdesign.svg";
import pic4 from "../assets/images/BYOW/BYOW.svg";
import pic5 from "../assets/images/kingpin/kingp.svg";

import proj2 from "../projects/Project2";

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

            
            <h5 id = "b">Check out my work!</h5>
            <button class = "arrow down"></button>

            <ProjectSection
                number = '1'
                image = {pic1}
                type = "UI/UX | Research"
                label1 = "PATAGONIA"
                label2 =  "DIGITAL"
                label3 = "SPACES"
                description = "Working to integrate digital spaces into Patagonia’s packaging."
                link = ""
            />

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

            
            <ProjectSection
                number = '4'
                image = {pic4}
                type = "SOFTWARE ENGINEERING"
                label1 = "BUILD"
                label2 = "YOUR OWN"
                label3 = "WORLD"
                description = "Building a game from ground-up with data structures and algorithms."
                link = ""
            />  

            <ProjectSection
                number = '5'
                image = {pic5}
                type = "WEB DEVELOPMENT"
                label1 = "KINGPIN"
                label2 = "DONUT"
                label3 = "REDESIGN"
                description = "Redesigning Berkeley's local donut shop’s website."
                link = ""
            />                  
            </>
        );
    }
}

export default HomePage;
