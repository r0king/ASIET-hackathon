import React, { Component, useCallback } from "react";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  MoveOut,
  ZoomIn,
  StickyIn,
  FadeIn,
} from "react-scroll-motion";
import HeroTitle from "./HeroTitle";
import Menu from "./Menu/Menu";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import planetImg from "../assets/planet.jpg";
import scrolImg from "../assets/scroll.gif";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import Poster from "./Poster";
import Tagline from "./Tagline";

const HomePage = () => {
  const element = React.createRef();

  const updatePage = (page) => {
    this.setState({ page: page });
  };
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
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
          fpsLimit: 30,
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
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            move: {
              directions: "bottom",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 60,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
      <Parallax pages={5} className="z-10">
        <ParallaxLayer
          offset={0.4}
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
        <ParallaxLayer speed={0.3} offset={0.1}>
          <HeroTitle />
        </ParallaxLayer>
        <ParallaxLayer speed={1} offset={0.8}>
          <Page2 />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}>
          <h2 className="flex w-screen justify-center items-center h-screen">
            Page 3
          </h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default HomePage;
