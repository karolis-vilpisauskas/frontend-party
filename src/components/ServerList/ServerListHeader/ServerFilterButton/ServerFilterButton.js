import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./ServerFilterButton.scss";

const ServerFilterButton = ({filterAction, value, isAsc, label}) => {
  return (
    <button
      className="server-header-filter"
      type="button"
      onClick={filterAction}
      value={value}
    >
      {label}
      <FontAwesomeIcon
        icon={faChevronDown}
        flip={isAsc ? "horizontal" : "both"}
        className={
            isAsc !== null ? "filter-arrow is-active" : "filter-arrow"
        }
      />
    </button>
  );
};

export default ServerFilterButton;
