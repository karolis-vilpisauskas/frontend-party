import React from "react";
import { Route } from "react-router-dom";

// Views
import Login from "./views/Login";
import Servers from "./views/Servers";
import NotFound from "./views/NotFound";

// Route data, any new routes go here
const data = [
  {
    id: "login",
    path: "/",
    component: Login
  },
  {
    id: "servers",
    path: "/servers",
    component: Servers
  },
  {
    id: "404",
    path: null,
    component: NotFound
  }
];

const routes = data.map(route => {
  return (
    <Route exact path={route.path} component={route.component} key={route.id} />
  );
});

export default routes;
