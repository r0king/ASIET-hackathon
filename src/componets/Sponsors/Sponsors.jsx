import React from "react";
import logo1 from "../../assets/Sponsors/cloud.png";
import logo2 from "../../assets/Sponsors/ciirc.png";
import logo3 from "../../assets/Sponsors/nascom1.png";
import logo4 from "../../assets/Sponsors/nascom2.png";
import logo5 from "../../assets/Sponsors/tiltlabs.png";
import logo6 from "../../assets/Sponsors/maker.png";

import partner1 from "../../assets/Sponsors/jyothy.png";

import "./Sponsors.css";
export default function Sponsors() {
  return (
    <div className="mx-auto py-10 px-4 w-full text-[var(--secondary-color)] mt-32 md:mt-40 z-10">
      <div className="flex flex-col items-center my-5 space-y-12 ">
        {/* :TITLE CONTAINER */}
        <div className="mx-auto max-w-6xl space-y-3 text-center">
          {/* ::Title */}
          <h2 className="text-3xl font-bold tracking-wide">Our Sponsers</h2>
          {/* ::Text */}
          <p className="text-lg sm:text-base text-[var(--secondary-color)]">
            Eaque totam placeat fuga neque quam vero. Harum nesciunt voluptate
            quidem, repudiandae nihil repellendus praesentium impedit sequi non
            modi ipsa! Libero, nostrum?
          </p>
        </div>
        {/* :PARTNERS LOGOS */}
        <div className="flex justify-center gap-6 flex-wrap">
          <div
            className="transition-all duration-500 py-12 px-5 flex max-w-[50vw] rounded-lg md:max-w-[20vw] bg-black/70 justify-center cursor-pointer "
            style={{
              boxShadow: "rgb(255 255 255 / 15%) 0px 8px 40px 0px",
            }}
            onMouseEnter={(e) => {
              // update boxshadow to increate opacity
              e.target.style.boxShadow =
                "rgb(255 255 255 / 50%) 0px 8px 40px 0px";
            }}
            onMouseLeave={(e) => {
              // update boxshadow back
              e.target.style.boxShadow =
                "rgb(255 255 255 / 15%) 0px 8px 40px 0px";
            }}
          >
            <img
              src={logo1}
              alt=""
              className="w-full md:max-h-20 max-h-10 object-contain pointer-events-none"
            />
          </div>

          <div
            className="transition-all duration-500 py-12 px-5 flex max-w-[50vw] rounded-lg hover:shadow-xl md:max-w-[20vw] bg-black/70 justify-center cursor-pointer "
            style={{
              boxShadow: "rgb(255 255 255 / 15%) 0px 8px 40px 0px",
            }}
            onMouseEnter={(e) => {
              // update boxshadow to increate opacity
              e.target.style.boxShadow =
                "rgb(255 255 255 / 50%) 0px 8px 40px 0px";
            }}
            onMouseLeave={(e) => {
              // update boxshadow back
              e.target.style.boxShadow =
                "rgb(255 255 255 / 15%) 0px 8px 40px 0px";
            }}
          >
            <img
              src={logo2}
              alt=""
              className=" w-full md:max-h-20 max-h-10 object-contain pointer-events-none"
            />
          </div>

          <div
            className="transition-all duration-500 py-12 px-5 flex max-w-[50vw] rounded-lg md:max-w-[20vw] bg-black/70 justify-center cursor-pointer "
            style={{
              boxShadow: "rgb(255 255 255 / 15%) 0px 8px 40px 0px",
            }}
            onMouseEnter={(e) => {
              // update boxshadow to increate opacity
              e.target.style.boxShadow =
                "rgb(255 255 255 / 50%) 0px 8px 40px 0px";
            }}
            onMouseLeave={(e) => {
              // update boxshadow back
              e.target.style.boxShadow =
                "rgb(255 255 255 / 15%) 0px 8px 40px 0px";
            }}
          >
            <img
              src={logo3}
              alt=""
              className=" w-full md:max-h-20 max-h-10 object-contain pointer-events-none"
            />
          </div>

          <div
            className="transition-all duration-500 py-12 px-5 flex max-w-[50vw] rounded-lg md:max-w-[20vw] bg-black/70 justify-center cursor-pointer "
            style={{
              boxShadow: "rgb(255 255 255 / 15%) 0px 8px 40px 0px",
            }}
            onMouseEnter={(e) => {
              // update boxshadow to increate opacity
              e.target.style.boxShadow =
                "rgb(255 255 255 / 50%) 0px 8px 40px 0px";
            }}
            onMouseLeave={(e) => {
              // update boxshadow back
              e.target.style.boxShadow =
                "rgb(255 255 255 / 15%) 0px 8px 40px 0px";
            }}
          >
            <img
              src={logo4}
              alt=""
              className=" w-full md:max-h-20 max-h-10 object-contaiimage.pngn pointer-events-none"
            />
          </div>

          <div
            className="transition-all duration-500 py-12 px-5 flex max-w-[50vw] rounded-lg md:max-w-[20vw] bg-black/70 justify-center cursor-pointer "
            style={{
              boxShadow: "rgb(255 255 255 / 15%) 0px 8px 40px 0px",
            }}
            onMouseEnter={(e) => {
              // update boxshadow to increate opacity
              e.target.style.boxShadow =
                "rgb(255 255 255 / 50%) 0px 8px 40px 0px";
            }}
            onMouseLeave={(e) => {
              // update boxshadow back
              e.target.style.boxShadow =
                "rgb(255 255 255 / 15%) 0px 8px 40px 0px";
            }}
          >
            {/* logo must be visible */}
            <img
              src={logo5}
              alt=""
              className="w-full md:max-h-20 max-h-10 object-contain invertpointer-events-none"
            />
          </div>
          <div
            className="transition-all duration-500 py-12 px-5 flex max-w-[50vw] rounded-lg md:max-w-[20vw] bg-black/70 justify-center cursor-pointer "
            style={{
              boxShadow: "rgb(255 255 255 / 15%) 0px 8px 40px 0px",
            }}
            onMouseEnter={(e) => {
              // update boxshadow to increate opacity
              e.target.style.boxShadow =
                "rgb(255 255 255 / 50%) 0px 8px 40px 0px";
            }}
            onMouseLeave={(e) => {
              // update boxshadow back
              e.target.style.boxShadow =
                "rgb(255 255 255 / 15%) 0px 8px 40px 0px";
            }}
          >
            <img
              src={logo6}
              alt=""
              className="w-full md:max-h-20 max-h-10 object-contain  pointer-events-none"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-10 space-y-12">
        {/* :TITLE CONTAINER */}
        <div className="mx-auto max-w-6xl space-y-3 text-center">
          {/* ::Title */}
          <h2 className="text-3xl font-bold tracking-wide">
            Our Trusted Partners
          </h2>
          {/* ::Text */}
          <p className="text-lg sm:text-base text-[var(--secondary-color)]">
            Eaque totam placeat fuga neque quam vero. Harum nesciunt voluptate
            quidem, repudiandae nihil repellendus praesentium impedit sequi non
            modi ipsa! Libero, nostrum?
          </p>
        </div>
        {/* :PARTNERS LOGOS */}
        <div className="flex justify-center gap-5 flex-wrap">
          <div
            className="transition-all duration-500 py-12 px-5 flex max-w-[50vw] rounded-lg md:max-w-[15vw] bg-black/70 justify-center cursor-pointer "
            style={{
              boxShadow: "rgb(255 255 255 / 15%) 0px 8px 40px 0px",
            }}
            onMouseEnter={(e) => {
              // update boxshadow to increate opacity
              e.target.style.boxShadow =
                "rgb(255 255 255 / 50%) 0px 8px 40px 0px";
            }}
            onMouseLeave={(e) => {
              // update boxshadow back
              e.target.style.boxShadow =
                "rgb(255 255 255 / 15%) 0px 8px 40px 0px";
            }}
          >
            <img
              src={partner1}
              alt=""
              className="md:max-h-[15vw]  object-contain "
            />
          </div>

          <div
            className="transition-all duration-500 py-12 px-5 flex max-w-[50vw] rounded-lg md:max-w-[15vw] bg-black/70 justify-center cursor-pointer "
            style={{
              boxShadow: "rgb(255 255 255 / 15%) 0px 8px 40px 0px",
            }}
            onMouseEnter={(e) => {
              // update boxshadow to increate opacity
              e.target.style.boxShadow =
                "rgb(255 255 255 / 50%) 0px 8px 40px 0px";
            }}
            onMouseLeave={(e) => {
              // update boxshadow back
              e.target.style.boxShadow =
                "rgb(255 255 255 / 15%) 0px 8px 40px 0px";
            }}
          >
            <img
              src={logo2}
              alt=""
              className=" w-full md:max-h-[15vw] object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
