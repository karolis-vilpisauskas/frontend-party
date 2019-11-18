import React from "react";
import { useSelector } from "react-redux";
import "./Success.scss";

const Success = () => {
  const success = useSelector(state => state.auth.success);

  return (
    <div className={success ? "success is-active" : "success"}>{success}</div>
  );
};

export default Success;
