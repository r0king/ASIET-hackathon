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
import planetImg from "../assets/planet.png";
import scrolImg from "../assets/scroll.gif";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
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
      <Parallax pages={2.6} ref={this.element} >
{/* 
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          
          style={{
           
            // backgroundImage: `url(${planetImg})`,
            backgroundSize: 'cover',
          }}
        /> */}


        <ParallaxLayer
          
          speed={0}
          style={{ textAlign: 'center' }}
        >
          <img src={planetImg} className="z-0 " />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => this.element.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          onClick={() => this.element.current.scrollTo(0)}
        >
          <div className="z-40">
            <Faq />
          <ContactUs />
          </div>
          
          
        </ParallaxLayer>
      </Parallax>
    );
  }
}
