import React, { Component } from "react";
import {Table, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import axios from 'axios';
import "./FichaTecnica.css";
import "./navbar.css";
export default class FichaTecnica extends Component {
	constructor(props) {
	    super(props);

		this.toggle = this.toggle.bind(this);
	    this.state = { 
			isOpen: false,
			fichaTecId:(window.location.pathname).split("/")[2]
		};
  	}

toggle() {
	this.setState({
		isOpen: !this.state.isOpen
	});
}

deleteObj = event => {
	event.preventDefault();

	//const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/objetos/'+ this.state.fichaTecId +'/removeObj')
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

mudarTestesSolub = event => {
	this.props.history.push("/testesSolub/")
}
	
componentDidMount(){
	if(sessionStorage.getItem("loginState") !== "success"){
		this.props.history.push("/login");
	}

	if(sessionStorage.getItem("tipo") === "admin"){
      let prof = document.querySelector(".dropdown-item")
      console.log(prof)
      let registarLink = document.createElement("a")
      registarLink.href = "/register"
      registarLink.className = "dropdown-item"

      let resgistarIcon = document.createElement("span")
      resgistarIcon.className = "glyphicon glyphicon-edit"
      registarLink.appendChild(resgistarIcon)

      let resgistarText = document.createElement("span")
      resgistarText.innerHTML = " Registar"
      registarLink.appendChild(resgistarText)

      let tecnicosLink = document.createElement("a")
      tecnicosLink.href = "/tecnicos"
      tecnicosLink.className = "dropdown-item"

      let tecnicosIcon = document.createElement("span")
      tecnicosIcon.className = "glyphicon glyphicon-list-alt"
      tecnicosLink.appendChild(tecnicosIcon)
      
      let tecnicosText = document.createElement("span")
      tecnicosText.innerHTML = " Técnicos"
      tecnicosLink.appendChild(tecnicosText)

      prof.parentNode.insertBefore(registarLink, prof.nextSibling);
      registarLink.parentNode.insertBefore(tecnicosLink, registarLink.nextSibling);
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
	    	<Navbar dark expand="sm">
          		<NavbarBrand className="mr-auto navbarbrand" href="/">Conservação e Restauro</NavbarBrand>
          		<NavbarToggler onClick={this.toggle} />
          		<Collapse isOpen={this.state.isOpen} navbar>
            	<Nav className="ml-auto" navbar>
	            	<NavItem>
	                	<NavLink href="/">Home</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink href="/menu">Menu</NavLink>
	             	</NavItem>
		            <UncontrolledDropdown nav inNavbar>
		            	<DropdownToggle nav caret>{sessionStorage.getItem("username")}</DropdownToggle>
		                <DropdownMenu right className="dropmenu">
		                	<DropdownItem href="/profile">
		                		<span className="glyphicon glyphicon-user"></span>
		                		<span> Profile</span>
		                	</DropdownItem>
		                  	<DropdownItem divider />
		                  	<DropdownItem href="/logout">
		                		<span className="glyphicon glyphicon-log-out"></span>
		                		<span> Logout</span>
		                  	</DropdownItem>
		                </DropdownMenu>
		            </UncontrolledDropdown>
            	</Nav>
				</Collapse>
			</Navbar>

			<div className="menudiv">
				<button className="btn btnmenu btn-outline-dark">Ficha Tecnica</button>
				<button className="btn btnmenu btn-outline-dark">Folha de obra</button>
				<button className="btn btnmenu btn-outline-dark" onClick = {this.mudarTestesSolub}>Testes de solubilidade</button>
			</div>	

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
