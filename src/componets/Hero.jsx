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
  render() {
    return (
      <>
        <div className="relative ">
          <div className="h-screen overflow-x-hidden w-screen fixed  bg-black"></div>

          <img
            className="fixed content-center bg-cover top-[20vh] bottom-0 opacity-60 w-full max-w-[500px] object-cover left-0 right-0 m-auto z-20"
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
      </>
    );
  }
}
