import React, { useState } from "react";
import Burger1 from "./atoms/Burger1.jsx";
import "./Menu.css";
import logoAsiet from "../assets/logo.png";
const Navbar24 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`w-screen  bg-transparent text-gray-100 body-font mb-4 md:pr-5 top-0 shadow-sm fixed z-50 Menu ${
        isOpen && "bg-black/90 h-screen"
      }`}
    >
      {/* :DESKTOP MENU */}
      <div className=" mx-auto flex justify-between items-center fixed w-full z-50">
        {/* ::Burger icon standard */}
        <div className="inline-flex items-center brightness-[50] opacity-80 p-7">
          <img src={logoAsiet} className="h-9 " alt="logo"></img>
        </div>
        <div className="mr-5 z-50 scale-75 pr-3">
          <Burger1 isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {/* <div className="inline-flex items-center">
        </div> */}
      </div>

      {/* :OPENED MENU */}
      {isOpen && (
        <div className="z-0 fixed pt-[12vh] md:w-[80vw] left-0 right-0 m-auto h-screen flex flex-col md:justify-center px-3  bg-opacity-95 text-base uppercase text-center font-semibold">
          <a
            href="/"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40  "
          >
            HOME
          </a>
          <a
            href="/productathon"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40  "
          >
            Productathon
          </a>

          <a
            href="/gameathon"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40  "
          >
            Gameathon
          </a>

          <a
            href="/ideathon"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40  "
          >
            Young Scientist Award (Ideathon)
          </a>
          <a
            href="/mechathon"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40  "
          >
            Mechathon
          </a>
          <a
            href="/civilathon"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40  "
          >
            Civilathon
          </a>
          <a
            href="/bizthon"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40  "
          >
            Bizthon
          </a>
          <a
            href="#faq"
            onClick={() => {
              setIsOpen(false);
            }}
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40  "
          >
            FAQS
          </a>
          <a
            href="https://www.adishankara.ac.in/contact-us"
            target="_blank"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40  "
            rel="noreferrer"
          >
            Contact US
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
