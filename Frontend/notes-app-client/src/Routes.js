import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import Logout from "./containers/Logout";
import FichaTecnica from "./containers/FichaTecnica";
import Menu from "./containers/Managing/Menu";
import Add from "./containers/Managing/Add";
import Remove from "./containers/Managing/Remove";
import Consultar from "./containers/Managing/Consultar";
import Edit from "./containers/Managing/Edit";

export default () =>
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/login" exact component={Login} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/logout" exact component={Logout} />
    <Route path="/fichatecnica" exact component={FichaTecnica} />
    <Route path="/menu" exact component={Menu} />
    <Route path="/add" exact component={Add} />
    <Route path="/remove" exact component={Remove} />
    <Route path="/consultar" exact component={Consultar} />
    <Route path="/edit" exact component={Edit} />
  </Switch>;
