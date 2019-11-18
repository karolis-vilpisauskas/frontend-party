import React from "react";
import "./LoginButton.scss";

const LoginButton = ({...props}) => {
  return (
    <button className="login-btn" type="submit" {...props}>
      Log In
    </button>
  );
};

export default LoginButton;
