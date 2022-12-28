import React, { Component } from "react";

export default class HeroTitle extends Component {
  render() {
    return (
      <div className="h-screen w-screen flex justify-center content-center items-center">
        <h1
          style={{
            fontFamily: "Azonix",
          }}
          className="text-4xl md:text-6xl text- text-center bg-clip-text bg-gradient-to-br from-[#ADB1C7] to-[#452308] font-extrabold text-transparent"
        >
          HACKATHON
        </h1>
      </div>
    );
  }
}
