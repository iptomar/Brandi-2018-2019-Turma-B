import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import Logout from "./containers/Logout";
import Objetos from "./containers/Objetos";
import Menu from "./containers/Managing/Menu";
import Add from "./containers/Managing/Add";
import FichaTecnica from "./containers/FichaTecnica";
import Register from "./containers/Register";

export default () =>
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/login" exact component={Login} />
    <Route path="/profile" component={Profile}/>
    <Route path="/logout" exact component={Logout} />
    <Route path="/objetos" exact component={Objetos} />
    <Route path="/menu" exact component={Menu} />
    <Route path="/adicionar" exact component={Add} />
    <Route path="/fichatecnica" component={FichaTecnica} />
    <Route path="/register" component={Register} />
  </Switch>;
