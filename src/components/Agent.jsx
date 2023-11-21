import React from 'react';
import Agentbox from './Agentbox';
import agentimage1 from "../images/s1.png";
import agentimage2 from "../images/s2.png";
import agentimage3 from "../images/s3.png";
function Agent() {
  return (
    <div className='agent'>
        <div className='a-heading'>
            <h1>Agents</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit..</p>

        </div>
        <div className='b-container'>
            <Agentbox image={agentimage1} name="Ali"/>
            <Agentbox image={agentimage2} name="Srinivas"/>
            <Agentbox image={agentimage3} name="Merena"/>
        </div>
      
    </div>
  )
}

export default Agent;
