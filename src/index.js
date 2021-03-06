import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";
import * as serviceWorker from "serviceWorker";
import App from "./App";

axios.defaults.baseURL = "http://playground.tesonet.lt/v1";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.interceptors.request.use(function(config) {
  const token = store.getState().auth.token;
  config.headers.Authorization = token;
  return config;
});

// Renders
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
