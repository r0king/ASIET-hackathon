import React, { useState } from "react";
import { Navbar } from "../NavbarPages";

function NavWrapper({ eventDate, introVideo }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(introVideo);
  return (
    <div className={`relative ${introVideo && "h-screen"}`}>
      <div className="absolute z-50 w-full ">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} countDate={eventDate} />
      </div>

      {introVideo && (
        <div className="absolute top-0 h-screen flex justify-center items-center w-full z-40 ">
          <video autoPlay muted loop className="md:h-full w-full object-cover">
            <source src={introVideo} type='video/mp4; codecs="avc1"' />
          </video>
        </div>
      )}
    </div>
  );
}

export default NavWrapper;
