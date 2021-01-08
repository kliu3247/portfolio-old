import React from 'react';
import ProjectNav from "../components/ProjectNav";

import '../assets/css/Project5.css';
import SectionTitle from "../components/SectionTitlePink";


import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


import line from "../assets/images/kingpin/line.png";
import summary from "../assets/images/kingpin/summary.png";
import hifi1 from "../assets/images/kingpin/hifi1.png";

import o1 from "../assets/images/kingpin/original1.png";
import o2 from "../assets/images/kingpin/original2.png";
import o3 from "../assets/images/kingpin/original3.png";

import original from "../assets/images/kingpin/original.png";

import hifipink1 from "../assets/images/kingpin/hifi1.png";
import hifipink2 from "../assets/images/kingpin/hifi2.png";
import hifipink3 from "../assets/images/kingpin/hifi3.png";
import hifipink4 from "../assets/images/kingpin/hifi4.png";
import hifipink5 from "../assets/images/kingpin/hifi5.png";
import hifipink6 from "../assets/images/kingpin/hifi6.png";
import hifid from "../assets/images/kingpin/highfi.png";

import midfipink1 from "../assets/images/kingpin/midfi1.png";
import midfipink2 from "../assets/images/kingpin/midfi2.png";
import midfipink3 from "../assets/images/kingpin/midfi3.png";
import midfipink4 from "../assets/images/kingpin/midfi4.png";
import midfid from "../assets/images/kingpin/midfi.png";


import lowfipink1 from "../assets/images/kingpin/lowfi1.png";
import lowfipink2 from "../assets/images/kingpin/lowfi2.png";
import lowfipink3 from "../assets/images/kingpin/lowfi3.png";
import lowfipink4 from "../assets/images/kingpin/lowfi4.png";
import lowfid from "../assets/images/kingpin/lowfi.png";

import Footer from "../components/Footer.js";

const Project5 = () => (
    <>
        <ProjectNav></ProjectNav>

        <div id = "rectpink"></div>

    <h1 id = "titlepink">
    KINGPIN
    DONUT 
    WEBSITE 
    REDESIGN
    </h1>

    <div id = "boxr">
        <div id = "yearr">
            <img id = "line1o" src = {line} />
            <h3 class = "subtitlepink">Year</h3>
            <p class = "para"> Nov - Dec 2020 </p>
        </div>
        
        <div id = "toolsr">
            <img id = "line2o" src = {line} />
            <h3 class = "subtitlepink">Tools</h3>
            <p class = "parar"> Figma, HTML, CSS, Figma, Adobe Illustrator  </p>
        </div>
    </div>

    <section id = "Overviewr">
        <SectionTitle 
        number = "1"
        name = "OVERVIEW"
        />

        <div id = "repink1"/>  
        <img id = "summarypink" src = {summary}/> 

        <img id = "hifi1" src = {hifi1}/> 
    </section>  

    <section id = "ps">
        <SectionTitle 
        number = "2"
        name = "PROBLEM SPACE"
        />

        <div id = "repink2"/>  

        <div id = "original">
            <Carousel>
                <div>
                    <img src= {o1} />
                </div>
                <div>
                    <img src={o2}/>
                </div>
                <div>
                    <img src={o3}/>
                </div>
            </Carousel>
        </div>

        <img id = "origin" src = {original}/> 
    </section>  

    <section id = "protos">
        <SectionTitle 
        number = "3"
        name = "PROTOTYPES"
        />

        <div id = "repink3"/>  

        <div id = "highfipink">
            <Carousel >
                <div>
                    <img src= {hifipink1} />
                </div>
                <div>
                    <img src={hifipink2}/>
                </div>
                <div>
                    <img src={hifipink3}/>
                </div>
                <div>
                    <img src={hifipink4}/>
                </div>
                <div>
                    <img src={hifipink5}/>
                </div>
                <div>
                    <img src={hifipink6}/>
                </div>
            </Carousel>
        </div>

        <img id = "hifid" src = {hifid}/> 


        <div id = "repink4"/>  

        <div id = "midfipink">
            <Carousel  >
                <div>
                    <img src= {midfipink1} />
                </div>
                <div>
                    <img src={midfipink2}/>
                </div>
                <div>
                    <img src={midfipink3}/>
                </div>
                <div>
                    <img src={midfipink4}/>
                </div>
            </Carousel>
        </div>

        <img id = "mifid" src = {midfid}/> 

















        <div id = "repink5"/>  

        <div id = "lowfipink">
            <Carousel  autoPlay>
                <div>
                    <img src= {lowfipink1} />
                </div>
                <div>
                    <img src={lowfipink2}/>
                </div>
                <div>
                    <img src={lowfipink3}/>
                </div>
                <div>
                    <img src={lowfipink4}/>
                </div>
            </Carousel>
        </div>

        <img id = "lowfid" src = {lowfid}/> 
    </section> 

    <div id = "foot5">
        <Footer/> 
    </div>

    </>
);
    
export default Project5;