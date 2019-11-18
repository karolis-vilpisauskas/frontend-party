import React from "react";
import PropTypes from "prop-types";
import "./Form.scss";

const Form = ({onSubmit, children, id}) => {
  return (
    <form data-testid="form" id={id} className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.array
}
