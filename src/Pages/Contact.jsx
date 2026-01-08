import React from 'react'
import hero from '../assets/hero.png'
import './contact.css'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-top'>
         <h2>Lets connect with us</h2>
         <p>We will help a clients problems to develop the products they have <br/> with high quality chabge the apperanca</p>
      </div>
      <div className='contact-middle'>
        <div className='contact-img'>
          <img src={hero} alt="" />
        </div>
        <div className='contact-options'>
          <h7>Full name</h7>
          <input type="text" placeholder='Enter Full Name' required />
          <h7>Phone Number</h7>
          <input type="number" placeholder='Enter Phone Numbe ' required />
          <h7>Email</h7>
          <input type="email" placeholder='Enter Email address ' required/>
          <h7>Company(Optional) </h7>
          <input type="text" placeholder='Enter Company Name' />
          <h7>Message</h7>
          <input className='message' type="message" placeholder='Enter Your Message'required />
           
           <div>
            <button className='contact-btn' >Book A Demo</button>
           </div>
        </div>
      </div>
       
    </div>
  )
}

export default Contact
