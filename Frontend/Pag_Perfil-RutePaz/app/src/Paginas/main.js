/**
 * Criacao de todas as Rotas
 */
import React from "react";
import PP from "./PP";
import Projectos from "./Projectos";
import FichaTecnicos from "./FichaTecnicos";
import HomePage from "./HomePage";

import { Switch, Route } from "react-router-dom";

const Main = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path="/Projectos" component={Projectos} />
		<Route path="/TesteSolub" component={TesteSolub} />
		<Route path="/FichaTecnicos" component={FichaTecnicos} />
		<Route path="/PP" component={PP} />
	</Switch>
);
export default Main;
