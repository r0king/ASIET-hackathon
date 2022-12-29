import React, { Component } from 'react'
import PageSlider from './PageSlider'
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  batch,
  Fade,
  MoveOut,
  ZoomIn,
  Move,
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
    this.state = {
      page: 0,
    };
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
  updatePage = (page) => {
    this.setState({ page: page });
  };
  render() {
    const planetStyle = `fixed content-center bg-cover top-[50vh] bottom-0  transition-all w-full max-w-[500px] object-cover left-0 right-0 m-auto  ${
      this.state.page !== 1 ? "z-0" : "z-20"
    }`;
    return (
      <div className="relative bg-black" ref={this.element}>
        <img className={planetStyle} src={PlanetImg} alt="planet" />
        <Navbar />
        <PageSlider/>
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator
              animation={batch(Sticky(50, 33), Fade(), MoveOut(0, -200))}
            >
              <HeroTitle updatePage={this.updatePage} />
            </Animator>
          </ScrollPage>
          <ScrollPage page={1}>
            <Animator
              style={{
                height: "10vh",
              }}
            ></Animator>
          </ScrollPage>
          <ScrollPage page={2}>
            <Page2 updatePage={this.updatePage} />
          </ScrollPage>
          <ScrollPage page={3}>
            <Animator animation={this.ZoomInScrollOut}>
              <Page3 updatePage={this.updatePage} />
            </Animator>
          </ScrollPage>
          <ScrollPage page={4}>
            <Page4 updatePage={this.updatePage} />
          </ScrollPage>
        </ScrollContainer>
      </div>
    );
  }
}
