import React, { Component } from "react";
import Hero from "./Hero";
import cursorImg from "../assets/cursor.png";
import ContactUs from "./ContactUs";
import Faq from "./Faq";

export default class HomePage extends Component {
  render() {
    const cursor_path = `url(${cursorImg})`;
    return (
      <Hero />
      
    );
  }
}
