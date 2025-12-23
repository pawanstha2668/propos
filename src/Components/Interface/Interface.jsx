import React, { useRef } from 'react'
import './Interface.css'
import partiesdetails from '../../assets/partiesdetails.png'
import productdetails from '../../assets/productdetails.png'
import settings from '../../assets/settings.png'
import dashboard from '../../assets/dashboard.png'
const Interface = () => {

const sliderref = useRef(null);


    const scrollLeft = ()=>{
       sliderref.current.scrollBy({
        left: -300,
        behaviour:"smooth",
       });
    };

    const scrollRight =()=>{
        sliderref.current.scrollBy({
            left:300,
            behaviour:"smooth",
        });
    };
    
  return (
    <div className='interface'>
      <h1 className='interface-Heading'>Beutiful Interface Of Our <br/> Pos SAAS App</h1>  
      <p className='interface-text'>The world"s largest creative network for showchasing and  discovering creative work.Our best search experince is on our mobile</p>
      <div className='slider-wrapper'>
        <button className='arrow left' onClick={scrollLeft}> ❮ </button>

        <div className='slider' ref={sliderref}>
          <img src={partiesdetails} alt="" />
          <img src={productdetails} alt="" />
          <img src={settings} alt="" />
          <img src={dashboard} alt="" />
          <img src={partiesdetails} alt="" />
          <img src={productdetails} alt="" />
          <img src={dashboard} alt="" />
          
             </div>

             <button className='arrow right' onClick={scrollRight}>❯ </button>

      </div>
    </div>
  )
}

export default Interface
