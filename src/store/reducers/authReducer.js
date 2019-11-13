import { LOGIN, LOGOUT } from "../actions/types";

const storage = sessionStorage.getItem("token") || '';

const initialState = {
  token: storage
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      sessionStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload
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
