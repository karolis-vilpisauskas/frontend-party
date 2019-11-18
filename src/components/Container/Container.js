import React from "react";
import PropTypes from "prop-types";
import "./Container.scss";

const Container = ({ children }) => {
  return <div className="container" data-testid="container">{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.object
};
