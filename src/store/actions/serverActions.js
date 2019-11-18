import {
  GET_SERVERS,
  FILTER_BY_NAME,
  FILTER_BY_DIST,
  TOGGLE_LOADING_SERVERS
} from "./types";
import axios from "axios";

export const getServers = () => dispatch => {
  axios
    .get("/servers")
    .then(dispatch({ type: TOGGLE_LOADING_SERVERS }))
    .then(res => {
      dispatch({ type: GET_SERVERS, servers: res.data });
      dispatch({ type: TOGGLE_LOADING_SERVERS })
    })
    .catch(error => {
      console.log(error);
    })
};

export const filterByName = isAsc => dispatch => {
  dispatch({
    type: FILTER_BY_NAME,
    isAsc
  });
};

export const filterByDist = isAsc => dispatch => {
  dispatch({
    type: FILTER_BY_DIST,
    isAsc
  });
};
