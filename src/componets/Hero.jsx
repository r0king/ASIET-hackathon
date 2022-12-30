import React, { Component } from "react";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  MoveOut,
  ZoomIn,
  StickyIn,
  FadeIn,
} from "react-scroll-motion";
import HeroTitle from "./HeroTitle";
import Menu from './Menu/Menu'
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import PlanetImg from "../assets/planet.png";
import scrolImg from "../assets/scroll.gif";
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
    const planetStyle = `fixed content-center z-10 bg-cover bottom-0 saturate-150 transition-all w-full pt-[30vh] md:max-w-[50vw] lg:pt-[55vh]  object-cover top-0 left-0 right-0 m-auto  ${
      this.state.page !== 1 ? "blur-[1px]" : "opacity-90"
    }`;
    return (
      <div className="relative bg-black " ref={this.element}>
        <img className={planetStyle} src={PlanetImg} alt="planet" />
        <img
          className="fixed m-auto content-center bottom-0 hidden left-0 right-0 py-20 w-14 md:block z-20 "
          src={scrolImg}
          alt="scroll wheel"
        ></img>
        <ScrollContainer>
          <ScrollPage page={0} className="z-[2]">
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>
              <HeroTitle updatePage={this.updatePage} />
            </Animator>
          </ScrollPage>
          <ScrollPage page={2} className="z-10">
            <Page2 updatePage={this.updatePage} />
          </ScrollPage>
          <ScrollPage page={3} className="z-10">
            <Animator animation={this.ZoomInScrollOut}>
              <Page3 updatePage={this.updatePage} />
            </Animator>
          </ScrollPage>
          <ScrollPage page={4} className="z-10">
            <Page4 updatePage={this.updatePage} />
          </ScrollPage>
        </ScrollContainer>
      </div>
    );
  }
}
