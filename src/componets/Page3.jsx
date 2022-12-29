import React, { Component } from "react";

export default class Page3 extends Component {
  element = React.createRef();
  observer = null;

  componentDidMount() {
    this.observer = new IntersectionObserver((entries) => {
      // Check if the element is in the viewport
      if (entries[0].isIntersecting) {
        console.log("Page 3 is in the viewport");
        this.props.updatePage(3);
      }
    });
    this.observer.observe(this.element.current);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }
  render() {
    return <h2 ref={this.element}>I'm a Full Stack Developer</h2>;
  }
}
