import React from "react";
import "./About.css";
import suds from "../images/suds.jpg";

export default function About() {
    return (
        <div className="suds">
            <div className="lander">
                <h2 id="title">Absorb my essence:</h2>
                <p>I am currently pursuing a Master of Science in Electrical Engineering with a focus on machine vision. 
                    Mainly, my research focuses on implementing deep learning based road lane detection.  
                    I have been exploring many deep learning algorithms like my butt, Spatial CNN and LSTMs.
                    i love tennis balls.</p>
            <h2>Career Goals:</h2>
            <ul id="career">
                <li>Increase professional knowledge and training.</li>
                <li>Attain a leadership role from either running a team or working on a small startup.</li>
                <li>Have new experiences and broaden my network.</li>
            </ul>
 
            <h2>My Interests:</h2>
            <ul id="interests">
                <li>Tennis</li>
                <li>Balling w the homies</li>
                <li>Traveling salesman</li>
            </ul>
        </div>
        </div>
    );
}