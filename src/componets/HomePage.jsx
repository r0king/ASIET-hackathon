import React, { useCallback } from "react";

import HeroTitle from "./HeroTitle";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import AboutUs from "./AboutUs";
import Poster from "./Poster";
import Tagline from "./Tagline";
import Menu from "./Menu";
import { useWindowSize } from "react-use";
import "./PageSlider.css";
import Team from "./Team";
import CountDown from "./CountDown";
import Sponsors from "./Sponsors/Sponsors";
import GameWork from "./GameWork";
import starsImg from "../assets/stars.svg";

// parallax images import here
import satImg from "../assets/satlite.png";
import moonImg from "../assets/moon.png";
import dronImg from "../assets/drone.gif";
import planetImg from "../assets/planet.png";
import scrolImg from "../assets/scroll.gif";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud_grp.png";
import mountainImg from "../assets/mountain.png";
import landScapeImg from "../assets/landscape.png";
import asietImg from "../assets/asiet.png";

const HomePage = () => {
  const { width } = useWindowSize();

  let pageShow = [];
  pageShow = [0, 0, 0, 0, 0];
  pageShow[4] = "scale-[2.5]";

  return (
    <div className="bg-black">
      <Menu />
      {/* <Pageination /> */}
      <Parallax
        pages={width < 450 ? 6.7 : 6.2}
        style={{
          zIndex: 10,
        }}
      >
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={8}
          style={{
            backgroundImage: `url(${starsImg})`,
            backgroundSize: 'cover',
          }}
        />
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
            srcSet=""
            className="top-0 object-cover"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={1}>
          <CountDown />
        </ParallaxLayer>
        <ParallaxLayer speed={0.8} offset={0.99}>
          <Tagline />
        </ParallaxLayer>
        <ParallaxLayer offset={width < 450 ? 1.2 : 1.3} speed={width < 450 ? 0.01 :0.01} factor={2}>
          <img src={satImg} alt="Satelite" className="scale-50" />
        </ParallaxLayer>
        <ParallaxLayer offset={width < 450 ? 1.5 : 1.8} speed={0.5}>
          <img
            src={moonImg}
            alt="Moon"
            className="scale-80 md:scale-75 ml-[50vw] shadow-[inset_53px_0_100px_49px_rgba(0,0,0,0.75)] object-cover "
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <AboutUs />
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={1}>
          <Poster />
        </ParallaxLayer>
       
       
  <ParallaxLayer offset={width < 450 ? 2.2 : 2.5} speed={width < 450 ? 1.2: 1.5}>
          {/* <img
            src={cloud1}
            alt="clouds"
            className="scale-80 ml-32 md:ml-20 object-cover "
          /> */}
          </ParallaxLayer> 
  <ParallaxLayer offset={width < 450 ? 2.2 : 2.5} speed={width < 450 ? 1.1:1.9}>
          <img
            src={cloud2}
            alt="clouds"
            className="scale-80  ml-10 md:ml-80 object-cover "
          />
        </ParallaxLayer> 
  <ParallaxLayer offset={width < 450 ? 2.2 : 2.6} speed={width < 450 ? 1.3:1.6} >
          <img
            src={cloud2}
            alt="clouds"
            className="scale-80  -ml-28 md:-ml-80  object-cover "
          />
        </ParallaxLayer> 
        <ParallaxLayer offset={2.1} speed={1}>
          <GameWork/>
        </ParallaxLayer>
       
        <ParallaxLayer offset={width < 450 ? 2.3 :2.9} speed={1.5}>
          <Sponsors />
        </ParallaxLayer>
        <ParallaxLayer
          offset={width < 450 ? 3 : 3}
          speed={width < 450 ? 0.1 :0.4}
          style={{ zIndex: 5 }}
        >
          <Faq />
        </ParallaxLayer>

        <ParallaxLayer offset={width < 450 ? 4.2 : 4} speed={0.5}>
          <Team />
        </ParallaxLayer>
        <ParallaxLayer offset={width < 450 ? 5.5 : 5} speed={0.2}>
          <ContactUs />
        </ParallaxLayer>

        <ParallaxLayer
          factor={0.5}
          speed={10}
          offset={0.5}
          className="flex justify-center "
        >
          <img
            className="fixed m-auto content-center  bottom-0 hidden pt-20 pb-5 w-14 md:block z-20 "
            src={scrolImg}
            alt="scroll wheel"
          ></img>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default HomePage;
