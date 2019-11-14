import { LOGIN, LOGOUT } from "./types";
import axios from "axios";

export const login = creds => dispatch => {
  axios
    .post("/tokens", creds)
    .then(res => {
      dispatch({ type: LOGIN, res_token: res.data.token });
    })
    .catch(error => {
      console.log(error);
    });
};

export const logout = dispatch => {
  dispatch({ type: LOGOUT });
};
