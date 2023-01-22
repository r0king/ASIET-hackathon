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
    translateX: width > 640 ? [0, -20] : [0, -40],
    scale: width > 640 ? [1.3, 0.85, "easeOutCubic"] : [1, 0.5, "easeOutCubic"],
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

  const videoglobe: BannerLayer = {
    translateY: width > 640 ? ["72%", "-25%"] : ["78%", "-25%"],
    opacity: [0.9, 0.4, "easeOutCubic"],
    scale: [width > 640 ? 3: 3, width > 640 ? 0.5 : 0.5, "easeOutCubic"],
    // onChange: (el) => {
    //   console.log(el.el.firstChild.firstChild);
    //   el.el.firstChild.currentTime = el.progress * 10;
    // },
    children: (
      <video
        autoPlay
        loop
        muted
        className="top-0 absolute bottom-0 object-contain w-screen"
      >
        <source src={planetVideo} type="video/mp4" />
      </video>
    ),
  };
  const headline: BannerLayer = {
    translateY: [width > 640 ? -30 : -10, -20],
    speed: 40,
    scale: [1, 1.15, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute p-5 inset-0 flex items-center justify-center ">
        <HeroTitle />
      </div>
    ),
  };
  const countdown = {
    translateY: [width > 640 ? 33.3 : 69, 60],
    speed: -10,
    scale: [1, 1.15, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <CountDown />,
  };
  const tagline: BannerLayer = {
    translateY: [width > 640 ? 40 : 60, width > 640 ? 20 : 68],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <>
        <Tagline />
      </>
    ),
  };
  const sponsers: BannerLayer = {
    translateY: [width > 640 ? 44 : 38, 30],
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
        {width > 640 ? (
          <ParallaxBanner
            layers={[
              background,
              headline,
              videoglobe,
              countdown,
              tagline,
              sponsers,
            ]}
            // gradientOverlay]}
            className="md:h-[280vh] bg-black"
          />
        ) : (
          <>
            <ParallaxBanner
              layers={[background, headline, videoglobe, countdown, tagline]}
              className="h-[110vh] bg-black"
            />
            <Sponsors />
          </>
        )}
        <div className="bg-animation -z-10">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
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
