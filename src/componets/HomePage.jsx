import React, { Component } from "react";
import Hero from "./Hero";
import cursorImg from "../assets/cursor.png";
import ContactUs from "./ContactUs";
import Faq from "./Faq";
import Poster from "./Poster";
import Tagline from "./Tagline";
import Menu from './Menu'

export default class HomePage extends Component {
  render() {
    const cursor_path = `url(${cursorImg})`;
    return (
      <div
        className=" bg-black"
        style={{
          cursor: `${cursor_path},auto`,
        }}
      >
        <div style={{zIndex:100,right:0}} className="fixed">
          <Menu />
        </div>
        <Hero />
        <div className="relative z-50 ">
          {/* <Tagline /> */}
          <Poster />
          <Faq />
          <ContactUs />
        </div>
      </div>
    );
  }
}
