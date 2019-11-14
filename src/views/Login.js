import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/actions/authActions";

import LoginContainer from '../components/login/LoginContainer';

const Login = () => {
  const dispatch = useDispatch();

  const dispatchLogin = () => {
    dispatch(login("tesonet", "partyanimal"));
  };

  const dispatchLogout = () => {
    dispatch(logout);
  };

  return (
    <div>
      <LoginContainer/>
    </div>
  );
};

export default Login;
