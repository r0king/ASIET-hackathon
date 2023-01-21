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
// import GameWork from "./GameWork";
import AllUNeed2Know from "./AllUNeed2Know";
import PrizeMoney from "./PrizeMoney";
import HeroTitle from "./HeroTitle";
import planetGif from "../assets/earth1.gif";
import PosterCarousel from "./PosterCarousel";
import AnimatedComponent from "./AnimatedComponent";

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
      <div className="flex -z-10 w-full justify-center  absolute ">
        <img
          src={planetGif}
          alt="planet"
          className="pl-[5%] mt-[50vh] md:mt-[55vh]"
        />
      </div>
      <div className="
      overflow-x-hidden
       top-3 relative flex justify-center w-full flex-col
       bg-gradient-to-b from-transparent via-[#7285d353] to-[#7285d353]">
        {/* <PrizeMoney /> */}
        <HeroTitle />
        <CountDown />

        <AnimatedComponent
          animation=" animate__slow animate__fadeInUp"
          once={true}
        >
          <div className="max-w-full overflow-x-hidden ">
            <Tagline />
          </div>
          <AnimatedComponent
            animation=" animate__slow animate__fadeInUp"
            once={true}
          >
            <Sponsors />
          </AnimatedComponent>
        </AnimatedComponent>
        <AnimatedComponent
          animation=" animate__slow animate__fadeInUp"
          once={true}
        >
          <AboutUs />
        </AnimatedComponent>

        <AnimatedComponent
          animation=" animate__slow animate__fadeInUp"
          once={true}
        >
          <PosterCarousel />
        </AnimatedComponent>

        <AnimatedComponent
          animation=" animate__slow animate__fadeInUp"
          once={true}
        >
          <AllUNeed2Know />
        </AnimatedComponent>

        <AnimatedComponent
          animation=" animate__slow animate__fadeInUp"
          once={true}
        >
          <Faq />
        </AnimatedComponent>

        <AnimatedComponent
          animation=" animate__slow animate__fadeInUp"
          once={true}
        >
          <ContactUs />
        </AnimatedComponent>
      </div>
    </>
  );
};

export default HomePage;
