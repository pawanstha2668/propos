import React from 'react'
import './Pricingcard.css'
const Pricingcard = ({plan}) => {
  return (
    <div className='pricing-card'>
      <div className='card-header'> 
      <h3>{plan.title}</h3>

      <div className='price'>
        {plan.price}<span>{plan.duration}</span>
      </div>
      </div>

      <ul className='feature-list'>
        {plan.features.map((item, index)=>(
            <li key={index} className={item.available ? "true" : "false"}>
                {item.avaialble ? "✔" : "✖" } {item.text}
            </li>
             
        ))}
      </ul>

    <button className='buy-btn'>Buy Now</button>
    </div>
  )
}

export default Pricingcard
