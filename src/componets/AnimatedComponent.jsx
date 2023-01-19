import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedComponent = ({ once, animation, threshold, children }) => {
  const [ref, inView] = useInView({
    threshold: threshold ? threshold : 0,
    triggerOnce: once,
  });
  const [isAnimated, setIsAnimated] = useState(false);
  const [isAnimatedOut, setIsAnimatedOut] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`animate__animated ${!inView && "invisible"} ${
        isAnimated ? animation : ""
      } ${isAnimatedOut ? " animate__fadeOutLeft" : ""}`}
      onAnimationEnd={() => setIsAnimatedOut(false)}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
