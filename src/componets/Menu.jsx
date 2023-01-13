import React, { useState } from "react";
import Burger1 from "./atoms/Burger1.jsx";
import "./Menu.css";
import logoAsiet from "../assets/logo.png";
const Navbar24 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`w-screen bg-transparent text-gray-100 body-font mb-4 md:pr-5  shadow-sm fixed z-50 Menu ${
        isOpen && "bg-[#171717]/90"
      }`}
    >
      {/* :DESKTOP MENU */}
      <div className=" mx-auto flex justify-between items-center">
        {/* ::Burger icon standard */}
        <div className="inline-flex items-center brightness-[50] opacity-80 p-7">
          <img src={logoAsiet} className="h-12" alt="logo"></img>
        </div>
        <div className="mr-2 ">
          <Burger1 isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {/* <div className="inline-flex items-center">
        </div> */}
      </div>

      {/* :OPENED MENU */}
      {isOpen && (
        <div className=" w-screen h-screen flex flex-col md:justify-center py-20 px-3  bg-opacity-95 text-base uppercase text-center font-semibold">
          <a
            href="#link"
            className="block px-3 py-3 rounded-md md:text-2xl text-white/40  "
          >
            HOME
          </a>

          <a
            href="#link"
            className="block px-3 py-3 rounded-md md:text-2xl text-white/40  "
          >
            RULES AND GUIDELINES
          </a>

          <a
            href="#link"
            className="block px-3 py-3 rounded-md md:text-2xl text-white/40  "
          >
            FAQs
          </a>

          <a
            href="#link"
            className="block px-3 py-3 rounded-md md:text-2xl text-white/40  "
          >
            CONTACT US
          </a>

          <div className="social-media-links">
            <i className="text-[var(--primary-color)] cursor-pointer hover:text-[var(--secondary-color)] fa-brands fa-facebook-f"></i>
            <i className="text-[var(--primary-color)] cursor-pointer hover:text-[var(--secondary-color)] fa-brands fa-instagram"></i>
            <i className="text-[var(--primary-color)] cursor-pointer hover:text-[var(--secondary-color)] fa-brands fa-youtube"></i>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar24;
