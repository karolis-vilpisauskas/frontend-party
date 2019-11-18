import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "store/actions/authActions";

import bgImage from "assets/wave.png";
import lock from "assets/ico-lock.svg";
import user from "assets/ico-username.svg";

import Error from "components/Error";
import Success from "components/Success";
import Button from "components/Button";
import Input from "components/Input";
import Form from "components/Form";
import Logo from "components/Logo";
import Absolute from "components/Absolute";
import Column from "components/Column";

const regex = /^$|\s+/;

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: false, password: false });

  useEffect(() => {
    if (auth.isLoggedIn) {
      history.push("/servers");
    }
  }, [auth.isLoggedIn, history]);

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

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      await dispatch(login(creds));
    },
    [dispatch, creds]
  );

  return (
    <Absolute style={{ backgroundImage: `url(${bgImage})` }}>
      <Error message={auth.error} />
      <Success message={auth.success} />
      <Column alignment="h-center v-center">
        <Logo />
        <Form onSubmit={handleSubmit} id="login">
          <Input
            onChange={handleChange}
            icon={user}
            error={errors.username}
            name="username"
            placeholder="Username"
            type="text"
            required={true}
            autoFocus={true}
          />
          <Input
            onChange={handleChange}
            icon={lock}
            error={errors.password}
            type="password"
            name="password"
            placeholder="Password"
            required={true}
          />
          <Button
            disabled={
              errors.password !== true && errors.username !== true
                ? false
                : true
            }
            type="submit"
            styleClass="login"
            label="Log In"
          />
        </Form>
      </Column>
    </Absolute>
  );
};

export default Login;
