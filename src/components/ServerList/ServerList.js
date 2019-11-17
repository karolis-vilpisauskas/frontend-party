import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getServers,
  filterByName,
  filterByDist
} from "../../store/actions/serverActions";
import "./ServerList.scss";

import ServerListHeader from "./ServerListHeader";
import ServerListItem from "./ServerListItem";

const ServerList = () => {
  const dispatch = useDispatch();
  const servers = useSelector(state => state.server.items);

  useEffect(() => {
    dispatch(getServers());
  }, [dispatch]);

  const dispatchFilterByName = isAsc => {
    dispatch(filterByName(isAsc));
  };

  const dispatchFilterByDist = isAsc => {
    dispatch(filterByDist(isAsc));
  };

  return (
    <div className="server-list-container">
      <ServerListHeader
        filterActionName={dispatchFilterByName}
        filterActionDist={dispatchFilterByDist}
      />
      <ul className="server-list">
        {servers.map((server, index) => {
          return <ServerListItem server={server} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default ServerList;
