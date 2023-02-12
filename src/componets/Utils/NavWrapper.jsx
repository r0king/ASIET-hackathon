import React, { useState } from "react";
import { Navbar } from "../NavbarPages";

function NavWrapper({ eventDate, introVideo }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`relative ${introVideo && "h-screen"}`}>
      <div className="absolute z-50 w-full ">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} countDate={eventDate} />
      </div>

      {introVideo && (
        <div className="absolute top-0 h-screen md:h-auto flex justify-center items-center w-full z-40 ">
          <div>
            <video
              autoPlay
              muted
              loop
              className="md:h-full w-full object-cover"
              style={{
                boxShadow: "inset 0px 0px 50px 0px white",
              }}
            >
              <source src={introVideo} type='video/webm' />
            </video>
            <div className="absolute w-full h-full shadow-[inset_0_-20px_50px_0px_rgba(0,0,0,1)] top-0 left-0"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavWrapper;
