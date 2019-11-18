import React from "react";
import { useSelector } from "react-redux";
import "./Error.scss";

const Error = () => {
  const error = useSelector(state => state.auth.error);
  
  return <div className={error ? "error is-active" : "error"}>{error}</div>;
};

export default Error;
