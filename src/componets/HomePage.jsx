import React from "react";
import HeroTitle from "./HeroTitle";
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
import GameWork from "./GameWork";
import "./animation.css"

// parallax images import here
import satImg from "../assets/satlite.png";
import moonImg from "../assets/moon.png";
import asiet from "../assets/asiet1.png";
// import dronImg from "../assets/drone.gif";
import planetImg from "../assets/planet.png";
import scrolImg from "../assets/scroll.gif";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud_grp.png";
// import mountainImg from "../assets/mountain.png";
// import landScapeImg from "../assets/landscape.png";
// import asietImg from "../assets/asiet.png";

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
        pages={width < 450 ? 6.7 : 6.2}
        style={{
          zIndex: 10,
        }}
      >
        {/* Main Title */}
        <ParallaxLayer speed={0.3} offset={0.1}>
          <HeroTitle />
        </ParallaxLayer>
        {/* Planet */}
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
        {/* CountDown */}
        <ParallaxLayer offset={0.7} speed={1}>
          <CountDown />
        </ParallaxLayer>
        {/* TagLine */}
        <ParallaxLayer speed={0.8} offset={width < 450 ? 0.99 : 0.99}>
          <Tagline />
        </ParallaxLayer>
        {/* Satlite */}
        <ParallaxLayer
          offset={width < 450 ? 1.2 : 1.3}
          speed={width < 450 ? 0.01 : 0.01}
          factor={2}
        >
          <img src={satImg} alt="Satlite" className="scale-50" />
        </ParallaxLayer>
        {/* Moon */}
        <ParallaxLayer offset={width < 450 ? 1.9 : 1.8} speed={0.5}>
          <img
            src={moonImg}
            alt="Moon"
            className="scale-[2] md:scale-75 ml-[50vw] shadow-[inset_53px_0_100px_49px_rgba(0,0,0,0.75)] object-cover "
          />
        </ParallaxLayer>
        {/* Moon Shadow */}
        <ParallaxLayer
          offset={width < 450 ? 1.8 : 1.8}
          speed={0.1}
          className="flex  md:scale-75 justify-end"
        >
          <div className="h-[100vw] md:h-[600px] md:ml-[45vw] w-[100vw] md:w-[45vw] shadow-[inset_53px_0_100px_49px_rgba(0,0,0,0.75)] rounded-full blur-md bg-black opacity-50"></div>
        </ParallaxLayer>
        {/* Cloud 1*/}
        <ParallaxLayer
          offset={width < 450 ? 2.3 : 2.6}
          speed={width < 450 ? 1.8 : 1.8}
        >
          <img
            src={cloud1}
            alt="clouds"
            className="scale-80 ml-32 md:ml-96 object-cover "
          />
        </ParallaxLayer>
        {/* Cloud 2 */}
        <ParallaxLayer
          offset={width < 450 ? 2.2 : 2.5}
          speed={width < 450 ? 1.1 : 1.1}
        >
          <img
            src={cloud2}
            alt="clouds"
            className="scale-80  ml-10 md:ml-72 object-cover "
          />
        </ParallaxLayer>
        {/* Cloud 3 */}
        <ParallaxLayer
          offset={width < 450 ? 2.3 : 2.6}
          speed={width < 450 ? 1.5 : 1.5}
        >
          <img
            src={cloud2}
            alt="clouds"
            className="scale-80  -ml-28 md:-ml-80  object-cover "
          />
        </ParallaxLayer>

        {/* College */}
        <ParallaxLayer
          speed={0.6}
          sticky={{
            start: 4.5,
            end: 6,
          }}
          style={{
            backgroundImage: `url(${asiet})`,
            backgroundSize: "100vw 100vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: -20,
          }}
        ></ParallaxLayer>

        {/* Main Componets */}

        {/* About Us */}
        <ParallaxLayer offset={1} speed={1}>
          <AboutUs />
        </ParallaxLayer>
        {/* Poster */}
        <ParallaxLayer offset={1.9} speed={1}>
          <Poster />
        </ParallaxLayer>
        {/* GameWorkshop */}
        <ParallaxLayer offset={2.2} speed={1}>
          <GameWork />
        </ParallaxLayer>
        {/* FAQ */}
        <ParallaxLayer offset={2.8} speed={0.8}>
          <Faq />
        </ParallaxLayer>
        {/* Team */}
        <ParallaxLayer offset={width < 450 ? 3.6 : 3.6} speed={0.3}>
          <Team />
        </ParallaxLayer>
        {/* Sponsors */}
        <ParallaxLayer offset={width < 450 ? 0.99 : 0.99} speed={0.9}>
          <Sponsors />
        </ParallaxLayer>
        {/* Contact Us */}
        <ParallaxLayer offset={width < 450 ? 5.5 : 5} speed={0.2}>
          <ContactUs />
        </ParallaxLayer>
        {/* Scroll bar */}
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
