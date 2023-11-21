import React from 'react'

function Propertybox(props) {
  return (
    <div className='p-box'>
      <img src={props.image}/>
      <p>{props.name}</p>
      <a href='#' className='price'>{props.price}</a>
      <a href='#' className='buy-btn'>Select</a>
    </div>
  )
}

export default Propertybox
