import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

import Home from './Pages/Home/Home'
import Skills from './Pages/Skills/Skills'
import Education from './Pages/Education/Education'
import Experience from './Pages/Experience/Experience'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Footer from './Pages/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App