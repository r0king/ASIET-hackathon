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
import Menu from "./Menu/Menu";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import PlanetImg from "../assets/planet.jpg";
import scrolImg from "../assets/scroll.gif";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import Poster from "./Poster";
import "./PageSlider.css"
export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    this.state = {
      page: 0,
    };
  }

  element = React.createRef();

  updatePage = (page) => {
    this.setState({ page: page });
  };
  render() {
    let pageShow = [];
    pageShow = [0, 0, 0, 0, 0];
    pageShow[this.state.page] = "scale-[2.5]";

    const planetStyle = `fixed content-center z-10 bg-cover bottom-0 saturate-150 transition-all w-full pt-[30vh] md:max-w-[50vw] lg:pt-[55vh]  object-cover top-0 left-0 right-0 m-auto  ${
      this.state.page !== 1 ? "blur-[1px]" : "opacity-90"
    }`;
    return (
      <div className="relative bg-black " ref={this.element}>
        <img className={planetStyle} src={PlanetImg} alt="planet" />
        <img
          className="fixed m-auto content-center  bottom-0 hidden left-0 right-0 py-20 w-14 md:block z-20 "
          src={scrolImg}
          alt="scroll wheel"
        ></img>
        <div>
          <ul id="pagination">
            <div className="vl"></div>
            <div className="flex justify-center flex-col items-center">
              <li className={pageShow[1]}>
                <a href="#page1"></a>
              </li>
              <li className={pageShow[2]}>
                <a href="#page2"></a>
              </li>
              <li className={pageShow[3]}>
                <a href="#page3"></a>
              </li>
              <li className={pageShow[4]}>
                <a href="#page4"></a>
              </li>
            </div>
            <div className="vl1"></div>
          </ul>
        </div>

        <ScrollContainer>
          <ScrollPage page={0} className="z-[2]" id="page-1">
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
