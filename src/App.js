import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <Router>
      <Switch>{routes}</Switch>
    </Router>
  );
};

export default App;
