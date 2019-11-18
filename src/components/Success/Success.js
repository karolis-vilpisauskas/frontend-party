import React from "react";
import PropTypes from "prop-types";
import "./Success.scss";

const Success = ({ message }) => {
  return (
    <div className={message ? "success is-active" : "success"}>{message}</div>
  );
};

export default Success;

Success.propTypes = {
  message: PropTypes.string
};
