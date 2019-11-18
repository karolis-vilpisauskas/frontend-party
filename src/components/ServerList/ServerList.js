import React from "react";
import "./ServerList.scss";

const ServerList = ({children}) => {
  return (
    <ul className="server-list">
      {children}
    </ul>
  );
};

export default ServerList;
