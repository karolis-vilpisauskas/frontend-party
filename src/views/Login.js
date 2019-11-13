import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/actions/authActions";
import { getServers, filterServers } from '../store/actions/serverActions';

const Login = () => {
  const dispatch = useDispatch();

  const dispatchLogin = () => {
    dispatch(login("tesonet", "partyanimal"));
  };

  const dispatchLogout = () => {
    dispatch(logout);
  };

  const dispatchServers = () => {
    dispatch(getServers());
  }

  const dispatchFilter = () => {
    dispatch(filterServers('distance', false));
  }

  return (
    <div>
      <button onClick={dispatchLogin}>Login</button>
      <button onClick={dispatchLogout}>Logout</button>
      <button onClick={dispatchServers}>Servers</button>
      <button onClick={dispatchFilter}>Filter</button>
    </div>
  );
};

export default Login;
