import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
