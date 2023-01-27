import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { useWindowSize } from "react-use";

import "./animation.css";

import AllUNeed2Know from "./AllUNeed2Know";
import Faq from "./Faq";
import HeroTitle from "./HeroTitle";
import Menu from "./Menu";
import PosterCarousel from "./PosterCarousel";
import Sponsors from "./Sponsors/Sponsors";
import Tagline from "./Tagline";
import AboutUs from "./AboutUs";
import CountDown from "./CountDown";
import ContactUs from "./ContactUs";

import planetVideo from "../assets/earth2.mp4";
import planetVideoM from "../assets/earthmobile.mp4";
import cloudImg from "../assets/Parallax/cloud.png";
import collegePic from "../assets/Parallax/asiet.png";
import prizeVideo from "../assets/prize.mp4";

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
    translateY: width > 640 ? ["38%", "-25%"] : ["73%", "-25%"],
    translateX: width > 640 ? ["45%", "50%"] : ["-10%", "-10%"],
    opacity: [0.95, 0.8, "easeOutCubic"],
    scale: [width > 640 ? 1.3 : 1.8, width > 640 ? 1.1 : 0.6, "easeOutCubic"],
    // onChange: (el) => {
    //   console.log(el.el.firstChild.firstChild);
    //   el.el.firstChild.currentTime = el.progress * 10;
    // },
    children: (
      <video
        autoPlay
        loop
        muted
        className="top-0 absolute bottom-0 object-contain "
      >
        {/* <source src={planetVideo} type='video/mp4; codecs="hvc1"' /> */}
        {width > 640 ? (
          <source src={planetVideo} type='video/mp4; codecs="avc1"' />
        ) : (
          <source src={planetVideoM} type='video/mp4; codecs="avc1"' />
        )}
      </video>
    ),
  };
  const videoprize: BannerLayer = {
    translateY: width > 640 ? ["-12%", "20%"] : ["73%", "-25%"],
    opacity: [3.5, -0.7, "easeOutCubic"],
    scale: [width > 640 ? 1 : 1, width > 640 ? 0.6 : 0.6, "easeOutCubic"],
    children: (
      <video
        autoPlay
        loop
        muted
        className="top-0 absolute bottom-0 object-contain w-screen opacity-70"
      >
        {/* <source src={planetVideo} type='video/mp4; codecs="hvc1"' /> */}
        <source src={prizeVideo} type='video/mp4; codecs="avc1"' />
      </video>
    ),
  };
  const headline: BannerLayer = {
    translateX: width > 640 ? [5, 20] : [0, 0],
    translateY: [width > 640 ? -35 : -10, -20],
    speed: 40,
    scale: [1, 1.15, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute p-5 inset-0 flex items-center justify-center md:justify-start ">
        <HeroTitle />
      </div>
    ),
  };
  const countdown = {
    translateY: [width > 640 ? 30 : 69, 60],
    speed: -10,
    translateX: width > 640 ? [6, 20] : [0, 0],
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
    translateY: [width > 640 ? 42 : 38, 30],
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
      <div className="bg-gradient-to-b from-transparent via-[#7285d328] to-[#7285d371] ">
        <Menu />
        {width > 640 ? (
          <ParallaxBanner
            layers={[
              background,
              videoglobe,
              // videoprize,
              headline,
              countdown,
              tagline,
              sponsers,
            ]}
            // gradientOverlay]}
            className="md:h-[285vh] bg-black"
          />
        ) : (
          <>
            <ParallaxBanner
              layers={[
                background,
                headline,
                videoprize,
                videoglobe,
                countdown,
                tagline,
              ]}
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
        {/* <Timeline /> */}

        <PosterCarousel />
        <ParallaxBanner
          className="bg-gradient-to-b from-transparent via-[#171717]/50 to-[#171717]/50"
          layers={[
            {
              translateY: [width > 640 ? 70 : 84, -15],
              translateX: [width > 640 ? -60 : -100, 30],
              scale: [3, 0.7, "easeOutCubic"],
              children: (
                <img
                  className="w-full md:w-1/2 opacity-70"
                  src={cloudImg}
                  alt="Cloud"
                  loading="lazy"
                />
              ),
            },
            {
              translateY: [width > 640 ? 70 : 80, -15],
              translateX: [width > 640 ? 178 : 100, width > 640 ? -30 : -50],
              scale: [width > 640 ? 3 : 4, 0.7, "easeOutCubic"],
              children: (
                <img
                  className="w-full md:w-1/2 opacity-70"
                  src={cloudImg}
                  alt="Cloud"
                  loading="lazy"
                />
              ),
            },
            {
              speed: 80,
              translateY: [width > 640 ? 64 : 57, width > 640 ? 90 : 110],
              scale: [1, 1.5, "easeOutCubic"],
              children: (
                <img
                  className="w-screen"
                  src={collegePic}
                  alt="College"
                  loading="lazy"
                />
              ),
            },
          ]}
        >
          <AllUNeed2Know />
          <Faq />
          <AboutUs />
          <ContactUs />
        </ParallaxBanner>
      </div>
    </>
  );
};
export default Component;
