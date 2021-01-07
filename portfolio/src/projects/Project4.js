import React from 'react';
import ProjectNav from "../components/ProjectNav";
import '../assets/css/Project4.css';
import SectionTitle from "../components/SectionTitleOrange";

import line from "../assets/images/BYOW/lineo.png";
import d1 from "../assets/images/BYOW/byowdisplay1.png";
import d2 from "../assets/images/BYOW/byowdisplay2.png";
import d3 from "../assets/images/BYOW/byowdisplay3.png";

import summary from "../assets/images/BYOW/summary.png";
import world1 from "../assets/images/BYOW/world1.png";
import world2 from "../assets/images/BYOW/world2.png";
import world3 from "../assets/images/BYOW/world3.png";
import world4 from "../assets/images/BYOW/world4.png";

import rwg from "../assets/images/BYOW/randomworldgeneration.png";

import am from "../assets/images/BYOW/avatarmovement.png";
import movie1 from "../assets/images/BYOW/ammovie.mp4";


import ReactPlayer from "react-player"

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Project4 = () => (
    <>
        <ProjectNav></ProjectNav>

        <div id = "recto"></div>

    <h1 id = "titleo">
        BUILD 
        YOUR OWN 
        WORLD
    </h1>

    <div id = "boxr">
        <div id = "yearr">
            <img id = "line1o" src = {line} />
            <h3 class = "subtitleo">Year</h3>
            <p class = "para"> Nov -Dec 2020 </p>
        </div>
        
        <div id = "toolsr">
            <img id = "line2o" src = {line} />
            <h3 class = "subtitleo">Tools</h3>
            <p class = "parar"> Java, Std.Draw Library, Object-oriented Programming </p>
        </div>

        <div id = "teamo">
            <img id = "line3o" src = {line} />
            <h3 class = "subtitleo">Team</h3>
            <p class = "parar"> Kelly Liu, Lulu Yu </p>
        </div>
    </div>

    <div id = "co">
        <Carousel autoPlay>
            <div>
                <img src= {d1} />
            </div>
            <div>
                <img src={d2}/>
            </div>
            <div>
                <img src={d3}/>
            </div>
        </Carousel>
    </div>

    <section id = "overviewo">
        <SectionTitle 
            number = "1"
            name = "OVERVIEW"
            />
    </section>

    <div id = "reco1"/>  
    <img id = "sumo" src= {summary} />

    <div id = "mov">
      <ReactPlayer
        url="https://youtu.be/IhlPGMF0OWk"
      />
    </div>

    <section id = "pfo">
        <SectionTitle 
            number = "2"
            name = "PROGRAMMING FEATURES"
            />

        <div id = "carousel1">
            <Carousel>
                <div>
                    <img src= {world1} />
                </div>
                <div>
                    <img src={world2}/>
                </div>
                <div>
                    <img src={world3}/>
                </div>
                <div>
                    <img src={world4}/>
                </div>
            </Carousel>
        </div>

        <img id = "rwg" src={rwg}/>
        <div id = "reco2"/> 

        <img id = "am" src={am}/>
        <div id = "reco3"/> 

        <video width="450" height="340" id = "movie1" loop="" autoplay="" controls autoPlay>
        <source src={movie1} type="video/mp4"/>
    </video>

    </section>

    
    </>


);
    
export default Project4;