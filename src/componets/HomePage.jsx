import React, { useCallback } from "react";

import HeroTitle from "./HeroTitle";
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
import { useWindowSize } from "react-use";
import "./PageSlider.css";
import Team from "./Team";
import Sponsors from "./Sponsors/Sponsors";

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
      />
      <Menu/>
      {/* <Pageination /> */}
      <Parallax pages={width < 450 ? 6.2 : 5.4} style={{
        zIndex: 10,
      }}>
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

        <ParallaxLayer speed={0.8} offset={0.99}>
          <Tagline />
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.5}>
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
        
        <ParallaxLayer offset={width < 450 ? 7 : 4.6} speed={1}>
        <Sponsors />
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