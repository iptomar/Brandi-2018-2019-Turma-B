
import React from "react";

import CondicoesAmbientais from "./CondicoesAmbientais";


import { Switch, Route } from "react-router-dom";

const Main = () => (
	<Switch>

		<Route exact path="/CondicoesAmbientais" component={CondicoesAmbientais} />
     
	</Switch>
);
export default Main;
