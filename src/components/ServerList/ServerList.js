import React from "react";
import PropTypes from "prop-types";
import "./ServerList.scss";

const ServerList = ({ children }) => {
  return <ul className="server-list" data-testid="server-list">{children}</ul>;
};

export default ServerList;

ServerList.propTypes = {
  children: PropTypes.object
};
