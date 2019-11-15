import React from "react";
import "./Input.scss";

const Input = ({ type, changeAction, name, placeholder, value, icon }) => {
  const handleChange = e => {
    changeAction(e);
  };

  return (
    <div className="input-container">
      <img src={icon} alt="icon" className="input-icon" />
      <input
        onChange={handleChange}
        className="input-field"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
