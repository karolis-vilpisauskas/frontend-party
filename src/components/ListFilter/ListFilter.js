import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./ListFilter.scss";

const ListFilter = ({ handleFilter, value, isAsc, label }) => {
  return (
    <button
      data-testid="list-filter"
      className="list-filter"
      type="button"
      onClick={handleFilter}
      value={value}
    >
      {label}
      <FontAwesomeIcon
        icon={faChevronDown}
        flip={isAsc ? "horizontal" : "both"}
        className={isAsc !== null ? "filter-arrow is-active" : "filter-arrow"}
      />
    </button>
  );
};

export default ListFilter;

ListFilter.propTypes = {
  handleFilter: PropTypes.func,
  value: PropTypes.string,
  isAsc: PropTypes.bool,
  label: PropTypes.string
};
