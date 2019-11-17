import React, { useState } from "react";
import "./ServerListHeader.scss";

import Button from "./ServerFilterButton";

const ServerListHeader = ({ filterActionName, filterActionDist }) => {
  const [isNameAsc, setIsNameAsc] = useState(true);
  const [isDistAsc, setIsDistAsc] = useState(null);

  const setNameFilter = () => {
    setIsDistAsc(null);
    setIsNameAsc(!isNameAsc);
    filterActionName(isNameAsc);
  };

  const setDistFilter = () => {
    setIsNameAsc(null);
    setIsDistAsc(!isDistAsc);
    filterActionDist(isDistAsc);
  };

  return (
    <div className="server-list-header">
      <Button filterAction={setNameFilter} value="name" isAsc={isNameAsc} label="SERVER" />
      <Button filterAction={setDistFilter} value="distance" isAsc={isDistAsc} label="DISTANCE" />
    </div>
  );
};

export default ServerListHeader;
