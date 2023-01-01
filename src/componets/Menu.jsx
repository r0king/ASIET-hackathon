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
        <div className=" w-screen h-screen flex flex-col md:justify-center py-10 px-3  bg-opacity-95 text-base uppercase text-center font-semibold">
          <div className='line'>
            <div className="slider"></div>
          </div>
          <a href="#link" className="block px-3 py-7 rounded-md md:text-2xl text-white/40 hover:text-white ">HOME</a>

          <div className='line line-shift-right'>
            <div className="slider"></div>
          </div>
          <a href="#link" className="block px-3 py-7 rounded-md md:text-2xl text-white/40 hover:text-white ">RULES AND GUIDELINES</a>

          <div className='line'>
            <div className="slider"></div>
          </div>
          <a href="#link" className="block px-3 py-7 rounded-md md:text-2xl text-white/40 hover:text-white ">FAQs</a>

          <div className='line line-shift-right'>
            <div className="slider"></div>
          </div>
          <a href="#link" className="block px-3 py-7 rounded-md md:text-2xl text-white/40 hover:text-white ">CONTACT US</a>
        </div>
      }

    </header>
  )
}

export default Navbar24