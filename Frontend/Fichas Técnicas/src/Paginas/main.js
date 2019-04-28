
import React from "react";

import CondicoesAmbientais from "./CondicoesAmbientais";
import EstadoConservacao from "./EstadoConservacao";


import { Switch, Route } from "react-router-dom";

const Main = () => (
	<Switch>

		<Route exact path="/CondicoesAmbientais" component={CondicoesAmbientais} />
		<Route exact path="/EstadoConservacao" component={EstadoConservacao} />
     
	</Switch>
);
export default Main;
