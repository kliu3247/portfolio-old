import React from 'react';
import '../assets/css/project2.css';

const Intro = props => (
    <>
    <img id = "rect" src = {props.rectangle} />

    <h1 id = "title">
        {props.title}
    </h1>

    <img id = "display1" src = {props.pic}/>

    <div id = "box">
        <div id = "year">
            <img id = "line1" src = {props.line} />
            <h3 class = "subtitle">Year</h3>
            <p class = "para"> {props.year} </p>
        </div>
        
        <div id = "tools">
            <img id = "line2" src = {props.line} />
            <h3 class = "subtitle">Tools</h3>
            <p class = "para"> {props.tools} </p>
        </div>
    </div>
    </>
);

export default Intro;