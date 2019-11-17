import { LOGIN, LOGOUT, SET_ERRORS, UNAUTHORIZED } from "../actions/types";

const initialState = {
  token: "",
  isLoggedIn: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        error: "",
        token: action.res_token,
        isLoggedIn: true
      };
    case SET_ERRORS:
      return {
        ...state,
        error:
          "Uh oh! Those credentials don't seem to match anyone we know about"
      };
    case LOGOUT:
      return {
        ...state,
        token: "",
        isLoggedIn: false
      };
    case UNAUTHORIZED:
      return {
        ...state,
        error: "You must login before accessing this page"
      };
    default:
      return state;
  }
};
