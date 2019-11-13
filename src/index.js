import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Servers from "./pages/Servers";
import NotFound from "./pages/NotFound";

// Routing
const routes = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/servers",
    component: Servers
  }
];

const computedRoutes = routes.map(route => {
  return <Route exact path={route.path} component={route.component} />;
});

const router = (
  <Router>
    <Switch>
      {computedRoutes}
      <Route component={NotFound} />
    </Switch>
  </Router>
);

// Renders
ReactDOM.render(router, document.getElementById("root"));
