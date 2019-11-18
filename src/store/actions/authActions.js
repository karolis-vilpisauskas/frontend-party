import {
  LOGIN,
  LOGOUT,
  SET_ERRORS,
  SET_SUCCESS,
  TOGGLE_LOADING_AUTH
} from "./types";
import axios from "axios";

export const login = creds => dispatch => {
  const computed = {
    ...creds
  };

  axios
    .post("/tokens", computed)
    .then(dispatch({ type: TOGGLE_LOADING_AUTH }))
    .then(res => {
      dispatch({ type: LOGIN, res_token: res.data.token });
      dispatch({ type: SET_SUCCESS, message: "Welcome back!" });
      dispatch({ type: TOGGLE_LOADING_AUTH });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        message:
          "Uh oh! Those credentials don't seem to match anyone we know about"
      });
    });
};

export const logout = dispatch => {
  dispatch({ type: LOGOUT });
  dispatch({ type: SET_SUCCESS, message: "" });
};

export const setError = message => dispatch => {
  dispatch({ type: SET_ERRORS, message });
};

export const setSuccess = message => dispatch => {
  dispatch({ type: SET_SUCCESS, message });
};
