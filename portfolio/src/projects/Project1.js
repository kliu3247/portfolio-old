import React from 'react';
import '../assets/css/Project1.css';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import ReactGoogleSlides from 'react-google-slides';

import displayPic1 from "../assets/images/Patagonia/1.png";
import displayPic2 from "../assets/images/Patagonia/2.png";
import displayPic3 from "../assets/images/Patagonia/3.png";
import displayPic4 from "../assets/images/Patagonia/4.png";

import line from "../assets/images/Patagonia/line.png";

import summary from "../assets/images/Patagonia/summary.png";

import ProjectNav from "../components/ProjectNav";
import SectionTitle from "../components/SectionTitlePurple";

import ht from "../assets/images/Patagonia/hangtag.png";
import dss from "../assets/images/Patagonia/dss.png";
import hangtag from "../assets/images/Patagonia/hangtagfrontback.png";

import r1 from "../assets/images/Patagonia/redesign1.png";
import r2 from "../assets/images/Patagonia/redesign2.png";
import r3 from "../assets/images/Patagonia/redesign3.png";

import tilt from "../assets/images/Patagonia/tilt.png";

import ue from "../assets/images/Patagonia/unboxingexperience.png";
import movie from "../assets/images/Patagonia/movie.mp4";

import landscape from "../assets/images/Patagonia/landscape.png";
import lr from "../assets/images/Patagonia/landscaperesearch.png";

import surveymap from "../assets/images/Patagonia/surveymap.png";
import survey from "../assets/images/Patagonia/survey.png";

import cimap from "../assets/images/Patagonia/contextualinquirymap.png";
import ci from "../assets/images/Patagonia/contextualinquiry.png";

import imap from "../assets/images/Patagonia/interviewmap.png";
import interview from "../assets/images/Patagonia/interview.png";

import insights from "../assets/images/Patagonia/insights.png";

import team from "../assets/images/Patagonia/team.png";
import ty from "../assets/images/Patagonia/thankyou.png";

import Footer from "../components/Footer.js";


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

    <div id = "boxr">
        <div id = "yearr">
            <img id = "line1r" src = {line} />
            <h3 class = "subtitlep">Year</h3>
            <p class = "para"> Sept-Dec 2020</p>
        </div>
        
        <div id = "toolsr">
            <img id = "line2r" src = {line} />
            <h3 class = "subtitlep">Tools</h3>
            <p class = "para"> Figma, Miro, Qualtrics </p>
        </div>

        <div id = "teamr">
            <img id = "line3r" src = {line} />
            <h3 class = "subtitlep">Team</h3>
            <p class = "parar"> Kelly Liu, Sreya Cherukuri, Aaron Wu, Erin Rairdin, Edward Chen </p>
        </div>
    </div>
    
    <section id = "Overviewp">
        <SectionTitle 
        number = "1"
        name = "OVERVIEW"
        />

        <div id = "recp1"/>  
        <div id = "slideshowp">
            <ReactGoogleSlides 
                width={750}
                height={450}
                slidesLink="https://docs.google.com/presentation/d/1rXKw7H-ICLmiOFTFJgW-1maGdOpoJiM8D5RgMIhVcWY/edit?usp=sharing"
                slideDuration={2}
                showControls
                loop
            /> 
        </div>

        <img id = "summarypurple" src =  {summary } />
        
    </section>

    <section id = "solutionp">
        <SectionTitle 
        number = "2"
        name = "SOLUTION"
        />

        <p class = "para" id ="sol">
        Here are the final solutions, but see the user research and insights that back these designs down below!
        </p>

        <img id = "ht" src =  {ht} />
        <img id = "hangtag" src =  {hangtag} />
        <img id = "dss" src =  {dss} />
        <img id = "r1" src =  {r1} />
        <img id = "r2" src =  {r2} />
        <img id = "r3" src =  {r3} />
        <img id = "tilt" src =  {tilt} />
        <img id = "ue" src =  {ue} />

        <video width="400" height="240" id = "videop" loop="" autoplay="" controls autoPlay>
            <source src={movie} type="video/mp4"/>
        </video>
     </section>


     <section id = "researchp">
        <SectionTitle 
        number = "3"
        name = "RESEARCH"
        />

        <div id = "recp2"/>  
        <img id = "lr" src =  {lr} />
        <img id = "landscape" src =  {landscape} />

        <div id = "recp3"/>  
        <img id = "sm" src =  {surveymap} />
        <img id = "survey" src =  {survey} />

        <div id = "recp4"/>  
        <img id = "ci" src =  {ci} />
        <img id = "cimap" src =  {cimap} />

        <div id = "recp5"/>  
        <img id = "imap" src =  {imap} />
        <img id = "interview" src =  {interview} />
    </section>

    <section id = "insightp">
        <SectionTitle 
        number = "4"
        name = "INSIGHTS"
        />

        <p class = "para" id ="in">
        We synthesized our primary and secondary research to produce insights about consumer perceptions about QR codes, 
        hang tags, and digital experiences. These insights helped back our design solutions.
        </p>

        <img id = "ins" src =  {insights} />
    </section>


    <section id = "concludep">
        <SectionTitle 
        number = "5"
        name = "CONCLUSION"
        />

        <img id = "teamp" src =  {team} />  
        <img id = "typ" src =  {ty} /> 
    </section>

    <div id = "foot">
        <Footer/> 
    </div>
    </>

);
    
export default Project1;