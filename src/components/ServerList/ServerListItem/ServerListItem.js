import React from "react";
import "./ServerListItem.scss";

const ServerListItem = ({ server }) => {
  return (
    <div className="server-list-item">
      <span className="server-item-text">{server.name}</span>
      <span className="server-item-text">{`${server.distance} km`}</span>
    </div>
  );
};

export default ServerListItem;
