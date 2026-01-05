import React from 'react'
import Hero from '../Components/Hero/Hero'
import Features from '../Components/Features/Features'
import Interface from '../Components/Interface/Interface'
import VideoDemo from '../Components/VideoDemo/Videodemo'
import Pricing from '../Components/Pricing/Pricing'
import CustomerReview from '../Components/CustomerReview/CustomerReview'
const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Interface />
      <VideoDemo />
      <Pricing />
      <CustomerReview />
    </div>
  )
}

export default Home
