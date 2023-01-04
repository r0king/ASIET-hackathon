import React from "react";
import image1 from "../assets/about-1.webp";
import image2 from "../assets/about-2.jpg";

const AboutUs = () => {
  return (
    <div className="relative mx-auto py-16 px-4 max-w-7xl overflow-x-clip">
      <div className="mx-auto max-w-6xl flex">
        {/* :TITLE CONTAINER */}
        <div className="z-10 relative mx-auto md:mx-0 py-10 w-full max-w-lg flex flex-col items-center md:items-start text-center md:text-left">
          {/* ::Category */}
          <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide">
            About Us
          </p>
          {/* ::Title */}
          <h2 className="mb-8 text-2xl sm:text-3xl text-gray-100 font-bold capitalize">
            <span className="text-[#0D6394]">About Our</span>{" "}
            <span className="text-[f0f0f0]">Institute</span>
          </h2>
          {/* Content goes here */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          explicabo assumenda consequatur nam? Blanditiis, nesciunt vitae.
          Praesentium, quam iusto tenetur quaerat optio quasi at maiores
          laudantium quae distinctio sequi natus. Dolorem sunt nobis nostrum
          debitis incidunt, neque esse tempore. Quia, accusamus sunt quam
          praesentium ad officiis earum ducimus sit molestias fuga sapiente,
          corrupti dicta cupiditate fugiat dolore voluptate? Esse, at!
          {/* ::Button */}
          <button className="group my-5 relative px-6 py-4 bg-gradient-to-br from-[f0f0f0] to-[#0D6394] bg-clip-text text-base  active:top-0.5 focus:outline-none">
            Know More
            {/* button::before */}
            <span
              className="absolute top-1 right-1 w-1/4 h-1/4 border-2 border-b-0 border-l-0 border-[#0D6394] transition-all duration-500 rounded-sm group-hover:w-full group-hover:h-full"
              aria-hidden="true"
            />
            {/* button::after */}
            <span
              className="absolute bottom-1 left-1 w-1/4 h-1/4 border-2 border-t-0 border-r-0 border-[f0f0f0] transition-all duration-500 rounded-sm group-hover:w-full group-hover:h-full"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* :IMAGES CONTAINER */}
        <div className="absolute md:relative top-1/2 left-1/2 md:inset-0 sm:ml-5 w-full md:w-1/2 h-3/4 md:h-auto md:min-h-full flex transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 md:translate-y-0">
          {/* ::Image 1 */}
          <div className="flex-shrink-0 relative bottom-8 left-10 w-80 h-full rounded shadow overflow-hidden">
            {/* Image goes here */}
            <img
              src={image1}
              alt=""
              className="absolute inset-0 w-full h-full object-center object-cover opacity-30 md:opacity-80"
            />
          </div>
          {/* ::Image 2 */}
          <div className="flex-shrink-0 relative top-8 right-28 sm:right-10 md:right-28 lg:right-10 w-80 h-full rounded shadow opacity- overflow-hidden">
            {/* Image goes here */}
            <img
              src={image2}
              alt=""
              className="absolute inset-0 w-full h-full object-center object-cover opacity-20 md:opacity-80"
            />
          </div>
        </div>

        {/* :OVERLAY */}
        {/* <div className="absolute inset-0 block md:hidden w-full h-full bg-gray-600 opacity-90" /> */}
      </div>
    </div>
  );
};

export default AboutUs;
