import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Input.scss";

const Input = ({
  onChangeAction,
  icon,
  error,
  ...rest
}) => {
  const handleChange = e => {
    onChangeAction(e.target.name, e.target.value);
  };

  return (
    <div className="input-container">
      <img src={icon} alt="icon" className="input-icon" />
      <input
        onChange={handleChange}
        className="input-field"
        {...rest}
      />
      <FontAwesomeIcon
        icon={error ? faTimes : faCheck}
        className={error ? "validation-icon is-error" : "validation-icon is-success"}
      />
    </div>
  );
};

export default Input;
