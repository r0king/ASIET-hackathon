import React from 'react'
import Tilt from "react-parallax-tilt";
import AnimatedComponent from "../AnimatedComponent";
import logo1 from "../../assets/Sponsors/titlab.png";
import logo2 from "../../assets/Sponsors/kerala.png";
import logo3 from "../../assets/Sponsors/maker.png";
import logo4 from "../../assets/Sponsors/nascom1.png";
import "./Partners.css"
function Partners() {
  return (
    <>
        <div className="parners_main_container">
            <div className="partners_container">
                <div className="partners_title">
                    <h1 className="text-2xl p-5 font-bold"><span>OUR</span> PARTNERS</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                        suscipit repudiandae magni voluptas sint velit ullam dolores odit
                        molestiae libero Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Dolorum eligendi dolorem, magnam tenetur modi reiciendis omnis
                        placeat incidunt reprehenderit beatae?
                    </p>
                </div>
                <div className="partners">
                <AnimatedComponent animation=" animate__fast animate__fadeInUp">
                    <div className="images">
                        <Tilt
                            scale={0.9}
                            glareEnable={true}
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
    </>
  )
}

export default Partners