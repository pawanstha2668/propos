import React from 'react'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import Interface from '../Interface/Interface'
import Videodemo from '../VideoDemo/Videodemo'
import Blog from '../Blog/Blog'
import Term from '../Term/Term'
import Navbar from '../Navbar/Navbar'
import CustomerReview from '../CustomerReview/CustomerReview'
import Footer from '../Footer/Footer'
import Pricing from '../Pricing/Pricing'

const Home = () => {
  return (
    <>
    <Navbar />
     <Hero />
     <Features />
     <Interface />
     <Videodemo />
     <Pricing />
     <CustomerReview />
     <Blog />
     <Term />
     <Footer />
    </>
  )
}

export default Home
 