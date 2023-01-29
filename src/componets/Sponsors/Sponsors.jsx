import React from "react";
import logo1 from "../../assets/Sponsors/cloud.png";
import logo2 from "../../assets/Sponsors/kerala.png";
import logo3 from "../../assets/Sponsors/maker.png";
import logo4 from "../../assets/Sponsors/nascom1.png";
import "./Sponsors.css";
import Tilt from "react-parallax-tilt";
import AnimatedComponent from "../AnimatedComponent";

export default function Sponsors() {
  return (
    <div className="sponsers_main_container -mt-10 md:mt-28  ">
      <div className="sponsors_container">
        <div className="sponsor_title">
          <h1 className="text-2xl p-5 mt-20 font-bold">
            <span>OUR</span> SPONSORS
          </h1>
        </div>
        <div className="sponsors_platinum sponsors">
        <div className="w-full flex justify-center items-center">
            <span className="flex-grow opacity-80">
              <svg
                width="96"
                height="23"
                viewBox="0 0 96 23"
                fill="none"
                className="pl-8 mt-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <linearGradient
                  id="gradientl"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="0%"
                >
                  <stop offset="0%" stop-color="#000" />
                  <stop offset="100%" stop-color="cyan" />
                </linearGradient>
                <path
                  d="M95 1H5C2.00232 1 1 2 1 5C1 8 1 22 1 22"
                  stroke="url(#gradientl)"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          <h1 className="text-lg font-semibold mb-auto px-5">Platinum</h1>
          <span className="flex-grow opacity-80 ">
              <svg
                width="96"
                height="23"
                viewBox="0 0 96 23"
                className="pr-8 mt-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#000" />
                    <stop offset="100%" stop-color="cyan" />
                  </linearGradient>
                </defs>
                <path
                  d="M1 1H91C93.9977 1 95 2 95 5C95 8 95 22 95 22"
                  stroke="url(#gradient)"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>
          <AnimatedComponent animation="mt-8 md:-mt-14 animate__fast animate__fadeInUp">
            <div className="images">
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="cyan"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo1} alt="" />
                </div>
              </Tilt>
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="cyan"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo2} alt="" />
                </div>
              </Tilt>
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="cyan"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo3} alt="" />
                </div>
              </Tilt>
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="cyan"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo4} alt="" />
                </div>
              </Tilt>
            </div>
          </AnimatedComponent>
        </div>
        <div className="sponsors_diamond sponsors">
          <div className="w-full flex justify-center items-center">
            <span className="flex-grow opacity-80">
              <svg
                width="96"
                height="23"
                viewBox="0 0 96 23"
                fill="none"
                className="pl-8 mt-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <linearGradient
                  id="gradientl"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="0%"
                >
                  <stop offset="0%" stop-color="#000" />
                  <stop offset="100%" stop-color="cyan" />
                </linearGradient>
                <path
                  d="M95 1H5C2.00232 1 1 2 1 5C1 8 1 22 1 22"
                  stroke="url(#gradientl)"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <h1 className="text-lg font-semibold mb-auto px-5">Diamond</h1>
            <span className="flex-grow opacity-80 ">
              <svg
                width="96"
                height="23"
                viewBox="0 0 96 23"
                className="pr-8 mt-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#000" />
                    <stop offset="100%" stop-color="cyan" />
                  </linearGradient>
                </defs>
                <path
                  d="M1 1H91C93.9977 1 95 2 95 5C95 8 95 22 95 22"
                  stroke="url(#gradient)"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>
          <AnimatedComponent animation="mt-8 md:-mt-14 animate__fast animate__fadeInUp">
            <div className="images">
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="pink"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo1} alt="" />
                </div>
              </Tilt>
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="pink"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo2} alt="" />
                </div>
              </Tilt>
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="pink"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo3} alt="" />
                </div>
              </Tilt>
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="pink"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo4} alt="" />
                </div>
              </Tilt>
            </div>
          </AnimatedComponent>
        </div>
        <div className="sponsors_gold sponsors">
        <div className="w-full flex justify-center items-center">
            <span className="flex-grow opacity-80">
              <svg
                width="96"
                height="23"
                viewBox="0 0 96 23"
                fill="none"
                className="pl-8 mt-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <linearGradient
                  id="gradientl"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="0%"
                >
                  <stop offset="0%" stop-color="#000" />
                  <stop offset="100%" stop-color="cyan" />
                </linearGradient>
                <path
                  d="M95 1H5C2.00232 1 1 2 1 5C1 8 1 22 1 22"
                  stroke="url(#gradientl)"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          <h1 className="text-lg font-semibold mb-auto px-5">Gold</h1>
          <span className="flex-grow opacity-80 ">
              <svg
                width="96"
                height="23"
                viewBox="0 0 96 23"
                className="pr-8 mt-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#000" />
                    <stop offset="100%" stop-color="cyan" />
                  </linearGradient>
                </defs>
                <path
                  d="M1 1H91C93.9977 1 95 2 95 5C95 8 95 22 95 22"
                  stroke="url(#gradient)"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>
          
          <AnimatedComponent animation="mt-8 md:-mt-14 animate__fast animate__fadeInUp">
            <div className="images">
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                glareColor="gold"
                glarePosition="all"
                perspective={500}
              >
                <div className="img">
                  <img src={logo1} alt="" />
                </div>
              </Tilt>
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="gold"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo2} alt="" />
                </div>
              </Tilt>
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="gold"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo3} alt="" />
                </div>
              </Tilt>
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="gold"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo4} alt="" />
                </div>
              </Tilt>
            </div>
          </AnimatedComponent>
        </div>
        <div className="sponsors_silver sponsors">
        <div className="w-full flex justify-center items-center">
            <span className="flex-grow opacity-80">
              <svg
                width="96"
                height="23"
                viewBox="0 0 96 23"
                fill="none"
                className="pl-8 mt-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <linearGradient
                  id="gradientl"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="0%"
                >
                  <stop offset="0%" stop-color="#000" />
                  <stop offset="100%" stop-color="cyan" />
                </linearGradient>
                <path
                  d="M95 1H5C2.00232 1 1 2 1 5C1 8 1 22 1 22"
                  stroke="url(#gradientl)"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          <h1 className="text-lg font-semibold mb-auto px-5">Silver</h1>
          <span className="flex-grow opacity-80 ">
              <svg
                width="96"
                height="23"
                viewBox="0 0 96 23"
                className="pr-8 mt-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#000" />
                    <stop offset="100%" stop-color="cyan" />
                  </linearGradient>
                </defs>
                <path
                  d="M1 1H91C93.9977 1 95 2 95 5C95 8 95 22 95 22"
                  stroke="url(#gradient)"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>
          <AnimatedComponent animation="mt-8 md:-mt-14 animate__fast animate__fadeInUp">
            <div className="images">
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="silver"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo1} alt="" />
                </div>
              </Tilt>
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="silver"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo2} alt="" />
                </div>
              </Tilt>
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="silver"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo3} alt="" />
                </div>
              </Tilt>
              <Tilt
                scale={0.9}
                glareEnable={true}
                glareColor="silver"
                glarePosition="all"
                glareMaxOpacity={0.45}
                glareBorderRadius="15px"
                perspective={500}
              >
                <div className="img">
                  <img src={logo4} alt="" />
                </div>
              </Tilt>
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </div>
  );
}
