import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

import ViewContainer from "./views/ViewContainer";

const App = () => {
  return (
    <BrowserRouter>
      <ViewContainer />
    </BrowserRouter>
  );
};

export default App;
