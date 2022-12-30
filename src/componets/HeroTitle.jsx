import React, { Component } from "react";

export default class HeroTitle extends Component {
  constructor(props) {
    super(props);
    this.element = React.createRef();
    this.observer = null;
    this.textRef = React.createRef();
  } 

  componentDidMount() {
    console.log(this.textRef.current)
    this.observer = new IntersectionObserver((entries) => {
      // Check if the element is in the viewport
      if (entries[0].isIntersecting) {
        console.log("Title is in the viewport");
        this.props.updatePage(1);
      }
    });
    this.observer.observe(this.element.current);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }
  render() {
    return (
      <div
        className="h-screen flex pb-[33vh] justify-center content-center items-center mb-10 z-10"
        ref={this.element}
      >
        <h1
          style={{
            fontFamily: "Azonix",
            transformStyle: "preserve-3d",
          }}
          className="text-4xl p-2 md:max-w-[60vw] sm:text-6xl  xl:text-8xl text-center bg-clip-text bg-gradient-to-br from-[#ADB1C7] to-[#452308] font-extrabold text-transparent"
        >
          ADI SHANKARA <span ref={this.textRef}>HACKATHON</span> 23
        </h1>
      </div>
    );
  }
}
