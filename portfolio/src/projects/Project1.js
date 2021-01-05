import React from 'react';
import '../assets/css/Project1.css';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import displayPic1 from "../assets/images/Patagonia/1.png";
import displayPic2 from "../assets/images/Patagonia/2.png";
import displayPic3 from "../assets/images/Patagonia/3.png";
import displayPic4 from "../assets/images/Patagonia/4.png";

import ProjectNav from "../components/ProjectNav";
import SectionTitle from "../components/SectionTitlePurple";

const Project1 = () => (
    <>
    <ProjectNav />
    <div id = "rect-p"></div>

    <h1 id = "title-p">
        PATAGONIA DIGITAL SPACES
    </h1>

    <div id = "c-p">
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
            <div>
                <img src={displayPic4} className = "display1"/>
            </div>
        </Carousel>
    </div>
    
    <section id = "Overview">
        <SectionTitle 
        number = "1"
        name = "OVERVIEW"
        />
    </section>

    </>

);
    
export default Project1;