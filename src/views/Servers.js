import React from "react";
import { useDispatch } from "react-redux";
import { getServers, filterServers } from '../store/actions/serverActions';

const Servers = () => {
  const dispatch = useDispatch() ;

  const dispatchServers = () => {
    dispatch(getServers());
  };

  const dispatchFilter = () => {
    dispatch(filterServers("distance", false));
  };

  return (
    <div>
      <h1>Servers</h1>
    </div>
  );
};

export default Servers;
