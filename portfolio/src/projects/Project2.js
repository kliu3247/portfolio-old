import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import '../assets/css/project2.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import ReactGoogleSlides from 'react-google-slides';


import rectangle from "../assets/images/BIDesignChallenge/rectangle.svg";

import one from "../assets/images/BIDesignChallenge/1.png";
import two from "../assets/images/BIDesignChallenge/2.png";
import three from "../assets/images/BIDesignChallenge/3.png";

import SectionTitle from "../components/SectionTitle";

import greyrect from "../assets/images/BIDesignChallenge/greyrect.png";

import people from "../assets/images/BIDesignChallenge/people.png";

import choose from "../assets/images/BIDesignChallenge/choice.png";

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



const Project2 = () => (
    <>
        <img id = "rect" src = {rectangle} />

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

        <img src = {greyrect} id = "rect1"/>
        
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
        </section>

        <section id = "problem">
            <SectionTitle 
            number = "2"
            name = "PROBLEM SPACE"
            />

            <img id = "brainstorm" src = {brainstorm}/>
            <p class = "para" id = "text2">

            </p>

            <img src = {greyrect} id = "rect2"/>
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
            <img id = "survey" src = {survey} />
            <img src = {greyrect} id = "rect4"/>
            <img id = "interview" src = {interview} />
        
        </section>

        <section id = "synthesis">
            <SectionTitle 
            number = "4"
            name = "SYNTHESIS"
            />
            <p class = "para" id ="synthesis-description">
                 Taking raw survey and interview data, I consildated information into relevant diagrams — charts, visuals, and quotes.
            </p>
            <img id = "insight1" src = {insight1} />
            <img id = "insight2" src = {insight2} />
            <img id = "insight3" src = {insight3} />
            <img id = "insight4" src = {insight4} />
            <img id = "insight5" src = {insight5} />

            <img src = {greyrect} id = "rect5"/>
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

            <p class = "para" id ="synthesis-description">
            I started off with a brain dump and mind map to visualize user needs.
            </p>

            <img src = {greyrect} id = "rect6"/>
            <img id = "braindump" src = {braindump} />
            <img src = {greyrect} id = "rect7"/>
            <img id = "mindmap" src = {mindmap} />

            <h3 class = "heading" id = "ideas">
                More Idea Synthesis
            </h3>

            <p class = "para" id ="ideas-description">
            After my idea generation and rapid prototyping, I came to two viable product options which adhered to the design goals.
             </p>

            <img id = "choose" src = {choose} />
        </section>





    </>
);
    

export default Project2;