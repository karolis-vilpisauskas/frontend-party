import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Login from "./views/Login";
import Servers from "./views/Servers";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/servers" component={Servers} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
