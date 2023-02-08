import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { useWindowSize } from "react-use";

import "./animation.css";

import AllUNeed2Know from "./AllUNeed2Know";
import AboutUs from "./AboutUs";
import CountDown from "./CountDown";
import ContactUs from "./ContactUs";
import Faq from "./Faq";
import HeroTitle from "./HeroTitle";
import Menu from "./Menu";
import PosterCarousel from "./PosterCarousel";
import Sponsors from "./Sponsors/Sponsors";
import Tagline from "./Tagline";
import Bg from "./Utils/Bg";

import planetVideo from "../assets/globe.webm";
import planetVideoM from "../assets/globeM.webm";
import cloudImg from "../assets/Parallax/cloud.png.webp";
import collegePic from "../assets/Parallax/asiet.png.webp";
import prizeVideoM from "../assets/prizeM.webm";
import introVideo from "../assets/intro.webm";

const Component = () => {
  const { width } = useWindowSize();

  const background = {
    speed: -10,
    translateX: width > 640 ? [0, -20] : [0, -40],
    scale: width > 640 ? [2.5, 1.5, "easeOutCubic"] : [1, 0.5, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="bg-animation no-animation">
        <div
          id="stars"
          style={{
            animationPlayState: "paused",
          }}
        ></div>
        <div
          id="stars2"
          style={{
            animationPlayState: "paused",
          }}
        ></div>
        <div
          id="stars3"
          style={{
            animationPlayState: "paused",
          }}
        ></div>
        <div
          id="stars4"
          style={{
            animationPlayState: "paused",
          }}
        ></div>
      </div>
    ),
  };
  const videoglobe: BannerLayer = {
    translateY:
      width > 640 ? ["48%", "-25%", "easeInOut"] : ["90%", "-25%", "easeInOut"],
    opacity: [0.95, 0.8, "easeOutCubic"],
    scale: [width > 640 ? 0.8 : 1, width > 640 ? 1.1 : 1, "easeOutCubic"],
    children: (
      <div className="flex justify-center object-center items-center w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="top-0 max-w-full absolute object-contain h-screen md:h-auto"
        >
          {width > 640 ? (
            <source src={planetVideo} type="video/webm" />
          ) : (
            <source src={planetVideoM} type="video/webm" />
          )}
          not supported
        </video>
      </div>
    ),
  };
  const videoprize = {
    translateY: width > 640 ? ["45%", "30%"] : ["20%", "0%"],
    opacity:
      width > 640 ? [3.5, -0.7, "easeInOutCubic"] : [1, 0.9, "ease"],
    scale: [width > 640 ? 1 : 1, width > 640 ? 0.6 : 1, "ease"],
    children: (
      <div className="flex justify-center w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="z-30 w-full top-0 absolute bottom-0 object-contain md:h-auto "
        >
          {width > 640 ? (
            <source src={prizeVideoM} type="video/webm" />
          ) : (
            <source src={prizeVideoM} type="video/webm" />
          )}
        </video>
      </div>
    ),
  };
  const headline = {
    translateX: width > 640 ? [5, 20] : [0, 0],
    translateY: [width > 640 ? -2 : -10, -20],
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
    translateY: [width > 640 ? 86 : 69, 70],
    speed: -10,
    translateX: width > 640 ? [6, 20] : [0, 0],
    scale: [1, 1.15, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <CountDown />,
  };
  const tagline = {
    translateY: [width > 640 ? 65 : 60, width > 640 ? 48 : 68],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <>
        <Tagline />
      </>
    ),
  };
  return (
    <>
      <div className="fixed top-0 h-screen flex justify-center items-center w-full z-40 animate__animated animate__slow bg-black ">
        <video
          autoPlay
          muted
          onEnded={(e) => {
            e.target.parentElement.classList.add("animate__zoomOut");
            e.target.parentElement.classList.add("-z-50");
          }}
          onClick={(e) => {
            e.target.parentElement.classList.add("animate__zoomOut");
            e.target.parentElement.classList.add("-z-50");
          }}
          onChange={(e) => {
            e.target.parentElement.classList.add("animate__zoomOut");
            e.target.parentElement.classList.add("-z-50");
          }}
          onScroll={(e) => {
            e.target.parentElement.classList.add("animate__zoomOut");
            e.target.parentElement.classList.add("-z-50");
          }}
          onTouchMove={(e) => {
            e.target.parentElement.classList.add("animate__zoomOut");
            e.target.parentElement.classList.add("-z-50");
          }}
          className=" md:h-full w-full object-cover"
        >
          <source src={introVideo} type='video/mp4; codecs="avc1"' />
        </video>
      </div>
      <div className=" ">
        <Menu />
        {width > 640 ? (
          <>
            <ParallaxBanner
              layers={[
                videoglobe,
                headline,
                countdown,
                tagline,
              ]}
              className="h-[100vh] bg-black"
            ></ParallaxBanner>
            <div className="flex justify-center w-full h-full">
              <video
                autoPlay
                loop
                muted
                className=" top-[8%] absolute bottom-0 object-contain md:h-auto "
              >
                {width > 640 ? (
                  <source src={prizeVideoM} type="video/webm" />
                ) : (
                  <source src={prizeVideoM} type="video/webm" />
                )}
              </video>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center pt-[40%] -z-10 object-center items-center w-full h-full">
              <video
                autoPlay
                loop
                muted
                className="-bottom-[60%] max-w-full absolute object-contain h-screen md:h-auto"
              >
                {/* <source src={planetVideo} type='video/mp4; codecs="hvc1"' /> */}
                {width > 640 ? (
                  <source src={planetVideo} type="video/webm" />
                ) : (
                  <source src={planetVideoM} type="video/webm" />
                )}
                not supported
              </video>
            </div>
            <div className="flex justify-center w-full h-full">
              <video
                autoPlay
                loop
                muted
                className="w-full top-[20%] absolute bottom-0 object-contain md:h-auto "
              >
                {width > 640 ? (
                  <source src={prizeVideoM} type="video/webm" />
                ) : (
                  <source src={prizeVideoM} type="video/webm" />
                )}
              </video>
            </div>
            <div className="align-top">
              <HeroTitle />
            </div>
            <CountDown />
            <div className="w-full overflow-hidden">
              <Tagline />
            </div>
          </>
        )}
        <Bg />
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
              speed: 20,
              translateY:
                width > 640 ? [106, 72, "easeInOut"] : [84, 90, "easeInOut"],
              scale: [1, 1.4, "easeOutBack"],
              // easing: "easeInOutCubic",
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
          <Sponsors />
          <Faq />
          <AboutUs />
          <ContactUs />
        </ParallaxBanner>
      </div>
    </>
  );
};
export default Component;
