import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page was not found</h2>
      <Link exact to="/">
        Login
      </Link>
    </div>
  );
};

export default NotFound;
