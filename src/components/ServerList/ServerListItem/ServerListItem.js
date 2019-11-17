import React from "react";
import "./ServerListItem.scss";

const ServerListItem = server => {
  return (
    <li className="server-list-item">
      <span className="server-item-text">{server.server.name}</span>
      <span className="server-item-text">{`${server.server.distance} km`}</span>
    </li>
  );
};

export default ServerListItem;
