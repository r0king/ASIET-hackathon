import React from "react";
import "./animation.css";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Tagline from "./Tagline";
import Menu from "./Menu";
// import { useWindowSize } from "react-use";
import CountDown from "./CountDown";
import Sponsors from "./Sponsors/Sponsors";
import GameWork from "./GameWork";
import AllUNeed2Know from "./AllUNeed2Know";
import HeroTitle from "./HeroTitle";
import planetGif from "../assets/earth1.gif";
import PosterCarousel from "./PosterCarousel";

const HomePage = () => {
  return (
    <>
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <Menu />
      <div className="relative">
        <div className="absolute flex w-full justify-center">
          <img src={planetGif} alt="planet" className="ml-10 -z-10 mt-[45vh]" />
        </div>
        <HeroTitle />
        <CountDown />
      </div>
      <div className="z-10">
        <Tagline />
        <Sponsors />
        <AboutUs />
        <PosterCarousel />
        <GameWork />
        <AllUNeed2Know />
        <Faq />
        <ContactUs />
      </div>
    </>
  );
};

export default HomePage;
