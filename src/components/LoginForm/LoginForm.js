import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/authActions";
import "./LoginForm.scss";

import Input from "./Input";
import LoginButton from "./LoginButton";
import lock from "../../assets/ico-lock.svg";
import user from "../../assets/ico-username.svg";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: false, password: false });

  const regex = /^$|\s+/;

  const handleChange = (name, value) => {
    if (!value.match(regex)) {
      setErrors({
        ...errors,
        [name]: false
      });
      setCreds({
        ...creds,
        [name]: value
      });
    } else {
      setErrors({
        ...errors,
        [name]: true
      });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login(creds));
  };

  return (
    <form id="login-form" onSubmit={handleSubmit}>
      <Input
        onChangeAction={handleChange}
        icon={user}
        error={errors.username}
        name="username"
        placeholder="Username"
        type="text"
        required={true}
        autoFocus={true}
      />
      <Input
        onChangeAction={handleChange}
        icon={lock}
        error={errors.password}
        type="password"
        name="password"
        placeholder="Password"
        required={true}
      />
      <LoginButton
        disabled={
          errors.password !== true && errors.username !== true ? false : true
        }
      />
    </form>
  );
};

export default LoginForm;
