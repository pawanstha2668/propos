import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'
import scanner from '../../assets/scanner.png'
import appstore from '../../assets/appstore.png'
import googlepay from '../../assets/googlepay.png'
const Hero = () => {
  return (
     <section className='hero'>
        <div className='hero-left'>
            <h1>
          POS SAAS Flutter APP <br />
          web for <span>Mobile shop</span>
            </h1>
            <p>
              A SaaS POS system is an online point of sale system that performs A SaaS POS system is an online point of sale system that performs 
            </p>
            <div className='hero-middle'>
                <button className='buy-btn'>Byu Now</button>
                <button className='video-btn'>▶ Watch Video</button>
            </div>
            <div className='hero-middle2'>
              <img src={scanner} alt="" />
              <p>
                Scan Now to  <br/>
                the free app
              </p>
            </div>
            <div className='hero-middle3'>
              <img src={appstore} alt="" />
              <img src={googlepay} alt="" />
            </div>

        </div>

        <div className='hero-right'>
            <img src={hero} alt=""/>
        </div>

     </section>
  )
}

export default Hero
