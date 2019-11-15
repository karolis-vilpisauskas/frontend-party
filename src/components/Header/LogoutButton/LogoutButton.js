import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/actions/authActions";
import { ReactComponent as LogoutIcon } from "../../../assets/ico-logout.svg";
import "./LogoutButton.scss";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout);
  };

  return (
    <button type="button" className="logout-btn" onClick={handleClick}>
      <LogoutIcon />
      <span className="logout-text">Logout</span>
    </button>
  );
};

export default LogoutButton;
