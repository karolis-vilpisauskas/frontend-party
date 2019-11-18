import React from "react";
import "./Absolute.scss";

const Absolute = ({children, style}) => {
return <div className="absolute" style={style}>{children}</div>;
};

export default Absolute;
