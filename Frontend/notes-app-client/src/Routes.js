import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import Logout from "./containers/Logout";
import Pecas from "./containers/Pecas";
import Menu from "./containers/Managing/Menu";
import Add from "./containers/Managing/Add";
import FichaTecnica from "./containers/FichaTecnica";
import Register from "./containers/Register";
import Tecnicos from "./containers/Tecnicos";
import AnalisesSolvente from "./containers/AnalisesSolvente";
import DetalhesAnalises from "./containers/DetalhesAnalises";
import AddAnalise from "./containers/AddAnalise";
import FolhaDeObra from "./containers/FolhaDeObra";
import Obras from "./containers/Obras";
import AddTesteAnalise from "./containers/AddTesteAnalise"

export default () =>
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/login" exact component={Login} />
    <Route path="/profile" component={Profile}/>
    <Route path="/logout" exact component={Logout} />
    <Route path="/pecas" component={Pecas} />
    <Route path="/obras" exact component={Obras} />
    <Route path="/menu" exact component={Menu} />
    <Route path="/adicionar" exact component={Add} />
    <Route path="/editar" component={Add} />
    <Route path="/fichatecnica" component={FichaTecnica} />
    <Route path="/register" component={Register} />
    <Route path="/tecnicos" component={Tecnicos} />
    <Route path="/analisesSolvente" component={AnalisesSolvente} />
    <Route path="/detalhesAnalises" component={DetalhesAnalises} />
    <Route path="/addAnalise" component={AddAnalise} />
    <Route path="/folhadeobra" component={FolhaDeObra} />
    <Route path="/addTesteAnalise" component={AddTesteAnalise} />
  </Switch>;
