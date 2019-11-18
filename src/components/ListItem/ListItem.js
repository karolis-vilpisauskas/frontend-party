import React from "react";
import PropTypes from "prop-types";
import "./ListItem.scss";

const ListItem = ({ server }) => {
  return (
    <div className="list-item" data-testid="list-item">
      <span className="item-text">{server.name}</span>
      <span className="item-text">{`${server.distance} km`}</span>
    </div>
  );
};

export default ListItem;

ListItem.propTypes = {
  server: PropTypes.object
}
