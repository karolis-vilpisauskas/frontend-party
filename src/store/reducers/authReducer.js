import {
  LOGIN,
  LOGOUT,
  SET_ERRORS,
  SET_SUCCESS,
  TOGGLE_LOADING_AUTH
} from "store/actions/types";

const initialState = {
  token: "",
  isLoggedIn: false,
  error: "",
  success: "",
  loading: false
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
        isLoggedIn: false,
        loading: false
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
        success: action.message,
        error: ""
      };
    case TOGGLE_LOADING_AUTH:
      return {
        ...state,
        loading: !state.loading
      };
    default:
      return state;
  }
};
