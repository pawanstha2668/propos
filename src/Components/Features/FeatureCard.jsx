import React from 'react'
import './FeatureCard.css'
const FeatureCard = ({title, image, bgColor}) => {
  return (
    <div className='feature-card' style={ {backgroundColor:bgColor}}>
        <div className='feature-image'>
           <img src={image} alt="" />
        </div>
        <h3 className='feature-title'>{title}</h3>
      
    </div>
  )
}

export default FeatureCard
