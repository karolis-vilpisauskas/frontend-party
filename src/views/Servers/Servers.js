import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import { setError } from "../../store/actions/authActions";

import Header from "../../components/Header";
import ServerList from "../../components/ServerList";

import Success from "../../components/Success";

const Servers = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect push to="/" />;
  }

  return (
    <div className="server-container">
      <Success />
      <Header />
      <ServerList />
    </div>
  );
};

export default Servers;
