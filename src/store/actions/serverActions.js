import { GET_SERVERS, FILTER_SERVERS } from "./types";
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

export const filterServers = (filter, increasing) => dispatch => {
  dispatch({ type: FILTER_SERVERS, filter, increasing });
};
