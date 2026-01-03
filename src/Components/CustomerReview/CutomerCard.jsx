import React from 'react'

const CutomerCard = ({image , name, position, review}) => {
  return (
    <div className='customer-card'>
        <img src= {image} alt="" className='customer-image' />
        <p className='card-review'>{review}</p>
        <h3 className='card-name'>{name}</h3>
        <p className='card-position'>{position}</p>
        <div className='card-star'> ⭐⭐⭐⭐⭐</div>

      
    </div>
  )
}

export default CutomerCard
