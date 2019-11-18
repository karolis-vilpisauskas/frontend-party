import React from "react";
import PropTypes from "prop-types";
import "./LoginForm.scss";

const LoginForm = ({onSubmit, children}) => {
  return (
    <form data-testid="form" id="login-form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.array
}
