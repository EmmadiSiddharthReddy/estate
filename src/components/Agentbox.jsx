import React from 'react'

function Agentbox(props) {
  return (
    <div>
      <div className='a-b-img'>
        <img src={props.image}/>
      </div>
      <div className='a-b-text'>
        <h3>{props.name}</h3>
        <a href='#' className='agent-btn'>More</a>
      </div>
    </div>
  )
}

export default Agentbox
