import React from "react";

import HeroTitle from "./HeroTitle";
import planetImg from "../assets/planet.png";
import scrolImg from "../assets/scrollgif.gif";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Poster from "./Poster";
import Tagline from "./Tagline";
import Menu from "./Menu";
import { useWindowSize } from "react-use";
import Team from "./Team";
import CountDown from "./CountDown";
import Sponsors from "./Sponsors/Sponsors";
import satImg from "../assets/satlite.png";
import GameWork from "./GameWork";
// import starsImg from "../assets/stars.svg";

const HomePage = () => {
  const { width } = useWindowSize();
  let pageShow = [];
  pageShow = [0, 0, 0, 0, 0];
  pageShow[4] = "scale-[2.5]";

  return (
    <div className="bg-black">
      <Menu />
      <div class="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <Parallax
        pages={width < 450 ? 7.1 : 6.2}
        style={{
          zIndex: 10,
        }}
      >
        <ParallaxLayer speed={0.3} offset={0.1}>
          <HeroTitle />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.55}
          factor={1.5}
          speed={1}
          className="flex justify-center "
        >
          <img
            src={planetImg}
            alt="planet"
            id="planet"
            srcSet=""
            className="top-0 object-cover"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={1}>
          <CountDown />
        </ParallaxLayer>
        <ParallaxLayer speed={0.8} offset={0.99}>
          <Tagline />
          <Sponsors />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <Poster />
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={1}>
          <AboutUs />
        </ParallaxLayer>
        <ParallaxLayer offset={2.8} speed={1}>
          <GameWork />
        </ParallaxLayer>
        <ParallaxLayer offset={2.8} speed={0.8}>
          <Faq />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={width < 450 ? 4.5 : 4} speed={0.5}>
          <Team />
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={width < 450 ? 5 : 4.6}
          speed={0.5}
        ></ParallaxLayer>
        <ParallaxLayer offset={width < 450 ? 6 : 5} speed={0.2}>
          <ContactUs />
        </ParallaxLayer>
        <ParallaxLayer
          factor={0.5}
          speed={10}
          offset={0.5}
          className="flex justify-center "
        >
          <img
            className="fixed bottom-0 z-20 content-center hidden w-32 pt-20 pb-5 m-auto md:block "
            src={scrolImg}
            alt="scroll wheel"
          ></img>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default HomePage;
