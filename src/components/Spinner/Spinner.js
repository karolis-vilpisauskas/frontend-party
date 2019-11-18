import React from "react";
import { useSpring, animated } from "react-spring";
import "./Spinner.scss";
const Spinner = () => {
  const props = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1 });
      await next({ opacity: 0 });
    },
    from: { opacity: 0 }
  });

  return (
    <animated.div style={props} className="spinner-container">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </animated.div>
  );
};

export default Spinner;
