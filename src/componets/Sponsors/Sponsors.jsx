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
    <div className="sponsers_main_container mt-28">
      <div className="sponsors_container">
        <div className="sponsor_title">
          <h1 className="text-2xl p-10 font-bold">Our Sponsors</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            suscipit repudiandae magni voluptas sint velit ullam dolores odit
            molestiae libero Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolorum eligendi dolorem, magnam tenetur modi reiciendis omnis
            placeat incidunt reprehenderit beatae?
          </p>
        </div>
        <AnimatedComponent animation=" animate__fast animate__fadeInUp" threshold={0.1}>
          <div className="sponsors_platinum sponsors">
            <h1 className="text-lg p-3 pb-4 font-semibold" >Platinum</h1>
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
          </div>
        </AnimatedComponent>
        <AnimatedComponent animation=" animate__fast animate__fadeInUp" threshold={0.1}>
          <div className="sponsors_diamond sponsors">
            <h1 className="text-lg p-3 pb-4 font-semibold" >Diamond</h1>
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
          </div>
        </AnimatedComponent>
        <AnimatedComponent animation=" animate__fast animate__fadeInUp" threshold={0.1}>
          <div className="sponsors_gold sponsors">
            <h1 className="text-lg p-3 pb-4 font-semibold" >Gold</h1>
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
          </div>
        </AnimatedComponent>
        <AnimatedComponent animation=" animate__fast animate__fadeInUp" threshold={0.1}>
          <div className="sponsors_silver sponsors">
            <h1 className="text-lg p-3 pb-4 font-semibold" >Silver</h1>
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
          </div>
        </AnimatedComponent>
      </div>
    </div>
  );
}
