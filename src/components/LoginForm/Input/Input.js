import React from "react";
import "./Input.scss";

const Input = ({ type, action, name, placeholder, value, icon }) => {
  // const onChange = e => {
  //   action(e);
  // };

  return (
    <div className="input-container">
      <img src={icon} alt="icon" className="input-icon" />
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
