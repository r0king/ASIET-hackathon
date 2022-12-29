import React, { Component } from "react";
import { Animator, batch, FadeIn, MoveOut, ZoomIn } from "react-scroll-motion";

export default class Page4 extends Component {
  render() {
    return (
      <div className="flex justify-center items-center h-full">
        <span className="font-semibold text-4xl">
          <Animator animation={batch(FadeIn(), ZoomIn(), )}>
            Good bye ✋🏻
          </Animator>
          <Animator animation={batch(FadeIn(), ZoomIn(), )}>
            See you 💛
          </Animator>
        </span>
      </div>
    );
  }
}
