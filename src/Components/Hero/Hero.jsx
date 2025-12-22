import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'
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
            <div className='hero-buttons'>
                <button className='buy-btn'>Byu Now</button>
                <button className='video-btn'>▶ Watch Video</button>
            </div>

        </div>

        <div className='hero-right'>
            <img src={hero} alt=""/>
        </div>

     </section>
  )
}

export default Hero
