import React from 'react';
import ProjectNav from "../components/ProjectNav"

import SectionTitle from "../components/SectionTitleRed";

import '../assets/css/Project3.css';


import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import ReactGoogleSlides from 'react-google-slides';


import UI1 from "../assets/images/retroarcade/streetfighterUI.png";
import UI2 from "../assets/images/retroarcade/pacmanUI.png";
import UI3 from "../assets/images/retroarcade/snakeUI.png";

import line from "../assets/images/retroarcade/line.png";
import summary from "../assets/images/retroarcade/summary.png";
import sf1 from "../assets/images/retroarcade/sf1.png";
import sf2 from "../assets/images/retroarcade/sf2.png";
import sf3 from "../assets/images/retroarcade/sf3.png";
import sf from "../assets/images/retroarcade/streetfighter.png";
import characters from "../assets/images/retroarcade/characters.png";
import snake from "../assets/images/retroarcade/snake.png";
import s1 from "../assets/images/retroarcade/s1.png";
import s2 from "../assets/images/retroarcade/s2.png";
import s3 from "../assets/images/retroarcade/s3.png";
import s4 from "../assets/images/retroarcade/s4.png";
import s5 from "../assets/images/retroarcade/s5.png";
import pacman from "../assets/images/retroarcade/pacman.png";
import p1 from "../assets/images/retroarcade/p1.png";
import p2 from "../assets/images/retroarcade/p2.png";
import p3 from "../assets/images/retroarcade/p3.png";
import p4 from "../assets/images/retroarcade/p4.png";
import ae from "../assets/images/retroarcade/arcade-exterior.png";
import a1 from "../assets/images/retroarcade/h1.png";
import a2 from "../assets/images/retroarcade/h2.png";
import a3 from "../assets/images/retroarcade/h3.png";
import pbros from "../assets/images/retroarcade/pbros.png";
import team from "../assets/images/retroarcade/team.png";

import Footer from "../components/Footer.js";




const Project3 = () => (
    <>
    <ProjectNav></ProjectNav>

    <div id = "rectr"></div>

    <h1 id = "title-pr">
        RETRO ARCADE DESIGN
    </h1>

    <div id = "boxr">
        <div id = "yearr">
            <img id = "line1r" src = {line} />
            <h3 class = "subtitler">Year</h3>
            <p class = "para"> Feb-April 2020 </p>
        </div>
        
        <div id = "toolsr">
            <img id = "line2r" src = {line} />
            <h3 class = "subtitler">Tools</h3>
            <p class = "parar"> Figma, Adobe Illustrator </p>
        </div>

        <div id = "teamr">
            <img id = "line3r" src = {line} />
            <h3 class = "subtitler">Team</h3>
            <p class = "parar"> Alexander Wu, Andre Wang, Oscar Hu, Andrew Kou, Cindy Zhang, Kelly Liu,
             Alissa Chen, Jessica Yu, Emily Lu, Lulu Yu, Ryan Zhao </p>
        </div>
    </div>

    <div id = "cr">
            <Carousel autoPlay>
                <div>
                    <img src= {UI1} />
                </div>
                <div>
                    <img src={UI2}/>
                </div>
                <div>
                    <img src={UI3}/>
                </div>
            </Carousel>
        </div>

    <section id = "Overviewr">
        <SectionTitle 
        number = "1"
        name = "OVERVIEW"
        />

        <div id = "rectangle1"/>  
        <img id = "summaryr" src = {summary}/> 

        <div id = "slideshowr">
            <ReactGoogleSlides
                    width={900}
                    height={525}
                    slidesLink="https://docs.google.com/presentation/d/1EGVlS88Fm0b6GlWTDw7XFRGLsU2hZRm6hdg4l50sG6U/edit?usp=sharing"
                    slideDuration={5}
                    showControls
                    loop
            />
        </div>  
    </section>

    <section id = "interface">
        <SectionTitle 
            number = "2"
            name = "USER INTERFACE DESIGN"
            />

        <div id = "street-fighter">      
            <Carousel>
                <div>
                    <img src= {sf1}/>
                </div>
                <div>
                    <img src={sf2}/>
                </div>
                <div>
                    <img src={sf3}/>
                </div>
            </Carousel>
        </div>
        <div id = "rectangle2"/>  
        <img id = "sf" src = {sf} /> 

        <h3 class = "headingr" id = "characters">
            Street Fighter Character Design
        </h3>

        <p class = "para" id ="describe">
        Characters drawn and animated with punching or fighting actions.         </p>

        <div id = "rectangle3"/>  
        <img id = "character1" src = {characters} /> 

        <div id = "snakecarousel">
            <Carousel>
                <div>
                    <img src= {s1} />
                </div>
                <div>
                    <img src={s2} />
                </div>
                <div>
                    <img src={s3} />
                </div>
                <div>
                    <img src={s4} />
                </div>
                <div>
                    <img src={s5} />
                </div>
            </Carousel>
        </div>

        <img id = "pac" src = {pacman} /> 

        <div id = "paccarousel">
            <Carousel>
                <div>
                    <img src= {p1} />
                </div>
                <div>
                    <img src={p2} />
                </div>
                <div>
                    <img src={p3} />
                </div>
                <div>
                    <img src={p4} />
                </div>
            </Carousel>
        </div>

        <img id = "snake" src = {snake} />    

    </section>


    <section id = "hardware">
        <SectionTitle 
        number = "3"
        name = "HARDWARE DESIGN"
        />  

        <div id = "rectangle4"/> 
        <img id = "ae" src = {ae} />    

        <div id = "arcadecarousel">
            <Carousel>
                <div>
                    <img src= {a1} />
                </div>
                <div>
                    <img src={a2} />
                </div>
                <div>
                    <img src={a3} />
                </div>
            </Carousel>
        </div>     
    </section>

    <section id = "conclusion">
        <SectionTitle 
        number = "4"
        name = "CONCLUSION"
        /> 

        <img id = "pbros" src = {pbros} />  
        <img id = "team" src = {team} />  
    </section>

    <div id = "foot3">
            <Footer/> 
        </div>

</>
    

    
);
    

export default Project3;