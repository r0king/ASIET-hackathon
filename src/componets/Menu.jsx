import React, { useState } from 'react'
import Burger1 from './atoms/Burger1.jsx'
import './Menu.css'

const Navbar24 = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (

    <header className={`w-full bg-transparent text-gray-100 body-font mb-4 shadow-sm fixed z-50 Menu ${isOpen && "bg-black/80"}`}>

      {/* :DESKTOP MENU */}
      <div className=" mx-auto flex justify-end items-center py-2 px-5">

        {/* ::Burger icon standard */}
        <div className="inline-flex items-center">
          <Burger1 isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

      </div>

      {/* :OPENED MENU */}
      {isOpen &&
        <div className=" w-screen h-screen flex flex-col md:justify-center py-20 px-3  bg-opacity-95 text-base uppercase text-center font-semibold">

          <a href="#link" className="block px-3 py-7 rounded-md md:text-2xl text-white/40 hover:text-white ">
            <div className='line '>
              <div className="slider"></div>
            </div>
            HOME
          </a>


          <a href="#link" className="block px-3 py-7 rounded-md md:text-2xl text-white/40 hover:text-white ">
            <div className='line'>
              <div className="slider"></div>
            </div>
            RULES AND GUIDELINES
          </a>


          <a href="#link" className="block px-3 py-7 rounded-md md:text-2xl text-white/40 hover:text-white ">
            <div className='line'>
              <div className="slider"></div>
            </div>FAQs
          </a>

          <a href="#link" className="block px-3 py-7 rounded-md md:text-2xl text-white/40 hover:text-white ">

            <div className='line line-shift-right'>
              <div className="slider"></div>
            </div>
            CONTACT US
          </a>

          <div className="social-media-links">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      }

    </header>
  )
}

export default Navbar24