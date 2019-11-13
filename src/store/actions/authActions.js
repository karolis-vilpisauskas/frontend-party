import { LOGIN, LOGOUT } from "./types";
import axios from "axios";

export const login = (username, password) => dispatch => {
  axios
    .post('/tokens', {
      username: username,
      password: password
    })
    .then(res => {
      dispatch({ type: LOGIN, res_token: res.data.token });
    });
};

export const logout = dispatch => {
  dispatch({ type: LOGOUT });
};
