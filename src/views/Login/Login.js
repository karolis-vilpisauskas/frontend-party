import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Login.scss";

import bgImage from "../../assets/wave.png";
import LogoWhite from "../../components/LogoWhite";
import LoginForm from "../../components/LoginForm";

import Error from "../../components/Error";

const Login = () => {
  const auth = useSelector(state => state.auth);

  if (auth.isLoggedIn) {
    return <Redirect push to="/servers" />;
  }

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Error />
      <LogoWhite />
      <LoginForm />
    </div>
  );
};

export default Login;
