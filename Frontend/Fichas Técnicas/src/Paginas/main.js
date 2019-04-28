
import React from "react";

import CondicoesAmbientais from "./CondicoesAmbientais";
import EstadoConservacao from "./EstadoConservacao";
import Documentacao from "./Documentacao";


import { Switch, Route } from "react-router-dom";

const Main = () => (
	<Switch>

		<Route exact path="/CondicoesAmbientais" component={CondicoesAmbientais} />
		<Route exact path="/EstadoConservacao" component={EstadoConservacao} />
		<Route exact path="/Documentacao" component={Documentacao} />
     
	</Switch>
);
export default Main;
