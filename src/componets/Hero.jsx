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
import planetImg from "../assets/planet.jpg";
import scrolImg from "../assets/scroll.gif";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
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
    return (
      <Parallax pages={3} className="bg-black">
        <ParallaxLayer
          offset={0.6}
          speed={1}
          factor={2}          
          style={{
            backgroundImage: `url(${planetImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="flex w-screen justify-center items-center h-screen">
            Page 1
          </h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <h2 className="flex w-screen justify-center items-center h-screen">
            Page 2
          </h2>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}>
          <h2 className="flex w-screen justify-center items-center h-screen">
            Page 3
          </h2>
        </ParallaxLayer>
      </Parallax>
    );
  }
}
