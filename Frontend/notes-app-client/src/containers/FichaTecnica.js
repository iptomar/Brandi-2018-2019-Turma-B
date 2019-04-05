import React, { Component } from "react";
import "./FichaTecnica.css";
import axios from 'axios';

export default class FichaTecnica extends Component {
	constructor(props) {
	    super(props);

	    this.state = { 
				fichaTecId:(window.location.pathname).split("/")[2],
			};
	  }
	  
deleteFt = event => {
	event.preventDefault();

	//const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/objeto/'+ this.state.fichaTecId +'/removeFT')
	.then((response) => {
		window.location.reload();
	})
	
}

addFt = event => {
	this.props.history.push("/adicionar")
}

editarFT = event => {
	this.props.history.push("/adicionar")
}
	
componentDidMount(){
	const FtId = (window.location.pathname).split("/")[2];

	//const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/objeto/'+ FtId +'/consultarFT')
	.then((response) => {
		console.log(response.status)
		return response.data[0]
	})
	.then(data => {
		let btn1 = document.createElement("button");
		btn1.innerHTML = "Eliminar";
		btn1.onclick = this.deleteFt;
		document.getElementById("main").appendChild(btn1);

		let btn2 = document.createElement("button");
		btn2.innerHTML = "Editar";
		btn2.onclick = this.editarFT;
		document.getElementById("main").appendChild(btn2);

		document.getElementById("1").innerHTML = data.CEARC;
		document.getElementById("2").innerHTML = data.LCRM;
		document.getElementById("3").innerHTML = data.dataAberturaCEARC;
		document.getElementById("4").innerHTML = data.dataAberturaLCRM;
		document.getElementById("5").innerHTML = data.dataEntradaCEARC;
		document.getElementById("6").innerHTML = data.dataEntradaLCRM;
		document.getElementById("7").innerHTML = data.designacao;
		document.getElementById("8").innerHTML = data.funcao;
		document.getElementById("9").innerHTML = data.nome;
	})
	.catch(err => {
		let btn = document.createElement("button");
		btn.innerHTML = "adicionar";
		btn.onclick = this.addFt;
		document.getElementById("main").appendChild(btn);
	});;
}
	render() {
    return (
			<div id="main">
				<span id = "1"></span><br/>
				<span id = "2"></span><br/>
				<span id = "3"></span><br/>
				<span id = "4"></span><br/>
				<span id = "5"></span><br/>
				<span id = "6"></span><br/>
				<span id = "7"></span><br/>
				<span id = "8"></span><br/>
				<span id = "9"></span><br/>
			</div>
		);
	}
}
