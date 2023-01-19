import React from "react";
import image2 from "../assets/asiet1.jpeg";

const AboutUs = () => {
  return (
    <div className="relative mx-auto py-16 px-4 max-w-7xl md:mt-[20vh] overflow-x-clip">
      <div className="mx-auto max-w-6xl flex ">
        {/* :TITLE CONTAINER */}
        <div className="z-10 relative mx-auto md:mx-0 py-10 w-full max-w-lg flex flex-col items-center md:items-start text-center md:text-left">
          {/* ::Category */}
          <p className="text-xl  pt-10 md:pt-0 text-gray-400 font-bold uppercase tracking-wide">
            About Us
          </p>
          {/* ::Title */}
          <h2 className="mb-8 text-3xl text-gray-100 font-bold capitalize">
            <span className="text-[var(--primary-color)]">About Our</span>{" "}
            <span className="">Institute</span>
          </h2>
          {/* Content goes here */}
          <p className="text-xl text-justify ">
            Adi Shankara Institute of Engineering and Technology was established
            in Kalady with the sole purpose of cultivating the engineering
            temperament of its students and turning them into enterprising
            people in the industry. The school is managed by ADI SANKARA TRUST,
            a registered trust that has made a name for itself in the field of
            education. The Foundation has a tradition of managing educational
            institutions for more than 50 years. With JIT, we, ASIET, aspire to
            create a platform to bring professionals and students together and
            create a collaborative environment to solve a given problem in a
            rational way through the three exclusive phases.
          </p>
          {/* ::Button */}
          <button
            className="group my-5 relative inline-flex items-center px-5 py-2.5 rounded  font-bold bg-[#E2eff3] text-[#171717] text-lg transition-all duration-200 ease-out  hover:bg-transparent hover:to-transparent hover:text-[var(--secondary-color)]  "
            aria-label="Know More"
            style={{
              // shadow-[0_4px_12px_0_var(--secondary-color)]
              boxShadow: "rgb(255 255 255 / 30%) 12px 8px 40px -3px",
            }}
          >
            <a
              href="https://www.adishankara.ac.in/about-us"
              target="_blank"
              rel="noreferrer"
              className="text-[#171717] group-hover:text-[var(--secondary-color)]"
            >
              Know More
            </a>
          </button>
        </div>

        {/* :IMAGES CONTAINER */}
        <div className="opacity-70  absolute md:relative top-1/2 left-1/2 md:inset-0 sm:ml-5 w-full md:w-1/2 h-4/5 md:h-auto md:min-h-full flex transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 md:translate-y-0">
          {/* ::Image 1 */}
          <div className="invisible md:visible flex-shrink-0 relative bottom-8 left-10 w-80 h-full rounded shadow overflow-hidden">
            {/* Image goes here */}
            <img
              src={image2}
              alt=""
              className="
              shadow-[20px_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl bg-white/10 border-t-[1px] border-l-[1px] rounded-xl border-white/20
               absolute inset-0 w-full h-4/5 object-left object-cover  md:opacity-90"
            />
          </div>
          {/* ::Image 2 */}
          <div className="invisible md:visible flex-shrink-0 relative top-8 right-28 sm:right-10 md:right-28 lg:right-10 w-80 h-full rounded shadow opacity- overflow-hidden">
            {/* Image goes here */}
            <img
              src={image2}
              alt=""
              className=" shadow-[20px_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl bg-white/10 border-t-[1px] border-l-[1px] rounded-xl border-white/20 
              absolute inset-0 w-full h-4/5 object-center object-cover md:opacity-90"
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
