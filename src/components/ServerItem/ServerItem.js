import React from "react";
import PropTypes from "prop-types";
import "./ServerItem.scss";

const ServerItem = ({ server }) => {
  return (
    <div className="server-item">
      <span className="server-text">{server.name}</span>
      <span className="server-text">{`${server.distance} km`}</span>
    </div>
  );
};

export default ServerItem;

ServerItem.propTypes = {
  server: PropTypes.object
}
