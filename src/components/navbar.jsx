import React, { useState , useEffect } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn';
import lightLogo from "../assets/plantdoc_light.svg";
import darkLogo from "../assets/plantdoc_dark.svg";

const navbar = ({theme, setTheme}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex justify-between items-center rounded-b-full border-b-3 border-b-green-800 px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium 
bg-navbar transition-colors duration-300">

      <img src={theme === 'dark' ? lightLogo : darkLogo} className='w-32 sm:w-40' alt=""/>

      <div className={`text-text sm:text-sm  ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen 
        max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white 
        max-sm:pt-20 flex sm:items-center gap-5 transition-all`} >
        
        <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden' onClick={()=> setSidebarOpen(false)} />
        <a onClick={()=> setSidebarOpen(false)} href="#" className='sm:hover:border-b'>Home</a>
        <a onClick={()=> setSidebarOpen(false)} href="#AboutUs" className='sm:hover:border-b'>About Us</a>
        <a onClick={()=> setSidebarOpen(false)} href="#our-work" className='sm:hover:border-b'>Disease Recognition</a>
        {/* <a onClick={()=> setSidebarOpen(false)} href="#contact-us" className='sm:hover:border-b'>Contact us</a> */}
      </div>
      <div className='flex items-center gap-2 sm:gap-4'>

        <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

        <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} 
        alt="" onClick={()=> setSidebarOpen(true)} className='w-8 sm:hidden' />

        <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 
        bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all' >
          Contact Us<img src={assets.arrow_icon} width={14} alt=""/>
        </a>
      </div>
    </div>
  )
}

export default navbar
