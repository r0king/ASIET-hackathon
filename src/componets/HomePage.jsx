import React, { useCallback } from "react";

import HeroTitle from "./HeroTitle";
import Menu from "./Menu/Menu";
import planetImg from "../assets/planet.jpg";
import scrolImg from "../assets/scroll.gif";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import AboutUs from "./AboutUs";
import Poster from "./Poster";
import Tagline from "./Tagline";
import Menu from './Menu'

  return (
    <div className="bg-black">
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
          fpsLimit: 20,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 20,
                  smooth: 10,
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
                distance: 200,
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
            move: {
              directions: "bottom",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 50,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "star",
            },
            size: {
              value: { min: 0.1, max: 1 },
            },
          },
          detectRetina: true,
        }}
      >
        <div style={{zIndex:100,right:0}} className="fixed">
          <Menu />
        </div>
        <Hero />
        <div className="relative z-50 ">
          {/* <Tagline /> */}
          <Poster />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <AboutUs />
        </ParallaxLayer>
        <ParallaxLayer offset={2.8} speed={1}>
          <Faq />
        </ParallaxLayer>
        <ParallaxLayer offset={width < 450 ? 3.6 : 3.6} speed={0.3}>
          <Team />
        </ParallaxLayer>
        <ParallaxLayer offset={width < 450 ? 5.1 : 4.6} speed={1}>
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