import React from "react";
import PropTypes from "prop-types";
import "./List.scss";

const List = ({ children }) => {
  return <ul className="list" data-testid="list">{children}</ul>;
};

export default List;

List.propTypes = {
  children: PropTypes.array
};
