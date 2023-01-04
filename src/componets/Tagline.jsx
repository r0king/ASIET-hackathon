/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useRef, useEffect } from "react";

const Tagline = () => {
  useEffect(() => {
    let style1 = document.createElement("style");
    let style2 = document.createElement("style");
    let style3 = document.createElement("style");
    let after = document.getElementById("after-te2");
    let before = document.getElementById("before-te2");
    let glitch = document.getElementById("glitch-te2");
    const setKeyframesRules1 = (n, start = 0) => {
      let steps = "";
      for (let i = start; i <= n; i++) {
        let percent = (i / n) * 100;
        let random1 = `${Math.random() * 100}px`;
        let random2 = `${Math.random() * 100}px`;
        let random3 = `${Math.random()}deg`;
        steps = steps.concat(
          `${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0); transform: skew(${random3}) } `
        );
      }
      return steps;
    };
    const setKeyframesRules2 = (n, start = 0) => {
      let steps = "";
      for (let i = start; i < n; i++) {
        let percent = (i / n) * 100;
        let random = `${Math.random() * 10 - 5}deg`;
        steps = steps.concat(`${percent}% { transform: skew(${random}) }`);
      }
      return steps;
    };
    let keyframes1 = `@keyframes glitch-effect-1 { ${setKeyframesRules1(20)} }`;
    let keyframes2 = `@keyframes glitch-effect-2 { ${setKeyframesRules1(20)} }`;
    let keyframes3 = `@keyframes glitch-effect-3 { ${setKeyframesRules2(10)} }`;
    style1.innerHTML = keyframes1;
    style2.innerHTML = keyframes2;
    style3.innerHTML = keyframes3;
    after.appendChild(style1);
    before.appendChild(style2);
    glitch.appendChild(style3);
    after.style.animation =
      "glitch-effect-1 5s infinite linear alternate-reverse";
    before.style.animation =
      "glitch-effect-2 1s infinite linear alternate-reverse";
    glitch.style.animation =
      "glitch-effect-3 1s infinite linear alternate-reverse";
  }, []);

  const textContainer = useRef(null);

  return (
    <div className="text-center">
      {window.innerWidth < 1150 ? (
        <marquee behavior="" direction="">
          <h1
            ref={textContainer}
            id="glitch-te2"
            className="relative text-[#f0f0f0] text-5xl font-bold tracking-widest mt-6 mb-10"
            data-text="glitch"
          >
            <span
              id="before-te2"
              className="absolute top-0 left-0.5 w-full h-full"
              style={{
                textShadow: "-2px 0 #ff00c1",
                clipPath: "rect(44px, 450px, 56px, 0)",
              }}
              aria-hidden="true"
            >
              {" "}
              #Ideate_Innovate_Incubate_Your_Dreams.
            </span>
            {/* glitch::before */}
            #Ideate_Innovate_Incubate_Your_Dreams.
            <span
              id="after-te2"
              className="absolute top-0 -left-0.5 w-full h-full"
              style={{ textShadow: "-2px 0 #00fff9, 2px 2px #ff00c1" }}
              aria-hidden="true"
            >
              {" "}
              #Ideate_Innovate_Incubate_Your_Dreams.
            </span>
            {/* glitch::after */}
          </h1>
          {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
        </marquee>
      ) : (
        <h1
          ref={textContainer}
          id="glitch-te2"
          className="relative text-[#f0f0f0] text-5xl font-bold tracking-widest mt-6 mb-10"
          data-text="glitch"
        >
          <span
            id="before-te2"
            className="absolute top-0 left-0.5 w-full h-full"
            style={{
              textShadow: "-2px 0 #ff00c1",
              clipPath: "rect(44px, 450px, 56px, 0)",
            }}
            aria-hidden="true"
          >
            {" "}
            #Ideate_Innovate_Incubate_Your_Dreams.
          </span>
          {/* glitch::before */}
          #Ideate_Innovate_Incubate_Your_Dreams.
          <span
            id="after-te2"
            className="absolute top-0 -left-0.5 w-full h-full"
            style={{ textShadow: "-2px 0 #00fff9, 2px 2px #ff00c1" }}
            aria-hidden="true"
          >
            {" "}
            #Ideate_Innovate_Incubate_Your_Dreams.
          </span>
          {/* glitch::after */}
        </h1>
      )}
      <p className="m-6 justify-evenly">
        AdiShankara Hackathon is a deep programmatic model developed by Adi
        Shankara Institute of Engineering and Technology, Kalady, Kerala (ASIET)
        to bring new generation entrepreneurs into the tech ecosystem. It's a
        24hrs Hackathon event which consists of three major parallel events like
        Ideathon, Productathon and Gameathon for aspiring student entrepreneurs
        across the nation.
      </p>
    </div>
  );
};

export default Tagline;
