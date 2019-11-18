import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Input.scss";

const Input = ({ onChange, icon, error, ...rest }) => {
  const handleChange = e => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div data-testid="input" className="input-container">
      {icon ? <img src={icon} alt="icon" className="input-icon" /> : null}
      <input onChange={handleChange} className="input-field" {...rest} />
      <FontAwesomeIcon
        icon={error ? faTimes : faCheck}
        className={
          error ? "validation-icon is-error" : "validation-icon is-success"
        }
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  onChange: PropTypes.func,
  icon: PropTypes.string,
  error: PropTypes.bool,
  rest: PropTypes.array
};
