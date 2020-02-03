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

import { DragDropContext } from "react-beautiful-dnd";

const onDragEnd = result => {};
const App = () => {
  return (
    <DragDropContext onDragEnd={this.onDragEnd}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </DragDropContext>
  );
};
if (localStorage.getItem("user")) {
  store.dispatch(me());
  store.dispatch(setWebsite());
}

ReactDOM.render(<App />, document.getElementById("root"));
