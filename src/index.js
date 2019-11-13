import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import store from "./store";
import App from "./App";

axios.defaults.baseURL = "http://playground.tesonet.lt/v1";
axios.defaults.headers.common["Content-Type"] = "application/json";

// Renders
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
