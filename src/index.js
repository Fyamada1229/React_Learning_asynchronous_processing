import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import New from "./page/New";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/index";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/new" component={New} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
