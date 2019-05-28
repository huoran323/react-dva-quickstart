import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Products from "./routes/Products";
import CounterPage from "./routes/CounterPage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" component={Products} />
        <Route path="/counter" component={CounterPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
