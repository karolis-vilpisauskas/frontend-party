import React from "react";
import "./Logo.scss";

import black from "assets/logo-black.png";
import white from "assets/logo-white.png";

const Logo = ({ isBlack }) => {
  return (
    <img
      className={`logo ${isBlack ? "black" : "white"}`}
      src={isBlack ? black : white}
      alt="logo"
    />
  );
};

export default Logo;
