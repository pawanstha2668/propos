import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>

      <ul className='nav-links'>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/pricing">
          <li>Pricing</li>
        </NavLink>

        <li className='dropdown'>
          Pages ▾
          <ul className='dropdown-menu'>
            <NavLink to="/blog">
              <li>Blog</li>
            </NavLink>
            <NavLink to="/term">
              <li>Term and condition</li>
            </NavLink>
            <NavLink to="/policy">
              <li>Policy</li>
            </NavLink>
          </ul>
        </li>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
       <NavLink to="login">
        <button className='login-btn'>Login</button>
       </NavLink>
      {/* <button className='login-btn'>Login</button> */}

    </nav>
  )
}

export default Navbar
