import React from "react";
import "./LoginForm.scss";

const LoginForm = ({onSubmit, children}) => {
  return (
    <form id="login-form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default LoginForm;
