import { LOGIN, LOGOUT } from "./types";
import axios from "axios";

export const login = (username, password) => dispatch => {
  axios
    .post(`/tokens`, {
      username: username,
      password: password
    })
    .then(res => {
      axios.defaults.headers.common["Authorization"] = res.data.token;
      dispatch({ type: LOGIN, res_token: res.data.token });
    });
};

export const logout = dispatch => {
  axios.defaults.headers.common["Authorization"] = "";
  dispatch({ type: LOGOUT });
};
