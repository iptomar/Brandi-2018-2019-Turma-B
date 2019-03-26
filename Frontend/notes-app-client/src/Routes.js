import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import Logout from "./containers/Logout";
import FichaTecnica from "./containers/FichaTecnica";

export default () =>
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/login" exact component={Login} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/logout" exact component={Logout} />
    <Route path="/fichatecnica" exact component={FichaTecnica} />
  </Switch>;
