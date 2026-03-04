import React, { useRef, useState } from 'react'
import NavBar1 from './components/navbar1'
import Hero from './components/Hero'
import Aboutus from './components/Aboutus'
import DiseaseRecognize from './components/DiseaseRecognize'
import ContactUs from './components/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
// import FileUpload from './components/FileUpload'

const App = () => {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-black relative bg-hero min-h-screen transition-colors duration-300' >
      <Toaster/>
      <NavBar1 theme={theme} setTheme={setTheme} />
      <Hero />
      <Aboutus/>
      <DiseaseRecognize  />
      <ContactUs />
      <Footer theme={theme}/>
    </div>
    
  )
}

export default App
