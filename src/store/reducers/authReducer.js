import { LOGIN, LOGOUT } from "../actions/types";

const sessionToken = sessionStorage.getItem("token") || "";

const initialState = {
  token: sessionToken
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      sessionStorage.setItem("token", action.res_token);
      return {
        ...state,
        token: action.res_token
      };
    case LOGOUT:
      sessionStorage.removeItem("token");
      return {
        ...state,
        token: ""
      };
    default:
      return state;
  }
};
