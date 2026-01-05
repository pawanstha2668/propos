import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Components/Login/Login'
import Pricing from './Components/Pricing/Pricing'
import Blog from './Components/Blog/Blog'
import Term from './Components/Term/Term'
import Policy from './Components/Policy/Policy'




const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='blog' element={<Blog />} />
        <Route path='term' element={<Term />} />
        <Route path='policy' element={<Policy />} />



      </Route>
    )
  )
  return (
    <div className='app'>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
