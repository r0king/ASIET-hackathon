import React, { useEffect } from "react";
import "./animation.css";

import scrolImg from "../assets/scroll.gif";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Poster from "./Poster";
import Tagline from "./Tagline";
import Menu from "./Menu";
import { useWindowSize } from "react-use";
import CountDown from "./CountDown";
import Sponsors from "./Sponsors/Sponsors";
import GameWork from "./GameWork";
import AllUNeed2Know from "./AllUNeed2Know";
import HeroTitle from "./HeroTitle";

// parallax images import here
import satImg from "../assets/satlite.png";
import moonImg from "../assets/moon.png";
import asiet from "../assets/asiet1.png";
import planetGif from "../assets/earth1.gif";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud_grp.png";
import PosterCarousel from "./Poster_Carousel";

const HomePage = () => {
  const { width, height } = useWindowSize();
  // refer parallax
  const parallax = React.useRef();
  let pageShow = [];
  pageShow = [0, 0, 0, 0, 0];
  pageShow[4] = "scale-[2.5]";
  // let pages = width < 450 ? (height < 700 ? 8.3 : 5.7) : height < 750 ? 5.7 : 4.5
  let pages = 0;
  if (width < 450) {
    if (height < 768) {
      pages = 9;
    } else {
      pages = 6.3;
    }
  } else {
    if (height < 768) {
      pages = 6.5;
    } else {
      pages = 4.6;
    }
  }
  useEffect(() => {
    // const pheight = findPageHeight()
    // parallax.content.current.style.height = '7000px'
  }, []);

  return (
    <div className="bg-[#171717]">
      <Menu />
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <Parallax
        pages={pages}
        style={{
          zIndex: 10,
        }}
        ref={parallax}
      >
        {/* PrizeMoney */}
        {/* <ParallaxLayer speed={3} offset={0.1}>
          <PrizeMoney />
        </ParallaxLayer> */}
        {/* Main Title */}
        <ParallaxLayer speed={0.3} offset={0.1}>
          {/* <Install/> */}
          <HeroTitle />
        </ParallaxLayer>
        {/* Planet */}
        <ParallaxLayer
          offset={0.55}
          factor={1.5}
          speed={1}
          className="flex justify-center"
        >
          {/* transparent gif */}
          <img
            src={planetGif}
            alt="planet"
            className="absolute z-10 w-[100vw] md:w-[80vw] object-cover lg:ml-20 ml-10"
          />
        </ParallaxLayer>
        {/* CountDown */}
        <ParallaxLayer offset={0.7} speed={1}>
          <CountDown />
        </ParallaxLayer>
        {/* Satlite */}
        <ParallaxLayer
          offset={width < 450 ? (height < 650 ? 1.2 : 1.2) : 1.3}
          speed={width < 450 ? (height < 650 ? 0.01 : 0.01) : 0.01}
          factor={2}
          className="transition-all duration-500 ease-in-out opacity-40"
        >
          <img
            src={satImg}
            alt="Satlite"
            className="scale-50 -ml-40 md:-ml-20"
          />
        </ParallaxLayer>
        {/* Moon */}
        <ParallaxLayer
          offset={width < 450 ? (height < 650 ? 1.9 : 1.9) : 1.8}
          speed={0.5}
        >
          <img
            src={moonImg}
            alt="Moon"
            className="scale-[2] md:scale-75 ml-[50vw] shadow-[inset_53px_0_100px_49px_rgba(0,0,0,0.75)] object-cover opacity-40"
          />
        </ParallaxLayer>
        {/* Moon Shadow */}
        <ParallaxLayer
          offset={width < 450 ? (height < 650 ? 1.8 : 1.8) : 1.8}
          speed={0.08}
          className="flex  md:scale-75 justify-end"
        >
          <div className="h-[100vw] md:h-[600px] md:ml-[45vw] w-[100vw] md:w-[45vw] shadow-[inset_53px_0_100px_49px_rgba(0,0,0,0.25)] rounded-full blur-md bg-[#171717] opacity-50"></div>
        </ParallaxLayer>
        {/* College */}
        <ParallaxLayer
          speed={0.6}
          sticky={{
            start: 3.5,
            end: 9,
          }}
          style={{
            backgroundImage: `url(${asiet})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: -20,
          }}
          className="opacity-40"
        ></ParallaxLayer>

        {/* Main Componets */}
        <>
          <ParallaxLayer offset={1} speed={1}>
            <Tagline />
            <Sponsors />
            <AboutUs />
            <PosterCarousel />
            <GameWork />
            <AllUNeed2Know />
            <Faq />
            <ContactUs />
          </ParallaxLayer>
        </>
        {/* Scroll bar */}
        <ParallaxLayer
          factor={0.5}
          speed={10}
          offset={0.5}
          className="flex justify-center "
        >
          <img
            className="fixed bottom-0 z-20 content-center hidden w-32 pt-24 pb-1 m-auto md:block "
            src={scrolImg}
            alt="scroll wheel"
          ></img>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default HomePage;
