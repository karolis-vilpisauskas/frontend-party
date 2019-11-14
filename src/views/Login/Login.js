import React from "react";
// import { useDispatch } from "react-redux";
// import { login, logout } from "../../store/actions/authActions";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  // const dispatch = useDispatch();

  // const dispatchLogin = () => {
  //   dispatch(login("tesonet", "partyanimal"));
  // };

  // const dispatchLogout = () => {
  //   dispatch(logout);
  // };

  return (
    <div>
      <h1>Login page</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
