import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class HomePage extends Component {
	render() {
		return (
			<div className="Home-grid ">
				<h1>Bem Vindo!</h1>
                <img
                    src="http://www.cr.estt.ipt.pt/labs/lcr_C_2a.jpg"
                    alt="logo"
                    className="logoImg"
                />

			</div>
		);
	}
}
export default HomePage;
