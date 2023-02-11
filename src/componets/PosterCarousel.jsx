import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import gameImg from "../assets/Gameathon/bgM.png.webp";
import bizImg from "../assets/Bizthon/bgM.webp";
import mechImg from "../assets/Mechathon/bgM.webp";
import civiImg from "../assets/Civilathon/bgM.webp";
import techImg from "../assets/Techathon/bgM.webp";
import codathonImg from "../assets/Codathon/bgPosterM.webp";
import youngImg from "../assets/Ideathon/bgM.webp";

import Tilt from "react-parallax-tilt";
import { Parallax } from "react-scroll-parallax";
// import LazyLoad from "react-lazy-load";
//
const PosterCarousel = () => {
  const categories = [
    {
      name: "civiathon",
      image: civiImg,
      date: "Coming Soon",
    },
    {
      name: "young scientists award",
      image: youngImg,
      date: "Coming Soon",
    },
    {
      name: "codathon",
      image: codathonImg,
      date: "29<sup>th</sup> March 2023",
    },
    {
      name: "gameathon",
      image: gameImg,
      date: "28-30<sup>th</sup> March 2023",
    },
    {
      name: "techathon",
      image: techImg,
      date: "Coming Soon",
    },
    {
      name: "bizthon",
      image: bizImg,
      date: "Coming Soon",
    },
    {
      name: "mechathon",
      image: mechImg,
      date: "Coming Soon",
    },
    {
      name: "civiathon",
      image: civiImg,
      date: "Coming Soon",
    },
    {
      name: "young scientists award",
      image: youngImg,
      date: "Coming Soon",
    },
    {
      name: "codathon",
      image: codathonImg,
      date: "29<sup>th</sup> March 2023",
    },
    {
      name: "gameathon",
      image: gameImg,
      date: "28-30<sup>th</sup> March 2023",
    },
  ];

  // Javascript for demonstration purpose of sliding effect. Keep it or implement your own custom solution.
  const [position, setPosition] = useState(3);
  const prevBtn = React.createRef();
  const nextBtn = React.createRef();
  const previousSuggestion = () => {
    if (position <= 2) {
      setPosition(categories.length - 3);
    } else if (position > 2) {
      setPosition(position - 1);
      // if it have prevAnimation2 class then remove it and add prevAnimation1 class
      if (prevBtn.current.classList.contains("prevAnimation2")) {
        prevBtn.current.classList.remove("prevAnimation2");
        prevBtn.current.classList.add("prevAnimation1");
      }
      // if it have prevAnimation1 class then remove it and add prevAnimation2 class
      else if (prevBtn.current.classList.contains("prevAnimation1")) {
        prevBtn.current.classList.remove("prevAnimation1");
        prevBtn.current.classList.add("prevAnimation2");
      }
      // if it doesn't have any class then add prevAnimation2 class
      else {
        prevBtn.current.classList.add("prevAnimation2");
      }
    } else {
      prevBtn.current.style.opacity = 0.3;
    }
  };
  const nextSuggestion = () => {
    let maxSlide = categories.length - 1;
    position <= maxSlide && setPosition(position + 1);
    if (position >= maxSlide - 2) {
      setPosition(2);
    } else if (position <= maxSlide) {
      // setPosition(position + 1);
      // if it have nextAnimation2 class then remove it and add nextAnimation1 class
      if (nextBtn.current.classList.contains("nextAnimation2")) {
        nextBtn.current.classList.remove("nextAnimation2");
        nextBtn.current.classList.add("nextAnimation1");
      }
      // if it have nextAnimation1 class then remove it and add nextAnimation2 class
      else if (nextBtn.current.classList.contains("nextAnimation1")) {
        nextBtn.current.classList.remove("nextAnimation1");
        nextBtn.current.classList.add("nextAnimation2");
      } else {
        nextBtn.current.classList.add("nextAnimation2");
      }
    }
    if (position > maxSlide - 1) {
      nextBtn.current.style.opacity = 0.3;
    }
  };
  useEffect(() => {
    const slide = document.getElementById("slider-w3c9");
    let start = position;
    slide.style.transform = `translateX(${start * -290}px)`;
    prevBtn.current.style.opacity = 1;
    nextBtn.current.style.opacity = 1;
  }, [position, prevBtn, nextBtn]);

  const targetRef = React.useRef(null);

  const [targetElement, setElement] = useState();
  useEffect(() => {
    setElement(targetRef.current);
  }, []);

  return (
    <>
      <div ref={targetRef}></div>
      <div className="mx-auto py-5 px-4 w-full bg-transparent md:py-28 overflow-hidden ">
        {/* :TITLE CONTAINER */}
        <div className="px-5">
          <a href="#allCategoryLink w-full ">
            <h2 className="relative flex m-auto md:flex-row flex-col w-full justify-center font-[900] text-2xl text-[var(--secondary-color)] uppercase tracking-widest md:whitespace-nowrap origin-center transform hover:whtie">
              <span className="">Hackathon</span>
              <span className="self-end text-[var(--primary-color)]">
                &nbsp;Categories
              </span>
            </h2>
          </a>
        </div>
        <Parallax targetElement={targetElement} scale={[0.7, 1]}>
          <div className="mx-auto pt-8 md:pt-4 max-w-md md:max-w-4xl flex flex-col md:flex-row items-center ">
            {/* :categories */}
            <div className="relative sm:mt-5 w-full ">
              {/* CARDS */}
              <ul
                id="slider-w3c9"
                className="w-full flex flex-nowrap transition-all duration-500 ease-in ml-6 md:ml-[290px]"
              >
                {categories.map((item, index) => (
                  <li key={index}>
                    <Tilt perspective={500}>
                      <div
                        key={index}
                        className="h-[400px] flex-shrink-0 relative py-5 sm:px-2 min-h-full w-[290px]  "
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <a
                          aria-label={item.name}
                          href={item.name}
                          className={`group animate__animated animate__fast mx-auto p-2 max-w-xs sm:max-w-none h-full flex flex-col rounded-lg hover:shadow-md transition duration-300 ease-in transform ${
                            position === index
                              ? "-translate-y-3 md:-translate-y-9 md:scale-110 "
                              : "hover:-translate-y-3 md:hover:-translate-y-9 md:hover:scale-110"
                          }`}
                        >
                          {/* ::Image Container */}
                          <div className="relative shadow-[12px_8px_40px_-3px_rgba(0,0,0,0.3)]  bg-white/10 border-t-[1px] border-l-[1px] rounded-xl border-white/20">
                            <span className="block aspect-w-3 aspect-h-3 w-full rounded-lg  overflow-hidden">
                              {/* :::image nft */}
                              <img
                                src={item.image}
                                alt=""
                                className={`object-cover rounded-md opacity-90 w-full max-h-[360px]`}
                              />
                            </span>
                            <span
                              style={{
                                translate: "translateY(20px)",
                              }}
                              className={`absolute top-3 duration-300 animate__animated animate__fast
                           opacity-0 left-2 py-1 px-2 inline-flex justify-center items-center
                           rounded-full text-2xl text-[var(--secondary-color)]
                           font-extrabold uppercase z-1 transition ease-in-out transform -translate-y-5  ${
                             position === index
                               ? "z-50 translate-y-0 opacity-20 animate__fadeInUp"
                               : "group-hover:z-50 group-hover:translate-y-0   group-hover:opacity-60"
                           } drop-shadow`}
                            >
                              {item.name}
                            </span>
                            {
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: item.date,
                                }}
                                className={`absolute bottom-3 duration-300 animate__animated animate__fast
                           opacity-0 left-2 py-1 px-2 inline-flex justify-center items-center
                           rounded-full text-base  text-white z-1 transition ease-in-out transform -translate-y-5  ${
                             position === index
                               ? " z-50 translate-y-0 opacity-100 animate__fadeInUp"
                               : " group-hover:z-50 group-hover:translate-y-0   group-hover:opacity-100"
                           } drop-shadow`}
                              ></span>
                            }
                          </div>
                        </a>
                      </div>
                    </Tilt>
                  </li>
                ))}
              </ul>
              {/* NAVIGATION BUTTONS */}
              <>
                <button
                  type="button"
                  onClick={previousSuggestion}
                  ref={prevBtn}
                  aria-label="Previous"
                  className=" absolute top-1/2 left-0 w-16 h-16 inline-flex justify-center  items-center rounded-md shadow bg-opacity-80 whtie transform  hover:bg-opacity-80 hover:text-white "
                >
                  <ChevronLeftIcon className="w-48 h-48" />
                </button>
                <button
                  type="button"
                  onClick={nextSuggestion}
                  ref={nextBtn}
                  aria-label="Next"
                  className=" absolute top-1/2 right-0 w-16 h-16 inline-flex justify-center  items-center rounded-md shadow bg-opacity-80 whtie transform  hover:bg-opacity-80 hover:text-white "
                >
                  <ChevronRightIcon className="w-48 h-48" />
                </button>
              </>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default PosterCarousel;
