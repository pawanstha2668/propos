 import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Features from './Components/Features/Features'
import Interface from './Components/Interface/Interface'
 
 
 const App = () => {
   return (
     <div className='app'>
       <Navbar />
       <Hero />
       <Features />
       <Interface />
     </div>
   )
 }
 
 export default App
 