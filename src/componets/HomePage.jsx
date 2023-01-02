import React, { useCallback } from "react";

import HeroTitle from "./HeroTitle";
import planetImg from "../assets/planet.png";
import scrolImg from "../assets/scroll.gif";
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
// import starsImg from "../assets/stars.svg";

const HomePage = () => {
  const { width } = useWindowSize();
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);

  let pageShow = [];
  pageShow = [0, 0, 0, 0, 0];
  pageShow[4] = "scale-[2.5]";

  return (
    <div className="bg-black">
      <Menu />
      <Particles
        className=""
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: width < 450 ? 2 : 12,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: width < 450 ? false : true,
                  force: 10,
                },
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              grab: {
                distance: 150,
                links: {
                  blink: true,
                  consent: false,
                  opacity: 0,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            number: {
              density: {
                enable: true,
                area: 100,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "star",
            },
            size: {
              value: { min: 0.3, max: 0.8 },
            },
          },
          detectRetina: true,
        }}
      />
      <Parallax
        pages={width < 450 ? 7.1 : 6.2}
        style={{
          zIndex: 10,
        }}
      >
        {/* <ParallaxLayer
          offset={0}
          speed={0}
          factor={8}
          style={{
            backgroundImage: `url(${starsImg})`,
            backgroundSize: "cover",
          }}
        /> */}
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
        <ParallaxLayer offset={1} speed={1}>
          <AboutUs />
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={1}>
          <Poster />
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={1}>
          <GameWork />
        </ParallaxLayer>
        <ParallaxLayer offset={2.8} speed={0.8}>
          <Faq />
        </ParallaxLayer>
        <ParallaxLayer offset={width < 450 ? 3.6 : 3.6} speed={0.3}>
          <Team />
        </ParallaxLayer>

        <ParallaxLayer offset={width < 450 ? 5 : 4.6} speed={0.5}>
          <Sponsors />
        </ParallaxLayer>

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
