import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/actions/authActions";

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
      <button onClick={dispatchLogin}>Login</button>
      <button onClick={dispatchLogout}>Logout</button>
    </div>
  );
};

export default Login;
