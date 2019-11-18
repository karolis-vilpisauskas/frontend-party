import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

import ViewContainer from "./views/ViewContainer";
import Spinner from "./components/Spinner";

const App = () => {
  return (
    <BrowserRouter>
      <Spinner />
      <ViewContainer />
    </BrowserRouter>
  );
};

export default App;
