import { LOGIN, LOGOUT, SET_ERRORS, UNAUTHORIZED } from "./types";
import axios from "axios";

export const login = creds => dispatch => {
  
  const computed = {
    ...creds
  };

  axios
    .post("/tokens", computed)
    .then(res => {
      dispatch({ type: LOGIN, res_token: res.data.token });
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS });
    });
};

export const logout = dispatch => {
  dispatch({ type: LOGOUT });
};

export const unauthorized = dispatch => {
  dispatch({type: UNAUTHORIZED});
}
