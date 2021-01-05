import React from 'react';

import ProjectNav from "../components/ProjectNav"

import { Carousel } from 'react-responsive-carousel';
import '../assets/css/project2.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import ReactGoogleSlides from 'react-google-slides';

import SectionTitle from "../components/SectionTitleBlue";

import summary from "../assets/images/BIDesignChallenge/summary.png";

import ns from "../assets/images/BIDesignChallenge/ns.png";

import bd from "../assets/images/BIDesignChallenge/bd.png";

import mm from "../assets/images/BIDesignChallenge/mm.png";

import int from "../assets/images/BIDesignChallenge/int.png";



import greyrect from "../assets/images/BIDesignChallenge/greyrect.png";
import surveywords from "../assets/images/BIDesignChallenge/survey-words.png";


import people from "../assets/images/BIDesignChallenge/people.png";

import choose from "../assets/images/BIDesignChallenge/choice.png";

import takeaways from "../assets/images/BIDesignChallenge/takeaways.png";


import displayPic1 from "../assets/images/BIDesignChallenge/display1.png";
import displayPic2 from "../assets/images/BIDesignChallenge/display2.png";
import displayPic3 from "../assets/images/BIDesignChallenge/display3.png";
import contentbackground from "../assets/images/BIDesignChallenge/contentBackground.svg";
import line from "../assets/images/BIDesignChallenge/line.svg";
import brainstorm from "../assets/images/BIDesignChallenge/brainstorm.png";
import survey from "../assets/images/BIDesignChallenge/survey.png";
import interview from "../assets/images/BIDesignChallenge/interview.png";
import insight1 from "../assets/images/BIDesignChallenge/insight1.png";
import insight2 from "../assets/images/BIDesignChallenge/insight2.png";
import insight3 from "../assets/images/BIDesignChallenge/insight3.png";
import insight4 from "../assets/images/BIDesignChallenge/insight4.png";
import insight5 from "../assets/images/BIDesignChallenge/insight5.png";
import venndiagram from "../assets/images/BIDesignChallenge/venndiagram.png";
import persona1 from "../assets/images/BIDesignChallenge/persona1.png";
import persona2 from "../assets/images/BIDesignChallenge/persona2.png";
import persona3 from "../assets/images/BIDesignChallenge/persona3.png";
import braindump from "../assets/images/BIDesignChallenge/braindump.png";
import mindmap from "../assets/images/BIDesignChallenge/mindmap.png";
import labs from "../assets/images/BIDesignChallenge/labs.png";
import vrbrainstorm from "../assets/images/BIDesignChallenge/vrbrainstorm.png";
import lowfi from "../assets/images/BIDesignChallenge/lowfi.png";
import midfi1 from "../assets/images/BIDesignChallenge/midfi1.png";
import midfi2 from "../assets/images/BIDesignChallenge/midfi2.png";
import midfi3 from "../assets/images/BIDesignChallenge/midfi3.png";
import midfi4 from "../assets/images/BIDesignChallenge/midfi4.png";

import one from "../assets/images/BIDesignChallenge/1.png";
import two from "../assets/images/BIDesignChallenge/2.png";
import three from "../assets/images/BIDesignChallenge/3.png";

import HMW from "../assets/images/BIDesignChallenge/HMW.png";


const Project2 = () => (
    <>
        <ProjectNav></ProjectNav>
        <div id = "rect"></div>

        <h1 id = "title">
            BERKELEY INNOVATION DESIGN CHALLENGE
        </h1>

        <div id = "c">
            <Carousel autoPlay>
                <div>
                    <img src= {displayPic1} className = "display1"/>
                </div>
                <div>
                    <img src={displayPic2} className = "display1"/>
                </div>
                <div>
                    <img src={displayPic3} className = "display1"/>
                </div>
            </Carousel>
        </div>
        
        <div id = "move-everything">

        <div id = "box">
            <div id = "year">
                <img id = "line1" src = {line} />
                <h3 class = "subtitle">Year</h3>
                <p class = "para"> Sept 2020 </p>
            </div>
            
            <div id = "tools">
                <img id = "line2" src = {line} />
                <h3 class = "subtitle">Tools</h3>
                <p class = "para"> Figma, Canva, Instagram, Google Forms </p>
            </div>
        </div>

        <div id = "rect1"/>
        
        <div id = "slideshow">
            <ReactGoogleSlides
                    width={900}
                    height={525}
                    slidesLink="https://docs.google.com/presentation/d/1XR7ko_Ds0E2y8Nmmpq6kF1pyheHFc4ztBEUSaibkQQQ/edit?usp=sharing"
                    slideDuration={5}
                    showControls
                    loop
            />
        </div>
        
        <section id = "Overview">
            <SectionTitle 
            number = "1"
            name = "OVERVIEW"
            />
            <img id = "summary" src = {summary}/>
        </section>

        <section id = "problem">
            <SectionTitle 
            number = "2"
            name = "PROBLEM SPACE"
            />

            <img id = "brainstorm" src = {brainstorm}/>
            <p class = "para" id = "text2">

            </p>

            <div id = "rect2"/>
            <img src = {HMW} id = "hmw"/>
        </section>

        <section id = "ur">
            <SectionTitle 
            number = "3"
            name = "USER RESEARCH"
            />

            <h3 class = "heading">
                Research Methods
            </h3>

            <img src = {greyrect} id = "rect3"/>
            <img src = {surveywords} id = "surveywords"/>
            <img id = "survey" src = {survey} />
            <img src = {greyrect} id = "rect4"/>
            <img id = "interview" src = {interview} />
            <img src = {int} id = "int"/>
            
        </section>

        <section id = "synthesis">
            <SectionTitle 
            number = "4"
            name = "SYNTHESIS"
            />
            <p class = "para" id ="synthesis-description">
                 Taking raw survey and interview data, I consildated information into relevant diagrams — charts, visuals, and quotes.
            </p>

            <div id = "insights"> 
                <Carousel autoPlay>
                    <div>
                        <img id = "insight1" src = {insight1} />
                    </div>
                    <div>
                         <img id = "insight2" src = {insight2} />
                    </div>
                    <div>
                        <img id = "insight3" src = {insight3} />
                    </div>
                    <div>
                        <img id = "insight4" src = {insight4} />
                    </div>
                    <div>
                         <img id = "insight5" src = {insight5} />
                    </div>
                </Carousel>
            </div>

            <img src = {greyrect} id = "rect5"/>
            <img src = {takeaways} id = "takeaways"/>
            <img id = "venndiagram" src = {venndiagram} />

            <h3 class = "heading" id = "persona">
                Personas
            </h3>

            <div id = "ppl">
                <img id = "people" src = {people} />
            </div>
        </section>


        <section id = "ideation">
            <SectionTitle 
            number = "5"
            name = "IDEATION"
            />

            <p class = "para" id ="idea-description">
            I started off with a brain dump and mind map to visualize user needs.
            </p>

            <img src = {greyrect} id = "rect6"/>
            <img src = {bd} id = "bd"/>
            <img id = "braindump" src = {braindump} />

            <img src = {greyrect} id = "rect7"/>
            <img src = {mm} id = "mm"/>
            <img id = "mindmap" src = {mindmap} />

            <h3 class = "heading" id = "ideas">
                More Idea Synthesis
            </h3>

            <p class = "para" id ="ideas-description">
            After my idea generation and rapid prototyping, I came to two viable product options which adhered to the design goals.
             </p>

            <img id = "choose" src = {choose} />

            <p id = "explain">
            Weighing in from user-input and user needs from my research, as well as pros and cons of idea 
            synthesis, I decided to proceed with the Virtual Reality solution.
            </p>
        </section>

        <section id = "prototype">
            <SectionTitle 
            number = "6"
            name = "PROTOTYPE"
            />

            <h3 class = "heading" id = "flow">
                Low Fidelity + User Flow
            </h3>

            <p class = "para" id = "proto-description">
            I translated the sketches I made into a rough user-flow diagram on Figma. This specifically would be the 
            student's interface, and there will also be a corresponding page for the instructor set-up.  
            </p>

            <img id = "lowfi" src = {lowfi} />

            <h3 class = "heading" id = "med">
                Medium Fidelity
            </h3>

            <p class = "para" id = "med-description">
            To further my low-fidelity prototype, I decided to design the wireframes for the most impactful and innovative
             screens for my users. These pages have specific design elements to adhere to user needs and design goals:  
            </p>

            <div id = "mid-fi"> 
                <Carousel autoPlay>
                    <div>
                        <img id = "midfi1" src = {midfi1} />
                    </div>
                    <div>
                         <img id = "midfi2" src = {midfi2} />
                    </div>
                    <div>
                        <img id = "midfi3" src = {midfi3} />
                    </div>
                    <div>
                    <img id = "midfi4" src = {midfi4} />
                    </div>
                </Carousel>
            </div>

        </section>

        <section id = "next">
            <SectionTitle 
            number = "7"
            name = "NEXT STEPS"
            />

            <img id = "ns" src = {ns} />       
                 
            
        </section>
        </div>
        
    </>

    
);
    

export default Project2;

