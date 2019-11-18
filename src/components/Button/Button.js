import React from "react";
import "./Button.scss";

const Button = ({ onClick, children, styleClass, label, ...props }) => {
  return (
    <button
      {...props}
      className={`btn ${styleClass}`}
      onClick={onClick}
    >
      {children}
      <span className="btn-label">{label}</span>
    </button>
  );
};

export default Button;
