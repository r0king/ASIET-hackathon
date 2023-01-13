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
    <div className="mx-auto py-10 px-4 w-full text-[var(--secondary-color)] mt-32 md:mt-40">
      <div className="flex flex-col items-center my-5 space-y-12">
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
            className="py-12 px-5 flex max-w-[50vw] md:max-w-[20vw] logo_bg justify-center rounded"
            style={{
              backgroundColor: "#E2eff39b",
            }}
          >
            <img
              src={logo1}
              alt=""
              className="w-full md:max-h-20 max-h-10 object-contain "
            />
          </div>

          <div
            className="py-12 px-5 flex max-w-[50vw] md:max-w-[20vw] logo_bg justify-center rounded"
            style={{
              backgroundColor: "#E2eff39b",
            }}
          >
            <img
              src={logo2}
              alt=""
              className=" w-full md:max-h-20 max-h-10 object-contain "
            />
          </div>

          <div
            className="py-12 px-5 flex max-w-[50vw] md:max-w-[20vw] logo_bg justify-center rounded"
            style={{
              backgroundColor: "#E2eff39b",
            }}
          >
            <img
              src={logo3}
              alt=""
              className=" w-full md:max-h-20 max-h-10 object-contain "
            />
          </div>

          <div
            className="py-12 px-5 flex max-w-[50vw] md:max-w-[20vw] logo_bg justify-center rounded"
            style={{
              backgroundColor: "#E2eff39b",
            }}
          >
            <img
              src={logo4}
              alt=""
              className=" w-full md:max-h-20 max-h-10 object-contaiimage.pngn "
            />
          </div>

          <div
            className="py-12 px-5 flex max-w-[50vw] md:max-w-[20vw] logo_bg justify-center rounded"
            style={{
              backgroundColor: "#E2eff39b",
            }}
          >
            {/* logo must be visible */}
            <img
              src={logo5}
              alt=""
              className="w-full md:max-h-20 max-h-10 object-contain invert"
            />
          </div>
          <div
            className="py-12 px-5 flex max-w-[50vw] md:max-w-[20vw] logo_bg justify-center rounded"
            style={{
              backgroundColor: "#E2eff39b",
            }}
          >
            <img
              src={logo6}
              alt=""
              className="w-full md:max-h-20 max-h-10 object-contain  "
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
            className="py-12 px-5 flex max-w-[50vw] md:max-w-[20vw] logo_bg justify-center rounded"
            style={{
              backgroundColor: "#E2eff39b",
            }}
          >
            <img
              src={partner1}
              alt=""
              className="md:max-h-20  object-contain "
            />
          </div>

          <div
            className="py-12 px-5 flex max-w-[50vw] md:max-w-[20vw] logo_bg justify-center rounded"
            style={{
              backgroundColor: "#E2eff39b",
            }}
          >
            <img
              src={logo2}
              alt=""
              className=" w-full md:max-h-20 object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
