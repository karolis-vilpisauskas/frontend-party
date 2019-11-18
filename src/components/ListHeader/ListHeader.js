import React from "react";
import PropTypes from "prop-types";
import "./ListHeader.scss";

const ListHeader = ({ children }) => {
  return <div data-testid="list-header" className="list-header">{children}</div>;
};

export default ListHeader;

ListHeader.propTypes = {
  children: PropTypes.array
};
