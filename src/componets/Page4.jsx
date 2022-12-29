import React, { Component } from "react";
import { Animator, batch, FadeIn, MoveOut, ZoomIn } from "react-scroll-motion";

export default class Page4 extends Component {
  element = React.createRef();
  observer = null;

  componentDidMount() {
    this.observer = new IntersectionObserver((entries) => {
      // Check if the element is in the viewport
      if (entries[0].isIntersecting) {
        console.log("Page 4 is in the viewport");
        this.props.updatePage(4);
      }
    });
    this.observer.observe(this.element.current);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }
  render() {
    return (
      <div className="flex justify-center items-center h-full" ref={this.element}>
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
