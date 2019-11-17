import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Login.scss";

import bgImage from "../../assets/wave.png";
import LogoWhite from "../../components/LogoWhite";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Redirect to="/servers" />;
  }

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <LogoWhite />
      <LoginForm />
    </div>
  );
};

export default Login;
