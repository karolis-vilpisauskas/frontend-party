import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

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
  <Provider store={store}>
    <Router>
      <Switch>
        {computedRoutes}
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

// Renders
ReactDOM.render(router, document.getElementById("root"));
