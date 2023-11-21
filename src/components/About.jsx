import React from "react";
import aboutimage from "../images/hero.png"
function About(){
    return(
        <div className="about">
            <div className="about-model">
                <img src={aboutimage} />
            </div>
            <div className="about-text">
                <h2>We are the best <br/> Real Estate company</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing
                 elit. Expedita, eius nam! Quam sint impedit odit
                 velit omnis optio suscipit expedita.
                </p>
                <button>More</button>
            </div>

        </div>
    )
}
export default About;