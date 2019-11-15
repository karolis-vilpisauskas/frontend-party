import { LOGIN, LOGOUT, SET_ERRORS } from "../actions/types";

const initialState = {
  token: "",
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        error: "",
        token: action.res_token
      };
    case SET_ERRORS:
      return {
        ...state,
        error:
          "Uh oh! Those credentials don't seem to match anyone we know about."
      };
    case LOGOUT:
      return {
        ...state,
        token: ""
      };
    default:
      return state;
  }
};
