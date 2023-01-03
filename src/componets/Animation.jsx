import React, { Component } from "react";
import "./animation.css";
import spaceWrap from "../assets/space_wrap.gif";
import logo from "../assets/Sponsors/maker.png";
export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.element = React.createRef();
    this.logo = React.createRef();
  }
  componentDidMount() {
    setTimeout(() => {
      // add animate__zoomOutUp to logo 
      this.logo.current.classList.add("animate__zoomOutUp");
    }, 2000);
  }
  render() {
    return (
      <div
        className="bg-white flex justify-center items-center"
        id="overlay"
        ref={this.element}
        style={{
          backgroundImage: `url(${spaceWrap})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1000,
          transition: "all 2s ease-in-out",
          opacity: 1,
        }}
      >
        <img
          src={logo}
          ref={this.logo}
          className="animate__zoomInDown animate__animated "
          style={{
            position: "absolute",
          }}
          alt="logo"
        />
      </div>
    );
  }
}
