import { LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  token: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.res_token
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
