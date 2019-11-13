import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/actions/authActions";

const Login = () => {
  const dispatch = useDispatch();

  const dispatchLogin = () => {
    dispatch(login);
  };

  const dispatchLogout = () => {
    dispatch(logout)
  }

  return (
    <div>
      <h1 onClick={dispatchLogin}>Login</h1>
      <h1 onClick={dispatchLogout}>Logout</h1>
    </div>
  );
};

export default Login;
