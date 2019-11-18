import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

import Views from "views/Views";

const App = () => {
  return (
    <BrowserRouter>
      <Views />
    </BrowserRouter>
  );
};

export default App;
