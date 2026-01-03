import React from 'react'
import customer1 from '../../assets/customer1.png'
import CustomerCard from './CutomerCard'
import './CustomerReview.css'
const CustomerReview = () => {
   const Customerreview =[
    {
        image:customer1,
        name:"Pawan Shrestha",
        position:"No Position",
        review:"Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is "
    },
    {
        image:customer1,
        name:"Pawan Shrestha",
        position:"No Position",
        review:"Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is"
    },
    {
        image:customer1,
        name:"Pawan Shrestha",
        position:" No Position",
        review:"Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is "
    },

   ]

  return (
    <div className='customer-review'>
      <h2>What Our Customer say</h2>
      <div className='container'>
        {Customerreview.map((t,index)=>(
            <CustomerCard key={index} {...t} />
        ))}
      </div>
    </div>
  )
}

export default CustomerReview
