import React, { Component } from "react";

export default class HeroTitle extends Component {

  element = React.createRef();
  observer = null;

  componentDidMount() {
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
      <div className="h-screen w-screen flex pb-[33vh] justify-center content-center items-center mb-10" ref={this.element}>
        <h1
          style={{
            fontFamily: "Azonix",
          }}
          className="text-4xl max-w-[80vw] sm:text-6xl  text- text-center bg-clip-text bg-gradient-to-br from-[#ADB1C7] to-[#452308] font-extrabold text-transparent"
        >
          ADI SHANKARA HACKATHON 23
        </h1>
      </div>
    );
  }
}

