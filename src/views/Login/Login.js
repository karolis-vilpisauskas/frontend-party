import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/authActions";
import "./Login.scss";
import bgImage from "../../assets/wave.png";
import LogoWhite from "../../components/LogoWhite";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  const dispatch = useDispatch();

  const dispatchLogin = () => {
    dispatch(login("tesonet", "partyanimal"));
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <LogoWhite />
      <LoginForm submitAction={dispatchLogin} />
    </div>
  );
};

export default Login;
