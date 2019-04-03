import React, { Component } from "react";
import "./FichaTecnica.css";
import axios from 'axios';

export default class FichaTecnica extends Component {
	constructor(props) {
	    super(props);

	    this.state ={ 
				isLoading: true,
				sOpen: false,
				objetos:[],
				imagens:[]
			};
  	}

toggle() {
	this.setState({
				isOpen: !this.state.isOpen
	});
}
	
componentDidMount(){
	const FtId = (window.location.pathname).split("/")[2];

	//const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(/*proxyurl + 'http://brandi.ipt.pt/*/'api/objeto/'+ FtId +'/consultarFT')
	.then((response) => {
		return response.data[0]
	})
	.then(data => {
		console.log(data)
		document.getElementById("1").innerHTML = data.CEARC;
		document.getElementById("2").innerHTML = data.LCRM;
		document.getElementById("3").innerHTML = data.dataAberturaCEARC;
		document.getElementById("4").innerHTML = data.dataAberturaLCRM;
		document.getElementById("5").innerHTML = data.dataEntradaCEARC;
		document.getElementById("6").innerHTML = data.dataEntradaLCRM;
		document.getElementById("7").innerHTML = data.designacao;
		document.getElementById("8").innerHTML = data.funcao;
		document.getElementById("9").innerHTML = data.nome;
	});
}
	render() {
    return (
			<div>
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
