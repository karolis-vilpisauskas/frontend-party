import {
  GET_SERVERS,
  FILTER_BY_NAME,
  FILTER_BY_DIST,
  TOGGLE_LOADING_SERVERS
} from "../actions/types";
import sort from "fast-sort";

const initialState = {
  items: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVERS:
      return {
        ...state,
        items: sort(action.servers).asc("name")
      };
    case FILTER_BY_NAME:
      const newArrNames = state.items.slice();
      return {
        ...state,
        items: action.isAsc
          ? sort(newArrNames).desc("name")
          : sort(newArrNames).asc("name")
      };
    case FILTER_BY_DIST:
      const newArrDist = state.items.slice();
      return {
        ...state,
        items: action.isAsc
          ? sort(newArrDist).desc("distance")
          : sort(newArrDist).asc("distance")
      };
    case TOGGLE_LOADING_SERVERS:
      return {
        ...state,
        loading: !state.loading
      };
    default:
      return state;
  }
};
