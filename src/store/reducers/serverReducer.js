import { GET_SERVERS, FILTER_SERVERS } from "../actions/types";

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVERS:
      return {
        ...state,
        items: action.servers
      };
    case FILTER_SERVERS:
      action.increasing
        ? state.items.sort((a, b) =>
            a[action.filter] > b[action.filter] ? 1 : -1
          )
        : state.items.sort((a, b) =>
            a[action.filter] < b[action.filter] ? 1 : -1
          );
          
      return {
        ...state
      };
    default:
      return state;
  }
};
