import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

import "./animation.css";

import AllUNeed2Know from "./AllUNeed2Know";
import AnimatedComponent from "./AnimatedComponent";
import Faq from "./Faq";
import HeroTitle from "./HeroTitle";
import Menu from "./Menu";
import PosterCarousel from "./PosterCarousel";
import Sponsors from "./Sponsors/Sponsors";
import Tagline from "./Tagline";
import AboutUs from "./AboutUs";
import CountDown from "./CountDown";

import planetVideo from "../assets/earth2.mp4";
import ContactUs from "./ContactUs";
import { useWindowSize } from "react-use";

const Component = () => {
  const { width } = useWindowSize();

  const background: BannerLayer = {
    speed: -10,
    translateX: width > 640 ? [-100, 0] : [20, 0],
    scale: width > 640 ? [1.3, 0.95, "easeOutCubic"] : [1, 0.5, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="bg-animation ">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
    ),
  };

  const headline: BannerLayer = {
    translateY: [-30, 0],
    speed: 40,
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute p-5 inset-0 flex items-center justify-center md:justify-start ">
        <HeroTitle />
      </div>
    ),
  };
  const countdown = {
    translateY: [30, width > 640 ? 40 : 90],
    opacity: [1, width > 640 ? 1 : -1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <CountDown />,
  };
  const videoglobe: BannerLayer = {
    translateY: [20, 0],
    opacity: [0.8, 0.4, "easeOutCubic"],
    scale: [1.2, 0.6, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="w-full h-full -ml-[25vw] md:ml-auto">
        <video
          autoPlay
          loop
          muted
          className="top-0 absolute bottom-0 object-contain w-[150vw] max-w-xl md:max-w-none"
        >
          <source src={planetVideo} type="video/mp4" />
        </video>
      </div>
    ),
  };
  const tagline: BannerLayer = {
    translateY: [40, 20],
    opacity: [1, -0.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <>
        <Tagline />
      </>
    ),
  };
  const sponsers: BannerLayer = {
    translateY: [44, 30],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <>
        <Sponsors />
      </>
    ),
  };

  return (
    <>
      <div className="bg-gradient-to-b from-transparent via-[#7285d328] to-[#7285d371] opacity-100 bg-opacity-100">
        <Menu />
        <ParallaxBanner
          layers={[
            background,
            videoglobe,
            headline,
            tagline,
            countdown,
            sponsers,
          ]}
          // gradientOverlay]}
          className="h-[280vh] "
        />
        <AboutUs />

        <AnimatedComponent animation=" animate__fast animate__zoomIn">
          <PosterCarousel />
        </AnimatedComponent>
        <AnimatedComponent animation=" animate__fast animate__fadeInLeft">
          <AllUNeed2Know />
        </AnimatedComponent>
        <AnimatedComponent animation=" animate__fast animate__fadeInLeft">
          <Faq />
        </AnimatedComponent>
        <AnimatedComponent animation=" animate__fast animate__fadeInLeft">
          <ContactUs />
        </AnimatedComponent>
      </div>
    </>
  );
};
export default Component;
