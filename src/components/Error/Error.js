import React from "react";
import PropTypes from "prop-types";
import "./Error.scss";

const Error = ({ message }) => {
  return <div className={message ? "error is-active" : "error"}>{message}</div>;
};

export default Error;

Error.propTypes = {
  message: PropTypes.string
};
