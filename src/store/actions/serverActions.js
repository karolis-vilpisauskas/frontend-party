import { GET_SERVERS, FILTER_BY_NAME, FILTER_BY_DIST } from "./types";
import axios from "axios";

export const getServers = () => dispatch => {
  axios
    .get("/servers")
    .then(res => {
      dispatch({ type: GET_SERVERS, servers: res.data });
    })
    .catch(error => {
      console.log(error);
    });
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
