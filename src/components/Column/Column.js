import React from "react";
import PropTypes from "prop-types";
import "./Column.scss";

const Column = ({ alignment, children }) => {
  return <div className={`column ${alignment}`} data-testid="column-container">{children}</div>;
};

export default Column;

Column.propTypes = {
  alignment: PropTypes.string,
  children: PropTypes.array
};
