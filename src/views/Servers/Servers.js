import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { unauthorized } from "../../store/actions/authActions";

import Header from "../../components/Header";
import ServerList from "../../components/ServerList";

const Servers = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    dispatch(unauthorized);
    return <Redirect to="/" />;
  }

  return (
    <div className="server-container">
      <Header />
      <ServerList />
    </div>
  );
};

export default Servers;
