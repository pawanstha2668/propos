import React from 'react'
import './Footer.css'
import scanner from '../../assets/scanner.png'
import google from '../../assets/googlepay.png'
import appstore from '../../assets/appstore.png'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import insta from '../../assets/insta.png'
import twiter from '../../assets/twiter.png'

import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <img src={logo} alt="" className='logo' />
          <p> this is Pospro ,This is our theme ,web, plugin and app development agency</p>
          <div className='footer-intro'>
            <img src={scanner} alt="" className='scanner' />
            <p>Scan Now to get the free app</p>
            </div>
            <div className='app-button'>
              <img src={google} alt="" className='google-store' />
              <img src={appstore} alt="" className='appstore' />
            </div>
        </div>

        <div className='footer-middle'>
          <h2>Our App Features</h2>
          <div className='middle-col'> 
          <div className='middle1'>
          <NavLink to="/features">Refund</NavLink>
          <NavLink to="/features">Sales</NavLink>
          <NavLink to="/features">Parties</NavLink>
          <NavLink to="/features">Purchase</NavLink>
          <NavLink to="/features">products</NavLink>
          <NavLink to="/features">Due List</NavLink>
          </div>
          <div className='middle2'>
          <NavLink to="/features">Income</NavLink>
          <NavLink to="/features">Expense</NavLink>
          <NavLink to="/features">Stock</NavLink>
          <NavLink to="/features">Loss/Profit</NavLink>
          <NavLink to="/features">Report</NavLink>
          <NavLink to="/features">47 +language</NavLink>
          </div>
          </div>
        </div>

        <div className='footer-right'>
          <h2>Quicks Links</h2>
          <div className='footer-link'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact" >Contact us</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/term">Term & Condition</NavLink>
          <NavLink to="/policy">Policy</NavLink>
          </div>
           
        <div className='footer-socialmedia'>
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={twiter} alt="" />
        </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>@ 2026 Pospro.All right reserved</p> 
      </div>

    </footer>
  )
}

export default Footer
