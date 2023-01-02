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
          <span className="text-[#0D6394]">About Our</span> Institute
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
          <button className="mt-[6vh] group z-10 relative px-5 py-2.5 bg-transparent text-base text- font-semibold tracking-widest antialiased transition duration-700 text-black hover:text-white active:top-0.5 focus:outline-none">
            {/* button::before */}
            <span
              className="-z-1 absolute -top-1.5 -left-1.5 h-full w-2/3 rounded-sm bg-gradient-to-t from-transparent to-white skew-x-30 transition-all duration-500 ease-bounce transform group-hover:to-white group-hover:bg-transparent  group-hover:top-0 group-hover:left-11 group-hover:mix-blend-overlay group-hover:skew-x-0"
              aria-hidden="true"
            />
            Know More
            {/* button::after */}
            <span
              className="-z-1 absolute top-1.5 left-12 h-full w-2/3 rounded-sm bg-gradient-to-b from-white to-tranfrom-transparent skew-x-30 transition-all duration-500 ease-bounce transform group-hover:from-white group-hover:bg-transparent  group-hover:top-0 group-hover:left-0 group-hover:mix-blend-overlay group-hover:skew-x-0"
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
