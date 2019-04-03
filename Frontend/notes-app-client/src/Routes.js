import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import Logout from "./containers/Logout";
import Objetos from "./containers/Objetos";
import Menu from "./containers/Managing/Menu";
import Add from "./containers/Managing/Add";
import Remove from "./containers/Managing/Remove";
import Consultar from "./containers/Managing/Consultar";
import Edit from "./containers/Managing/Edit";
import FichaTecnica from "./containers/FichaTecnica";

export default () =>
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/login" exact component={Login} />
    <Route path="/profile" component={Profile}/>
    <Route path="/logout" exact component={Logout} />
    <Route path="/objetos" exact component={Objetos} />
    <Route path="/menu" exact component={Menu} />
    <Route path="/add" exact component={Add} />
    <Route path="/remove" exact component={Remove} />
    <Route path="/consultar" exact component={Consultar} />
    <Route path="/edit" exact component={Edit} />
    <Route path="/fichatecnica" component={FichaTecnica} />
  </Switch>;
