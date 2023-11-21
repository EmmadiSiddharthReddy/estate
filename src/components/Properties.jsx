import React from 'react'
import Propertybox from './Propertybox'
import pimage1 from "../images/p1.png"
import pimage2 from "../images/p2.png"
import pimage3 from "../images/p3.png"
function Properties() {
  return (
    <div className='product'>
      <div className='p-heading'>
        <h3>Properties</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='product-container'>
        <Propertybox image={pimage1} name="Manshion" price="$37,400"/>
        <Propertybox image={pimage2} name="House" price="$24,600"/>
        <Propertybox image={pimage3} name="Villa" price="$6,575"/>
      </div>
    </div>
  )
}

export default Properties
