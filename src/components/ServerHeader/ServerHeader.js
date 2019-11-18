import React from "react";
import PropTypes from "prop-types";
import "./ServerHeader.scss";

const ServerHeader = ({ children }) => {
  return <div className="server-list-header">{children}</div>;
};

export default ServerHeader;

ServerHeader.propTypes = {
  children: PropTypes.array
};
