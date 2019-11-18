import React from "react";
import PropTypes from 'prop-types';
import "./Button.scss";

const Button = ({ onClick, children, styleClass, label, ...props }) => {
  return (
    <button
      {...props}
      className={`btn ${styleClass}`}
      onClick={onClick}
      data-testid="btn"
    >
      {children}
      <span className="btn-label" data-testid="label">{label}</span>
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.object,
  styleClass: PropTypes.string,
  label: PropTypes.string,
  props: PropTypes.array
}
