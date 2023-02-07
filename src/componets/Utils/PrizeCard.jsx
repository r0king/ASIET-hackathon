import React, { Component } from "react";
import prizeImg from "../../assets/Utils/gold.png";
export default class PrizeCard extends Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${prizeImg})`,
          }}
          className="
          absolute aspect-square min-w-[450px] w-[90vw] md:w-auto rounded-xl m-auto
          flex flex-col justify-between p-5 py-12 
          bg-contain bg-center bg-no-repeat scale-75 "
        >
          <div className="text-3xl font-semibold text-center text-[#b4a17d] drop-shadow-[0px_0px_2px_rgba(0,0,0,0.15)] pt-5">
            FIRST PRIZE
          </div>
          <div className="flex justify-end mb-16">
            <div className="flex w-1/2 flex-col">
              <div className="font-extrabold drop-shadow-[0px_3px_5px_rgba(0,0,0,0.35)] text-transparent text-3xl bg-clip-text bg-gradient-to-bl from-[#FAF4C6] via-[#D7B86C] to-[#FDFEFB] pb-10 font-[Azonix] text-center">
                3000$
              </div>
              <div className="text-sm py-3 mr-3 ml-auto mb-10 border-y-2 w-4/5 border-[#AE905B] text-[#e2c189]">
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
