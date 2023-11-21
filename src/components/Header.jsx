import React from 'react'
import Navbar from './Navbar'
function Header() {
  return (
    <div className='header'>
        <Navbar/>
        <div className='intro'>
            <p>Looking for a PROPERTY!!</p>
            <h1><span>Buy </span>and<span> Sell</span> Property</h1>
            <p className='details'>Lorem ipsum, dolor sit amet consectetur
             adipisicing elit. Aperiam quibusdam hic consequatur maiores 
             commodi molestias impedit dicta perspiciatis voluptas enim?
            </p>
            <a href='#' className='header-btn'>Details</a>
        </div>
    </div>
  )
}

export default Header
