import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./store";
import { me } from "./store/actions/user";
import { setWebsite } from "./store/actions/websites";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";

import "./index.css";
import AppRouter from "./routers/AppRouter";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
if (localStorage.getItem("user")) {
  store.dispatch(me());
  store.dispatch(setWebsite());
}

ReactDOM.render(<App />, document.getElementById("root"));
