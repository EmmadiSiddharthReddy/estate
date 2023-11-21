import React from 'react'
import logo from '../images/logo1.png'
import About from './About'
function Navbar() {
  return (
    <nav>
        <a href='#' className='logo'>
            <img src={logo} alt='logo'/>
        </a>
        <input className='menu-btn' type='checkbok' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Agent</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Properties</a></li>
        </ul>
        <a href='#' className='property'>Login</a>
    </nav>
  )
}

export default Navbar
