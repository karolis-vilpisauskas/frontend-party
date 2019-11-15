import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/authActions";
import "./LoginForm.scss";
import Input from "./Input";
import LoginButton from "./LoginButton";
import lock from "../../assets/ico-lock.svg";
import user from "../../assets/ico-username.svg";

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  const [creds, setCreds] = useState({ username: "", password: "" });

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login(creds));
  };

  return (
    <form id="login-form" onSubmit={handleSubmit}>
      <Input
        type="text"
        changeAction={handleChange}
        name="username"
        placeholder="Username"
        value={creds.username}
        icon={user}
      />
      <Input
        type="password"
        changeAction={handleChange}
        name="password"
        placeholder="Password"
        value={creds.password}
        icon={lock}
      />
      <LoginButton />
      <div className={error ? "error is-active" : "error"}>{error}</div>
    </form>
  );
};

export default LoginForm;
