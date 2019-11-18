import React from "react";
import PropTypes from 'prop-types';
import "./Absolute.scss";

const Absolute = ({children, style}) => {
return <div className="absolute" style={style}>{children}</div>;
};

export default Absolute;

Absolute.propTypes = {
    children: PropTypes.array,
    style: PropTypes.object
}
