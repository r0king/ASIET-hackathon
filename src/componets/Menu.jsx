import React, { useState } from 'react'
import Burger1 from './atoms/Burger1.jsx'

const Navbar24 = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (

      <header className="w-full bg-transparent text-gray-100 body-font mb-4 shadow-sm">

        {/* :DESKTOP MENU */}
        <div className="container mx-auto flex justify-end items-center py-2 px-5">

          {/* ::Burger icon standard */}
          <div className="inline-flex items-center">
            <span className="mr-4 text-lg text-gray-500 uppercase">Menu</span>
            <Burger1 isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

        </div>

        {/* :OPENED MENU */}
        {isOpen &&
          <div style={{ backgroundColor: '#041717'}} className="w-full h-screen flex flex-col md:justify-center py-4 px-3  bg-opacity-95 text-base uppercase text-center font-semibold">
            <a href="#link" className="block my-5 px-3 py-2 rounded-md md:text-2xl text-white-500 hover:text-white hover:bg-gray-700">Solutions</a>
            <a href="#link" className="block my-5 px-3 py-2 rounded-md md:text-2xl text-white-500 hover:text-white hover:bg-gray-700">Prices</a>
            <a href="#link" className="block my-5 px-3 py-2 rounded-md md:text-2xl text-white-500 hover:text-white hover:bg-gray-700">About</a>
            <a href="#link" className="block my-5 px-3 py-2 rounded-md md:text-2xl text-white-500 hover:text-white hover:bg-gray-700">Contact</a>
          </div>
        }

      </header>
  )
}

export default Navbar24