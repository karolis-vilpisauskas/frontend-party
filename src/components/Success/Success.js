import React from "react";
import "./Success.scss";

const Success = ({message}) => {
  return (
    <div className={message ? "success is-active" : "success"}>{message}</div>
  );
};

export default Success;
