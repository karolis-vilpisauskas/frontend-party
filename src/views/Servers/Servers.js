import React from "react";

import Header from "../../components/Header";
import ServerList from "../../components/ServerList";

const Servers = () => {
  return (
    <div className="server-container">
      <Header />
      <ServerList />
    </div>
  );
};

export default Servers;
