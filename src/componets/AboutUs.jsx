import React from "react";
import image1 from "../assets/about-1.webp";
import image2 from "../assets/about-2.jpg";

const AboutUs = () => {
  return (
    <div className="relative mx-auto py-16 px-4 max-w-7xl md:mt-[20vh] overflow-x-clip">
      <div className="mx-auto max-w-6xl flex ">
        {/* :TITLE CONTAINER */}
        <div className="z-10 relative mx-auto md:mx-0 py-10 w-full max-w-lg flex flex-col items-center md:items-start text-center md:text-left">
          {/* ::Category */}
          <p className="text-lg pt-10 md:pt-0 text-gray-400 font-bold uppercase tracking-wide">
            About Us
          </p>
          {/* ::Title */}
          <h2 className="mb-8 text-3xl sm:text-3xl text-gray-100 font-bold capitalize">
            <span className="text-[var(--primary-color)]">About Our</span>{" "}
            <span className="text-sc">Institute</span>
          </h2>
          {/* Content goes here */}
          <p className="text-lg text-justify p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            explicabo assumenda consequatur nam? Blanditiis, nesciunt vitae.
            Praesentium, quam iusto tenetur quaerat optio quasi at maiores
            laudantium quae distinctio sequi natus. Dolorem sunt nobis nostrum
            debitis incidunt, neque esse tempore. Quia, accusamus sunt quam
            praesentium ad officiis earum ducimus sit molestias fuga sapiente,
            corrupti dicta cupiditate fugiat dolore voluptate? Esse, at!
          </p>
          {/* ::Button */}
          <button className="group my-10  relative inline-flex items-center px-5 py-2.5 shadow-inset rounded shadow-lg outline-none bg-[var(--primary-color)] text-white font-medium transition-all duration-200 ease-out hover:text-[var(--primary-color)] hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none">
            {/* span::before */}
            <span
              className="absolute h-0 w-0.5 right-0 top-0 bg-[var(--primary-color)] transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-[var(--primary-color)] transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            Know More
            {/* span::after */}
            <span
              className="absolute left-0 bottom-0 bg-[var(--primary-color)] transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
              aria-hidden="true"
            />
            <span
              className="absolute w-0 h-0.5 right-0 top-0 bg-[var(--primary-color)] transition-all duration-500 ease-out group-hover:w-full"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* :IMAGES CONTAINER */}
        <div className="bg-gray-900 opacity-70  absolute md:relative top-1/2 left-1/2 md:inset-0 sm:ml-5 w-full md:w-1/2 h-3/4 md:h-auto md:min-h-full flex transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 md:translate-y-0">
          {/* ::Image 1 */}
          <div className="invisible md:visible flex-shrink-0 relative bottom-8 left-10 w-80 h-full rounded shadow overflow-hidden">
            {/* Image goes here */}
            <img
              src={image1}
              alt=""
              className="absolute inset-0 w-full h-full object-center object-cover opacity-30 md:opacity-80"
            />
          </div>
          {/* ::Image 2 */}
          <div className="invisible md:visible flex-shrink-0 relative top-8 right-28 sm:right-10 md:right-28 lg:right-10 w-80 h-full rounded shadow opacity- overflow-hidden">
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
