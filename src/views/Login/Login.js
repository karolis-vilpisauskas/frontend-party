import React from "react";
import "./Login.scss";
import bgImage from "../../assets/wave.png";
import LogoWhite from "../../components/LogoWhite";
import LoginForm from "../../components/LoginForm";

const Login = () => {
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
