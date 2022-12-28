import React, { Component } from "react";
import { Animator, MoveIn, MoveOut } from "react-scroll-motion";

export default class Page2 extends Component {
  render() {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="font-semibold text-4xl">
          <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
          <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>-
          I'm Dante Chun -
          <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
          <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
        </span>
      </div>
    );
  }
}
