import { LOGIN, LOGOUT, SET_ERRORS, SET_SUCCESS } from "../actions/types";

const initialState = {
  token: "",
  isLoggedIn: false,
  error: "",
  success: ""
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
    case LOGOUT:
      return {
        ...state,
        error: "",
        token: "",
        isLoggedIn: false
      };
    case SET_ERRORS:
      return {
        ...state,
        error: action.message,
        success: ""
      };
    case SET_SUCCESS:
      return {
        ...state,
        error: "",
        success: action.message
      };
    default:
      return state;
  }
};
