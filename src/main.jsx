import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import Pricing from './Components/Pricing/Pricing.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Interface from './Components/Interface/Interface.jsx'
import Features from './Components/Features/Features.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Term from './Components/Term/Term.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Home />}>
    <Route path='/navbar' element={<Navbar />} />
    <Route path='/hero' element={<Hero />} />
    <Route path='/features' element={<Features />} />
    <Route path='/interface' element={<Interface />} />
    <Route path='/pricing' element={<Pricing />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/term' element={<Term />} />
  </Route>
))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
