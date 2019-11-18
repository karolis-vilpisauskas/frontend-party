import React from "react";
import "./Column.scss";

const Column = ({ alignment, children }) => {
  return <div className={`column ${alignment}`}>{children}</div>;
};

export default Column;
