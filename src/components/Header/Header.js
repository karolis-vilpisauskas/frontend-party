import React from "react";
import "./Header.scss";

import LogoBlack from "./LogoBlack";
import LogoutButton from "./LogoutButton";

const Header = () => {
  return (
    <div className="header">
      <LogoBlack />
      <LogoutButton />
    </div>
  );
};

export default Header;
