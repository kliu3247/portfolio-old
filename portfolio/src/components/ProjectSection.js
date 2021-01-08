import React from 'react';
import { Link } from 'react-router-dom';
import line from "../assets/images/arrows/Line 2.svg";
import arrow from "../assets/images/arrows/seethisproj.png";

const ProjectSection = props => (
    <>
        <div className = {'target' + props.number}>
            
            <div id = {"project" + props.number}>
                <img id = {"projPic" + props.number} src = {props.image}/>
            </div>

            <div class = "lineContainer">
                <img class = "line" src = { line }/>
                <h4 class = "type">
                    {props.type}
                </h4>
            </div>

            <h3 class = "projLabel">
                {props.label1}
            </h3>

            <h3 class = "projLabel">
                {props.label2}
            </h3>

            <h3 class = "projLabel">
                {props.label3}
            </h3>

            <h3 class = "projLabel">
                {props.label4}
            </h3>

            <h4 class = "projDescription">
                {props.description}
            </h4>

            <div class = "arrowContainer">
                <Link to = {props.link}>
                    <img class = "seeArrow" src = { arrow }/>
                </Link>

                <Link to = {props.link}>
                    <h5 class = "projDirect">
                        See this project
                    </h5>
                </Link>
            </div>   
        </div>
    </>
);

export default ProjectSection;
