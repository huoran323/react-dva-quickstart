import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Products from "./routes/Products";
import CounterPage from "./routes/CounterPage";
import UserPage from "./routes/UserPage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" component={Products} />
        <Route path="/counter" component={CounterPage} />
        <Route path="/user" component={UserPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
