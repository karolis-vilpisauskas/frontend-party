import { LOGIN, LOGOUT } from "./types";
// import axios from "axios";

export const login = dispatch => {
  // axios.get("/photos?page=1&per_page=12").then(res => {
  //   dispatch({ type: LOGIN, payload: res.data });
  // });
  dispatch({ type: LOGIN, payload: "random" });
};

export const logout = dispatch => {
  dispatch({ type: LOGOUT });
};
