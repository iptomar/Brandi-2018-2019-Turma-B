import React, { Component } from "react";
import "./FichaTecnica.css";
import axios from 'axios';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Table,
  Button} from 'reactstrap';
export default class FichaTecnica extends Component {
	constructor(props) {
	    super(props);

	    this.state = { 
			fichaTecId:(window.location.pathname).split("/")[2]
		};
  	}

deleteObj = event => {
	event.preventDefault();

	//const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/objetos/'+ this.state.fichaTecId +'/remove')
	.then((response) => {
		 window.location = "/objetos"
	})
}

deleteFt = event => {
	event.preventDefault();

	//const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/objetos/'+ this.state.fichaTecId +'/removeFT')
	.then((response) => {
		window.location.reload();
	})
}

addFt = event => {
	this.props.history.push("/adicionar")
}

editarFT = event => {
	this.props.history.push("/editar/"+ this.state.fichaTecId)
}
	
componentDidMount(){
	if(sessionStorage.getItem("loginState") !== "success"){
		this.props.history.push("/login");
	}


	const FtId = (window.location.pathname).split("/")[2];

	//const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/objetos/'+ FtId +'/consultarFT')
	.then((response) => {
		return response.data[0]
	})
	.then(data => {
		document.getElementById("tdDesignacao").innerHTML = data.designacao;
		document.getElementById("tdCEARC").innerHTML = data.CEARC;
		document.getElementById("tdLCRMN").innerHTML = data.LCRM;
		document.getElementById("tdDataAberturaCEARC").innerHTML = data.dataAberturaCEARC.substring(0,10);
		document.getElementById("tdDataAberturaLRCM").innerHTML = data.dataAberturaLCRM.substring(0,10);
		document.getElementById("tdDataEntradaCEARC").innerHTML = data.dataEntradaCEARC.substring(0,10);
		document.getElementById("tdDataEntradaLCRM").innerHTML = data.dataEntradaLCRM.substring(0,10);
		document.getElementById("tdNome").innerHTML = data.nome;
		document.getElementById("tdFuncao").innerHTML = data.funcao;
	})
	.catch(err => {
		let btAdd = document.getElementById("btAdd");
		let btDelFT = document.getElementById("btDelFT");
		let btDelObj = document.getElementById("btDelObj");
		let btEdi = document.getElementById("btEdi");
		btAdd.removeAttribute('hidden');
		btDelFT.setAttribute('hidden','hidden');
		btDelObj.removeAttribute('onClick');
		btDelObj.removeAttribute('hidden');
		btEdi.setAttribute('hidden','hidden');
	});
}
	render() {
    return (
		<div id="pageFT" className="pageFT">
	    	<Navbar className="navbarFT" dark expand="sm">
          		<NavbarBrand className="navbarbrandFT" href="/">Conservação e Restauro</NavbarBrand>
          		<NavbarToggler onClick={this.toggle} />
          		<Collapse isOpen={this.state.isOpen} navbar>
            	<Nav className="ml-auto" navbar>
	            	<NavItem>
	                	<NavLink href="/objetos">Back</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink href="/">Home</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink href="/menu">Menu</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink href="/profile">Profile</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink href="/logout">Logout</NavLink>
	             	</NavItem>
            	</Nav>
				</Collapse>
			</Navbar>
			<Table className="tableFT table-borderless">
				<tbody className="tbodyButtonFT">
					<tr className="trButtonFT">
				    	<th className="thButtonFT"></th>
				    	<td className="tdButtonFT">
				    		<div className="divButtonFT">
						        <Button id="btAdd" hidden="hidden" onClick = {this.addFt}>Adicionar</Button>
						        <Button id="btDelFT" onClick = {this.deleteFt}>Eliminar</Button>
						        <Button id="btDelObj" hidden="hidden" onClick = {this.deleteObj}>Eliminar</Button>
						        <Button id="btEdi" onClick = {this.editarFT}>Editar</Button>
				    		</div>
				    	</td>
					</tr>
					<tr>
				    	<th className="thFT" >Designação do objeto</th>
				    	<td className="tdFT"  id = "tdDesignacao"></td>
					</tr>
				 	<tr>
				    	<th className="thFT" >CEARC</th>
				    	<td className="tdFT"   id = "tdCEARC"></td>
				 	 </tr>
				  	<tr>
				    	<th className="thFT" >LCRM</th>
				    	<td className="tdFT"   id = "tdLCRMN"></td>
				  	</tr>
				  	<tr>
				    	<th className="thFT" >Data de abertura do processo CEARC</th>
				    	<td className="tdFT"   id = "tdDataAberturaCEARC"></td>
				  	</tr>
				  	<tr>
				    	<th className="thFT" >Data de abertura do processo LCRM</th>
				    	<td className="tdFT"  id = "tdDataAberturaLRCM"></td>
				  	</tr>
				  	<tr>
				    	<th className="thFT" >Data de entrada no CEARC</th>
				    	<td className="tdFT"   id = "tdDataEntradaCEARC"></td>
				 	 </tr>
				  	<tr>
				    	<th className="thFT" >Data de entrada no LCRM</th>
				    	<td className="tdFT"   id = "tdDataEntradaLCRM"></td>
				 	 </tr>
				  	<tr>
				   		<th className="thFT" >Nome do responsável</th>
				    	<td className="tdFT"   id = "tdNome"></td>
				  	</tr>
				  	<tr>
				    	<th className="thFT" >Funções do responsável</th>
				    	<td className="tdFT"   id = "tdFuncao"></td>
				  	</tr>
				</tbody>
			</Table>
		</div>
		);
	}
}
