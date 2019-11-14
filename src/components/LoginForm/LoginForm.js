import React from "react";
import "./LoginForm.scss";
import Input from "./Input";
import LoginButton from "./LoginButton";
import lock from "../../assets/ico-lock.svg";
import user from "../../assets/ico-username.svg";

const LoginForm = () => {
  return (
    <form id="login-form">
      <Input
        type="text"
        action=""
        name="username"
        placeholder="Username"
        value=""
        icon={user}
      />
      <Input
        type="password"
        action=""
        name="password"
        placeholder="Password"
        value=""
        icon={lock}
      />
      <LoginButton />
    </form>
  );
};

export default LoginForm;
