import React from "react";
import "./ServerItem.scss";

const ServerListItem = ({ server }) => {
  return (
    <div className="server-item">
      <span className="server-text">{server.name}</span>
      <span className="server-text">{`${server.distance} km`}</span>
    </div>
  );
};

export default ServerListItem;
