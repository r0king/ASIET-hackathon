import React, { Component } from "react";
import prize1Img from "../../assets/Utils/gold1.webp";
import prize2Img from "../../assets/Utils/silver1.webp";
import prize3Img from "../../assets/Utils/bronze1.webp";
class PrizeCard extends Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${this.props.bg})`,
          }}
          className="
          relative
          aspect-square max-w-[500px] md:w-[600px] w-full  rounded-xl m-auto
          flex flex-col justify-center p-5 py-12 
          bg-contain bg-center bg-no-repeat scale-75"
          // shadow-[0px_105px_65px_-15px_rgba(0,0,0,0.25)]
        >
          <div
            className="uppercase top-0 md:top-8 left-0 right-0 absolute text-2xl md:text-3xl font-semibold text-center drop-shadow-[0px_0px_2px_rgba(0,0,0,0.15)] pt-5 pb-10"
            style={{
              color: this.props.colors.title,
            }}
          >
            {this.props.text}
          </div>
          <div className="flex justify-end md:mb-16">
            <div className="flex justify-center md:w-1/2 flex-col">
              <div
                className="
                 font-[Azonix] text-center font-extrabold text-transparent text-base md:text-3xl bg-clip-text bg-gradient-to-bl from-[#FAF4C6] via-[#D7B86C] to-[#FDFEFB]
                 drop-shadow-[0px_3px_5px_rgba(0,0,0,0.35)]  
                 md:pb-1 md:pt-16"
              >
                {this.props.prize}
              </div>
              {/* <div className="text-xs hidden md:block md:text-sm py-1 md:py-3 md:mr-3 ml-auto mb-10 border-y-2 w-4/5 border-white/50 text-white/60">
                {this.props.desc}
              </div> */}
            </div>
          </div>
          <div></div>
        </div>
      </>
    );
  }
}

export default class PrizeCards extends Component {
  render() {
    return (
      <div className="flex flex-col md:flex-row justify-center h-full md:h-[90vh] w-full">
        <PrizeCard
          bg={prize2Img}
          text="Second Prize"
          colors={{
            title: "black",
          }}
          desc="This prize is awarded to the runner-up project that demonstrates exceptional potential in solving the designated challenge."
          prize="Rs.50,000 ($600)"
        />
        <PrizeCard
          bg={prize1Img}
          text="First Prize"
          colors={{
            title: "white",
          }}
          desc="The top project that demonstrates exceptional creativity and innovation in solving the designated challenge."
          prize="Rs.1,00,000 ($1200)"
        />
        <PrizeCard
          bg={prize3Img}
          text="Third Prize"
          colors={{
            title: "#b4a17d",
          }}
          desc=" This prize is awarded to the project that demonstrates strong potential in solving the designated challenge."
          prize="Rs.20,000 ($240)"
        />
      </div>
    );
  }
}
