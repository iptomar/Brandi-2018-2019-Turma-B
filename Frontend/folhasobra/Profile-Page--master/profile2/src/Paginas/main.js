/**
 * Criacao de todas as Rotas
 */
import React from "react";
import PP from "./PP";
import FolhaDeObra from "./FolhaDeObra";
import FichaTecnicos from "./FichaTecnicos";
import HomePage from "./HomePage";
import CriarProcesso from "./CriarProcesso";
import VerificarProcesso from "./VerificarProcesso";


import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/FolhaDeObra" component={FolhaDeObra} />
    <Route path="/FichaTecnicos" component={FichaTecnicos} />
    <Route path="/PP" component={PP} />
    <Route path="/CriarProcesso" component={CriarProcesso} />
    <Route path="/VerificarProcesso" component={VerificarProcesso} />

  </Switch>
);
export default Main;
