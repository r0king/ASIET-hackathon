import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const PosterCarousel = () => {
  const categories = [
    {
      id: 1,
      href: "#link",
      name: "PRoductathon",
      image:
        "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg  ",
    },

    {
      id: 2,
      href: "#link",
      name: "gameathon",
      collection: "Stargazers",
      image:
        "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg",
      price: "0.67 ETH",
      highestBid: "1.5 ETH",
      stock: "10",
      chain: "ethereum",
    },
    {
      id: 3,
      href: "#link",
      name: "ideathon",
      collection: "Boom Bears",
      image:
        "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg",
      price: "1.49 ETH",
      highestBid: "0.002 ETH",
      stock: "3k",
      chain: "ethereum",
    },
    {
      id: 4,
      href: "#link",
      name: "Mechathon",
      collection: "Psycho",
      image:
        "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg",
      price: "10 ETH",
      highestBid: "8.80 ETH",
      stock: "40",
      chain: "ethereum",
    },
    {
      id: 5,
      href: "#link",
      name: "Civiathon",
      collection: "Mutant Ape",
      image:
        "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg",
      price: "7.06 ETH",
      highestBid: "13 ETH",
      stock: "10k",
      chain: "ethereum",
    },
    {
      id: 6,
      href: "#link",
      name: "Bizthon",
      image:
        "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg",
    },
  ];

  // Javascript for demonstration purpose of sliding effect. Keep it or implement your own custom solution.
  const [position, setPosition] = useState(0);
  const previousSuggestion = () => position >= 1 && setPosition(position - 1);
  const nextSuggestion = () => {
    let viewport = window.innerWidth;
    let maxSlide;
    viewport < 640
      ? (maxSlide = categories.length - 1)
      : viewport < 768
      ? (maxSlide = categories.length - 4)
      : viewport < 1024
      ? (maxSlide = categories.length - 3)
      : (maxSlide = categories.length - 3);
    position < maxSlide && setPosition(position + 1);
  };
  useEffect(() => {
    const slide = document.getElementById("slider-w3c9");
    let start = position;
    const viewport = window.innerWidth;
    let slideValue =
      viewport < 640
        ? -100
        : viewport < 768
        ? -100
        : viewport < 1024
        ? -33.33
        : -33.33;
    // On each state update it will slide to the current position
    slide.style.transform = `translateX(${start * slideValue}%)`;
  }, [position]);
  // On resize set current position to zero to avoid unwanted effects
  useEffect(() => {
    window.addEventListener("resize", () => setPosition(0));
  });

  // Update dots number on resize
  const [numberSlides, setNumberSlides] = useState(
    Math.ceil(categories.length / 2)
  );
  useEffect(() => {
  });
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
      <div className="mx-auto max-w-md md:max-w-6xl flex flex-col md:flex-row items-center ">
        {/* :categories */}
        <div className="relative sm:mt-5 w-full overflow-hidden">
          {/* CARDS */}
          <ul
            id="slider-w3c9"
            className="w-full flex transition-all duration-500 ease-in"
          >
            {categories.map((item) => (
              <li
                key={item.id}
                className="flex-shrink-0 relative py-5 sm:px-2 min-h-full w-full sm:w-1/2 md:w-1/3 "
              >
                <a
                  href={item.href}
                  className="group mx-auto p-2 max-w-xs sm:max-w-none h-full flex flex-col rounded-lg hover:shadow-md transition duration-150 ease-in transform hover:-translate-y-3 md:hover:-translate-y-9"
                >
                  {/* ::Image Container */}
                  <div
                    className="relative hover:shadow-[0px_40px_65px_-50px_rgba(255,255,255,0.2)]"
                  >
                    <span className="block aspect-w-3 aspect-h-3 w-full rounded-lg overflow-hidden">
                      {/* :::image nft */}
                      <img
                        src={item.image}
                        alt=""
                        className="object-cover rounded-md"
                      />
                    </span>
                    <span
                      style={{
                        writingMode: "vertical-rl",
                      }}
                      className="absolute top-3 duration-400 animate__animated animate__slow opacity-0 right-2 py-1 px-2 inline-flex justify-center items-center rounded-full  text-6xl text-[var(--primary-color)] font-extrabold uppercase z-1 transition ease-in transform -translate-y-5  group-hover:z-50 group-hover:translate-y-0 group-hover:opacity-40"
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
              className="absolute top-1/2 left-0 w-16 h-16 inline-flex justify-center items-center rounded-md shadow bg-opacity-80 whtie transform -translate-y-1/2  hover:bg-opacity-80 hover:text-white"
            >
              <ChevronLeftIcon className="w-48 h-48" />
            </button>
            <button
              type="button"
              onClick={nextSuggestion}
              className="absolute top-1/2 right-0 w-16 h-16 inline-flex justify-center items-center rounded-md shadow bg-opacity-80 whtie transform -translate-y-1/2  hover:bg-opacity-80 hover:text-white"
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
