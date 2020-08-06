import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Details from "../Pages/Details";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/details/:videoId" component={Details} />
  </Switch>
);

export default Routes;
