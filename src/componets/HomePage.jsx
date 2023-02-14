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
import planetVideoM from "../assets/globeM1.webm";
import cloudImg from "../assets/Parallax/cloud.png.webp";
import collegePic from "../assets/Parallax/asiet.png.webp";
import prizeVideoM from "../assets/prizeM2.webm";
import introVideo from "../assets/intro.webm";
import { useEffect } from "react";

const HomePage = () => {
  const { width } = useWindowSize();
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

  const introVideoRef = React.useRef(null);
  const removeVideo = (video) => {
    video.classList.add("animate__zoomOut");
    video.classList.remove("z-40");
    video.classList.add("-z-50");
  };
  useEffect(() => {
    // create a timeout where intro video only playes after 3000 seconds
    const timeout = setTimeout(() => {
      introVideoRef.current.firstChild.play();
    }, 3000);
    console.log(timeout);
    const hideVideo = () => {
      removeVideo(introVideoRef.current);
    };
    window.addEventListener("scroll", hideVideo, { once: true });
    return () => {
      window.removeEventListener("scroll", hideVideo);
    };
  }, []);
  const videoglobe = {
    translateY: ["-48%", "0", "easeInOut"],
    opacity: [0.95, 0.8, "easeOutCubic"],
    easing: "ease",
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
  const headline = {
    translateX: width > 640 ? [5, 20] : [0, 0],
    translateY: [width > 640 ? -2 : -10, -20],
    speed: 40,
    scale: [1, 1.15, "easeOutCubic"],
    opacity: [1, -0.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute p-5 inset-0 flex items-center justify-center md:justify-start ">
        <HeroTitle />
      </div>
    ),
  };
  const countdown = {
    translateY: [width > 640 ? 0 : 69, -70],
    speed: -10,
    opacity: [1, -0.5, "easeOutCubic"],
    translateX: width > 640 ? [6, 20] : [0, 0],
    scale: [1, 1.15, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <CountDown />,
  };
  const tagline = {
    translateY: [width > 640 ? 68 : 60, width > 640 ? 48 : 68],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <>
        <Tagline />
      </>
    ),
  };
  return (
    <>
      <div
        className="fixed top-0 h-screen flex justify-center items-center w-full z-40 animate__animated animate__slow bg-black "
        ref={introVideoRef}
      >
        <video
          muted
          onEnded={(e) => {
            removeVideo(e.target.parentElement);
          }}
          onClick={(e) => {
            removeVideo(e.target.parentElement);
          }}
          onChange={(e) => {
            removeVideo(e.target.parentElement);
          }}
          onScroll={(e) => {
            removeVideo(e.target.parentElement);
          }}
          onTouchMove={(e) => {
            removeVideo(e.target.parentElement);
          }}
          className=" md:h-full w-full object-cover"
        >
          <source src={introVideo} type='video/webm' />
        </video>
      </div>
      <div className=" ">
        <Menu />
        {width > 640 ? (
          <>
            <ParallaxBanner
              layers={[videoglobe, headline, countdown, tagline]}
              className="h-[100vh] bg-black"
            ></ParallaxBanner>
            <div className="flex justify-center w-full h-full">
              <video
                autoPlay
                loop
                muted
                className=" top-[8%] absolute bottom-0 object-contain h-[12%] w-[85%]"
              >
                {width > 640 ? (
                  <source src={prizeVideoM} type="video/webm"/>
                ) : (
                  <source src={prizeVideoM} type="video/webm"/>
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
        <AllUNeed2Know />
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
              easing: "easeInOutCubic",
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
          <Sponsors />
          <Faq />
          <AboutUs />
          <div className="flex justify-center w-full h-full">
            {width > 640 ?
              <iframe className="my-10 shadow-white rounded-xl z-10" width="1000" height="500" src="https://www.youtube.com/embed/EskVbcbdut0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              :
              <iframe className="mb-10 z-10" width="300" height="300" src="https://www.youtube.com/embed/EskVbcbdut0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            }
          </div>
          <ContactUs />
        </ParallaxBanner>
      </div>
    </>
  );
};
export default HomePage;
