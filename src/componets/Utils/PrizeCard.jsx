import React, { Component } from "react";
import prize1Img from "../../assets/Utils/gold.webp";
import prize2Img from "../../assets/Utils/gold2.webp";
import prize3Img from "../../assets/Utils/plat.webp";
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
          aspect-square max-w-[500px] w-full md:w-auto rounded-xl m-auto
          flex flex-col justify-center p-5 py-12 
          bg-contain bg-center bg-no-repeat scale-75"
          // shadow-[0px_105px_65px_-15px_rgba(0,0,0,0.25)]
        >
          <div
            className="uppercase top-8 md:top-5 left-0 right-0 absolute text-2xl md:text-3xl font-semibold text-center drop-shadow-[0px_0px_2px_rgba(0,0,0,0.15)] pt-5 pb-10"
            style={{
              color: this.props.colors.title,
            }}
          >
            {this.props.text}
          </div>
          <div className="flex justify-end mb-16">
            <div className="flex w-3/5 md:w-1/2 flex-col">
              <div
                className="
                 font-[Azonix] text-center font-extrabold drop-shadow-[0px_3px_5px_rgba(0,0,0,0.35)] text-transparent text-2xl md:text-3xl bg-clip-text bg-gradient-to-bl from-[#FAF4C6] via-[#D7B86C] to-[#FDFEFB] 
                 md:pb-1 pt-20 md:pt-16"
              >
                3000$
              </div>
              <div className="text-xs md:text-sm py-1 md:py-3 md:mr-3 ml-auto mb-10 border-y-2 w-4/5 border-white/50 text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, dignissimos.
              </div>
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
      <div className="flex flex-wrap justify-center h-full w-full">
        <PrizeCard
          bg={prize3Img}
          text="First Prize"
          colors={{
            title: "white",
          }}
        />
        <PrizeCard
          bg={prize2Img}
          text="First Prize"
          colors={{
            title: "black",
          }}
        />
        <PrizeCard
          bg={prize1Img}
          text="Second Prize"
          colors={{
            title: "#b4a17d",
          }}
        />
      </div>
    );
  }
}
