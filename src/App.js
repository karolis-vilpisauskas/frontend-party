import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import "./App.scss";

import Login from "./views/Login";
import Servers from "./views/Servers";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={Login} />
        <Route path="/servers" component={Servers} />
        <Route path="*" component={NotFound} />
      </AnimatedSwitch>
    </Router>
  );
};

export default App;
