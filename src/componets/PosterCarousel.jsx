import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import posterImg from "../assets/Gameathon/bgM.png";
const PosterCarousel = () => {
  const categories = [
    {
      id: 0,
      href: "#link",
      name: "productathon",
      image: posterImg,
    },

    {
      id: 1,
      href: "#link",
      name: "gameathon",
      image: posterImg,
    },
    {
      id: 2,
      href: "#link",
      name: "ideathon",
      image: posterImg,
    },
    {
      id: 3,
      href: "#link",
      name: "mechathon",
      image: posterImg,
    },
    {
      id: 4,
      href: "#link",
      name: "civiathon",
      image: posterImg,
    },
    {
      id: 5,
      href: "#link",
      name: "bizthon",
      image: posterImg,
    },
  ];

  // Javascript for demonstration purpose of sliding effect. Keep it or implement your own custom solution.
  const [position, setPosition] = useState(1);
  const prevBtn = React.createRef();
  const nextBtn = React.createRef();
  const previousSuggestion = () => {
    if (position >= 1) {
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
    let maxSlide = categories.length - 2;
    position <= maxSlide && setPosition(position + 1);
    if (position <= maxSlide) {
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
      }
      // if it doesn't have any class then add nextAnimation2 class
      else {
        nextBtn.current.classList.add("nextAnimation2");
      }
    }
    if (position > maxSlide-1) {
      nextBtn.current.style.opacity = 0.3;
    }
  };
  useEffect(() => {
    const slide = document.getElementById("slider-w3c9");
    let start = position;
    const viewport = window.innerWidth;
    let slideValue = viewport < 640 ? -100 : viewport < 1024 ? -33.33 : -33.33;
    // On each state update it will slide to the current position
    slide.style.transform = `translateX(${start * slideValue}%)`;
    prevBtn.current.style.opacity = 1;
    nextBtn.current.style.opacity = 1;
  }, [position]);
  // On resize set current position to zero to avoid unwanted effects
  useEffect(() => {
    window.addEventListener("resize", () => setPosition(0));
  });

  useEffect(() => {});

  return (
    <div className="mx-auto py-5 px-4 w-full max-w-7xl bg-transparent md:mt-56">
      {/* :TITLE CONTAINER */}
      <div className="px-5">
        <h2 className="relative flex justify-center text-xl md:text-3xl text-gray-400 font-bold uppercase tracking-widest whitespace-nowrap origin-center transform hover:whtie">
          <a href="#allCategoryLink">
            All <span className="text-[var(--primary-color)]">Categories</span>
          </a>
        </h2>
      </div>
      <div className="mx-auto max-w-md md:max-w-4xl flex flex-col md:flex-row items-center ">
        {/* :categories */}
        <div className="relative sm:mt-5 w-full ">
          {/* CARDS */}
          <ul
            id="slider-w3c9"
            className="w-full flex transition-all duration-500 ease-in"
          >
            {categories.map((item) => (
              <li
                key={item.id}
                className=" flex-shrink-0 relative py-5 sm:px-2 min-h-full w-full sm:w-1/2 md:w-1/3 "
              >
                <a
                  href={item.name}
                  className={`group animate__animated animate__fast mx-auto p-2 max-w-xs sm:max-w-none h-full flex flex-col rounded-lg hover:shadow-md transition duration-300 ease-in transform ${
                    position === item.id
                      ? "-translate-y-3 md:-translate-y-9 scale-110 "
                      : "hover:-translate-y-3 md:hover:-translate-y-9 hover:scale-110"
                  }`}
                >
                  {/* ::Image Container */}
                  <div className="relative shadow-[20px_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl bg-white/10 border-t-[1px] border-l-[1px] rounded-xl border-white/20">
                    <span className="block aspect-w-3 aspect-h-3 w-full rounded-lg overflow-hidden">
                      {/* :::image nft */}
                      <img
                        src={item.image}
                        alt=""
                        className={`object-cover rounded-md opacity-90 `}
                      />
                    </span>
                    <span
                      style={{
                        writingMode: "vertical-rl",
                      }}
                      className={`absolute top-3 duration-300 animate__animated animate__fast opacity-0 right-2 py-1 px-2 inline-flex justify-center items-center rounded-full text-xl sm:text-3xl md:text-4xl text-[var(--secondary-color)] font-extrabold uppercase z-1 transition ease-in-out transform -translate-y-5  ${
                        position === item.id
                          ? "z-50 translate-y-0 opacity-60 animate__fadeInUp"
                          : "group-hover:z-50 group-hover:translate-y-0  group-hover:opacity-60"
                      } drop-shadow`}
                    >
                      {item.name}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          {/* NAVIGATION BUTTONS */}
          <>
            <button
              type="button"
              onClick={previousSuggestion}
              ref={prevBtn}
              className=" absolute top-1/2 left-0 w-16 h-16 inline-flex justify-center  items-center rounded-md shadow bg-opacity-80 whtie transform  hover:bg-opacity-80 hover:text-white "
            >
              <ChevronLeftIcon className="w-48 h-48" />
            </button>
            <button
              type="button"
              onClick={nextSuggestion}
              ref={nextBtn}
              className=" absolute top-1/2 right-0 w-16 h-16 inline-flex justify-center  items-center rounded-md shadow bg-opacity-80 whtie transform  hover:bg-opacity-80 hover:text-white "
            >
              <ChevronRightIcon className="w-48 h-48" />
            </button>
          </>
        </div>
      </div>
    </div>
  );
};

export default PosterCarousel;
