import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "./stores";
import { Provider } from "react-redux";
import Feed from "./components/Feed";

const app = (
  <Provider store={store.configure(null)}>
    <Feed />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
