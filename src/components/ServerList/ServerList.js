import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServers } from "../../store/actions/serverActions";
import "./ServerList.scss";

import ServerListHeader from "./ServerListHeader";
import ServerListItem from "./ServerListItem";

const ServerList = () => {
  const dispatch = useDispatch();
  const servers = useSelector(state => state.server.items);

  useEffect(() => {
    dispatch(getServers());
  }, [dispatch]);

  const serverItems = servers.map((server, index) => {
    return <ServerListItem server={server} key={index} />;
  });

  return (
    <div className="server-list-container">
      <ServerListHeader />
      <ul className="server-list">{serverItems}</ul>
    </div>
  );
};

export default ServerList;
