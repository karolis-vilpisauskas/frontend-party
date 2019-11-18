import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = ({children}) => {
  return (
    <div className="header" data-testid="header">
      {children}
    </div>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.array
}
