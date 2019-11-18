import React from "react";
import "./Error.scss";

const Error = ({message}) => {
  return <div className={message ? "error is-active" : "error"}>{message}</div>;
};

export default Error;
