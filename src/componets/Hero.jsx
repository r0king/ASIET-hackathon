import React, { Component } from "react";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  batch,
  Fade,
  MoveOut,
  ZoomIn,
  StickyIn,
  FadeIn,
} from "react-scroll-motion";
import HeroTitle from "./HeroTitle";
import Navbar from "./Navbar";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import PlanetImg from "../assets/planet.png";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  }

  element = React.createRef();
  observer = null;

  componentDidMount() {
    this.observer = new IntersectionObserver((entries) => {
      // Check if the element is in the viewport
      if (entries[0].isIntersecting) {
        console.log("Hero is in the viewport");
      }
    });
    this.observer.observe(this.element.current);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  render() {
    return (
      <div className="bg-black" ref={this.element}>
        <img
          className="fixed content-center bg-cover top-[20vh] bottom-0 opacity-60 w-full max-w-[500px] object-cover left-0 right-0 m-auto "
          src={PlanetImg}
          alt="planet"
        />
        <Navbar />
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator
              animation={batch(Sticky(50, 33), Fade(), MoveOut(0, -200))}
            >
              <HeroTitle />
            </Animator>
          </ScrollPage>
          <ScrollPage page={1}>
            <Page2 />
          </ScrollPage>
          <ScrollPage page={2}>
            <Animator animation={this.ZoomInScrollOut}>
              <Page3 />
            </Animator>
          </ScrollPage>
          <ScrollPage page={3}>
            <Page4 />
          </ScrollPage>
        </ScrollContainer>
      </div>
    );
  }
}
