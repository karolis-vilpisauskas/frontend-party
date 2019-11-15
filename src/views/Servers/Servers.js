import React from "react";
// import { useDispatch } from "react-redux";
// import { getServers, filterServers } from '../../store/actions/serverActions';

import Header from "../../components/Header";
import ServerList from "../../components/ServerList";

const Servers = () => {
  // const dispatch = useDispatch() ;

  // const dispatchServers = () => {
  //   dispatch(getServers());
  // };

  // const dispatchFilter = () => {
  //   dispatch(filterServers("distance", false));
  // };

  return (
    <div className="server-container">
      <Header />
      <ServerList />
    </div>
  );
};

export default Servers;
