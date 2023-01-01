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
          fpsLimit: 2,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: false,
                  smooth: 10,
                },
              },
            },
            modes: {
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
            move: {
              directions: "bottom",
              enable: false,
              outModes: {
                default: "bounce",
              },
              random: false,
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
      <Menu />
      {/* <Pageination /> */}
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
        <ParallaxLayer offset={width < 450 ? 3.3 : 1.3} speed={0.01} factor={2}>
          <img src={satImg} alt="Satelite" className="scale-50" />
        </ParallaxLayer>
        <ParallaxLayer offset={width < 450 ? 3.3 : 1.8} speed={0.5}>
          <img
            src={moonImg}
            alt="Moon"
            className="scale-75 ml-[50vw] shadow-[inset_53px_0_100px_49px_rgba(0,0,0,0.75)] object-cover "
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={width < 450 ? 3.3 : 1.8}
          speed={0.1}
          className="flex justify-end"
        >
          <div className="h-[550px] ml-[50vw] w-[50vw] shadow-[inset_53px_0_100px_49px_rgba(0,0,0,0.75)] rounded-full blur-md bg-black opacity-50"></div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={width < 450 ? 3.3 : 2.9}
          factor={0.5}
          speed={1.5}
          style={{
            width: "100vw",
            backgroundColor: "rgba(195, 218, 224, 0.3)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0px 5vh 10vh rgba(195, 218, 224, 0.3)",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={width < 450 ? 3.3 : 2.9}
          factor={10}
          speed={1.5}
          style={{
            width: "100vw",
            marginTop: "50vh",
            backgroundColor: "rgba(195, 218, 224, 0.7)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0px 5vh 10vh rgba(195, 218, 224, 0.7)",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          speed={0.4}
          sticky={{ start: 2.9, end: 4 }}
          style={{
            backgroundImage: `url(${dronImg})`,
            backgroundSize: "cover",
            width: "400px",
            height: "200px",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={width < 450 ? 3.3 : 2.9}
          factor={1.5}
          speed={0.7}
        >
          <img
            src={cloud1}
            alt="cloud"
            style={{ display: "block", marginLeft: "10%", marginTop: "30vh" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={width < 450 ? 3.3 : 2.9}
          factor={1.5}
          speed={0.4}
        >
          <img
            src={cloud2}
            alt="cloud group"
            style={{ display: "block", marginLeft: "60%", marginTop: "30vh" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={width < 450 ? 3.3 : 3.9}
          factor={2}
          speed={0.1}
          style={{
            backgroundImage: `url(${mountainImg})`,
            backgroundSize: "cover",
            width: "100%",
          }}
        ></ParallaxLayer>
        {/* fliped image */}
        <ParallaxLayer
          offset={width < 450 ? 3.3 : 4}
          factor={2}
          speed={0.4}
          style={{
            backgroundImage: `url(${landScapeImg})`,
            backgroundSize: "cover",
            width: "100%",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={width < 450 ? 3.3 : 4.9}
          factor={2}
          speed={0.1}
          style={{
            backgroundImage: `url(${asietImg})`,
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8}>
          <AboutUs />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <Poster />
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={1.5}>
          <Sponsors />
        </ParallaxLayer>
        <ParallaxLayer
          offset={width < 450 ? 3.3 : 3}
          speed={0.4}
          style={{ zIndex: 5 }}
        >
          <Faq />
        </ParallaxLayer>

        <ParallaxLayer offset={width < 450 ? 4.5 : 4} speed={0.5}>
          <Team />
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
