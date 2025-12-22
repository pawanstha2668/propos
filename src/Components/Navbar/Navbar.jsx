import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>

      <ul className='nav-links'>
        <li>Home</li>
        <li>About Us</li>
        <li>Pricing</li>
        <li className='dropdown'>
          Pages ▾
          <ul className='dropdown-menu'>
            <li>Blog</li>
            <li>Term and Condition</li>
            <li>Policy</li>
          </ul>
        </li>
        <li>Contact Us</li>
         </ul>

         <button className='login-btn'>Login</button>
    </nav>
  )
}

export default Navbar
