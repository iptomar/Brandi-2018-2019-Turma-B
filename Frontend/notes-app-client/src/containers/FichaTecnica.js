import React, { Component } from "react";
import {Table, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import axios from 'axios';
import "./FichaTecnica.css";
import "./navbar.css";
import "./base.css";
export default class FichaTecnica extends Component {
	constructor(props) {
	    super(props);

		this.toggle = this.toggle.bind(this);
		this.toggle2 = this.toggle2.bind(this);
	    this.state = { 
			isOpen: false,
      		dropdownOpen: false,
			fichaTecId:(window.location.pathname).split("/")[2]
		};
  	}

toggle() {
	this.setState({
		isOpen: !this.state.isOpen
	});
}
  
toggle2() {
	this.setState({
	  dropdownOpen: !this.state.dropdownOpen
	});
}

deleteObj = event => {
	event.preventDefault();

	const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(proxyurl + 'http://brandi.ipt.pt/api/objetos/'+ this.state.fichaTecId +'/removeObj')
	.then((response) => {
		 window.location = "/objetos"
	})
}

deleteFt = event => {
	event.preventDefault();

	const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(proxyurl + 'http://brandi.ipt.pt/api/objetos/'+ this.state.fichaTecId +'/removeFT')
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

mudarAnalisesSolvente = event => {
	this.props.history.push("/analisesSolvente/"+ this.state.fichaTecId);
}
	
mudarFichaObra = event => {
	this.props.history.push("/folhadeobra/"+ this.state.fichaTecId);
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
	
	document.getElementById("CondicoesAmbientais").style.display = "none";
	document.getElementById("ExamesAnalises").style.display = "none";
	document.getElementById("EstadoConservacao").style.display = "none";
	document.getElementById("IntervencoesAnteriores").style.display = "none";
	document.getElementById("TipoIntervencao").style.display = "none";
	document.getElementById("IntervencaoRealizada").style.display = "none";
	document.getElementById("Documentacao").style.display = "none";
	document.getElementById("Fontes").style.display = "none";
	document.getElementById("Equipa").style.display = "none";

	const FtId = (window.location.pathname).split("/")[2];

	const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(proxyurl + 'http://brandi.ipt.pt/api/objetos/'+ FtId +'/consultarFT')
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
		<div id="pageFT" className="bodydiv">
	    	<Navbar dark className="fttopnavbar" expand="sm">
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

			<Navbar className="ftnavbar" expand="sm">
          		<NavbarToggler onClick={this.toggle} />
          		<Collapse isOpen={this.state.isOpen} navbar>
          	     <Nav tabs className="" navbar>

		          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle2}>
		            <DropdownToggle nav caret>
		              Ficha Técnica
		            </DropdownToggle>
		            <DropdownMenu>
		              <DropdownItem>Ficha Técnica</DropdownItem>
		              <DropdownItem divider />
		              <DropdownItem onClick = {this.mudarFichaObra}>Folha de Obra</DropdownItem>
		              <DropdownItem divider />
		              <DropdownItem onClick = {this.mudarAnalisesSolvente} >Análises Solventes</DropdownItem>
		            </DropdownMenu>
		          </Dropdown>
		          
	            	<NavItem>
	                	<NavLink className="ftnavlink" onClick = {
	                		function(){
								document.getElementById("Inicio").style.display = "";
								document.getElementById("CondicoesAmbientais").style.display = "none";
								document.getElementById("ExamesAnalises").style.display = "none";
								document.getElementById("EstadoConservacao").style.display = "none";
								document.getElementById("IntervencoesAnteriores").style.display = "none";
								document.getElementById("TipoIntervencao").style.display = "none";
								document.getElementById("IntervencaoRealizada").style.display = "none";
								document.getElementById("Documentacao").style.display = "none";
								document.getElementById("Fontes").style.display = "none";
								document.getElementById("Equipa").style.display = "none";
							}
						}>Inicio</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink className="ftnavlink" onClick = {
	                		function(){
								document.getElementById("Inicio").style.display = "none";
								document.getElementById("CondicoesAmbientais").style.display = "";
								document.getElementById("ExamesAnalises").style.display = "none";
								document.getElementById("EstadoConservacao").style.display = "none";
								document.getElementById("IntervencoesAnteriores").style.display = "none";
								document.getElementById("TipoIntervencao").style.display = "none";
								document.getElementById("IntervencaoRealizada").style.display = "none";
								document.getElementById("Documentacao").style.display = "none";
								document.getElementById("Fontes").style.display = "none";
								document.getElementById("Equipa").style.display = "none";
							}
						}>Condições Ambientais</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink className="ftnavlink" onClick = {
	                		function(){
								document.getElementById("Inicio").style.display = "none";
								document.getElementById("CondicoesAmbientais").style.display = "none";
								document.getElementById("ExamesAnalises").style.display = "";
								document.getElementById("EstadoConservacao").style.display = "none";
								document.getElementById("IntervencoesAnteriores").style.display = "none";
								document.getElementById("TipoIntervencao").style.display = "none";
								document.getElementById("IntervencaoRealizada").style.display = "none";
								document.getElementById("Documentacao").style.display = "none";
								document.getElementById("Fontes").style.display = "none";
								document.getElementById("Equipa").style.display = "none";
							}
						}>Exames e Análises</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink className="ftnavlink" onClick = {
	                		function(){
								document.getElementById("Inicio").style.display = "none";
								document.getElementById("CondicoesAmbientais").style.display = "none";
								document.getElementById("ExamesAnalises").style.display = "none";
								document.getElementById("EstadoConservacao").style.display = "";
								document.getElementById("IntervencoesAnteriores").style.display = "none";
								document.getElementById("TipoIntervencao").style.display = "none";
								document.getElementById("IntervencaoRealizada").style.display = "none";
								document.getElementById("Documentacao").style.display = "none";
								document.getElementById("Fontes").style.display = "none";
								document.getElementById("Equipa").style.display = "none";
							}
						}>Estado de Conservação</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink className="ftnavlink" onClick = {
	                		function(){
								document.getElementById("Inicio").style.display = "none";
								document.getElementById("CondicoesAmbientais").style.display = "none";
								document.getElementById("ExamesAnalises").style.display = "none";
								document.getElementById("EstadoConservacao").style.display = "none";
								document.getElementById("IntervencoesAnteriores").style.display = "";
								document.getElementById("TipoIntervencao").style.display = "none";
								document.getElementById("IntervencaoRealizada").style.display = "none";
								document.getElementById("Documentacao").style.display = "none";
								document.getElementById("Fontes").style.display = "none";
								document.getElementById("Equipa").style.display = "none";
							}
						}>Intervenções Anteriores</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink className="ftnavlink" onClick = {
	                		function(){
								document.getElementById("Inicio").style.display = "none";
								document.getElementById("CondicoesAmbientais").style.display = "none";
								document.getElementById("ExamesAnalises").style.display = "none";
								document.getElementById("EstadoConservacao").style.display = "none";
								document.getElementById("IntervencoesAnteriores").style.display = "none";
								document.getElementById("TipoIntervencao").style.display = "";
								document.getElementById("IntervencaoRealizada").style.display = "none";
								document.getElementById("Documentacao").style.display = "none";
								document.getElementById("Fontes").style.display = "none";
								document.getElementById("Equipa").style.display = "none";
							}
						}>Tipo de Intervenção e Proposta</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink className="ftnavlink" onClick = {
	                		function(){
								document.getElementById("Inicio").style.display = "none";
								document.getElementById("CondicoesAmbientais").style.display = "none";
								document.getElementById("ExamesAnalises").style.display = "none";
								document.getElementById("EstadoConservacao").style.display = "none";
								document.getElementById("IntervencoesAnteriores").style.display = "none";
								document.getElementById("TipoIntervencao").style.display = "none";
								document.getElementById("IntervencaoRealizada").style.display = "";
								document.getElementById("Documentacao").style.display = "none";
								document.getElementById("Fontes").style.display = "none";
								document.getElementById("Equipa").style.display = "none";
							}
						}>Intervenção Realizada</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink className="ftnavlink" onClick = {
	                		function(){
								document.getElementById("Inicio").style.display = "none";
								document.getElementById("CondicoesAmbientais").style.display = "none";
								document.getElementById("ExamesAnalises").style.display = "none";
								document.getElementById("EstadoConservacao").style.display = "none";
								document.getElementById("IntervencoesAnteriores").style.display = "none";
								document.getElementById("TipoIntervencao").style.display = "none";
								document.getElementById("IntervencaoRealizada").style.display = "none";
								document.getElementById("Documentacao").style.display = "";
								document.getElementById("Fontes").style.display = "none";
								document.getElementById("Equipa").style.display = "none";
							}
						}>Documentação</NavLink>
	             	</NavItem>
	            	<NavItem>	                	
	                	<NavLink className="ftnavlink" onClick = {
	                		function(){
								document.getElementById("Inicio").style.display = "none";
								document.getElementById("CondicoesAmbientais").style.display = "none";
								document.getElementById("ExamesAnalises").style.display = "none";
								document.getElementById("EstadoConservacao").style.display = "none";
								document.getElementById("IntervencoesAnteriores").style.display = "none";
								document.getElementById("TipoIntervencao").style.display = "none";
								document.getElementById("IntervencaoRealizada").style.display = "none";
								document.getElementById("Documentacao").style.display = "none";
								document.getElementById("Fontes").style.display = "";
								document.getElementById("Equipa").style.display = "none";
							}
						}>Fontes</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink className="ftnavlink" onClick = {
	                		function(){
								document.getElementById("Inicio").style.display = "none";
								document.getElementById("CondicoesAmbientais").style.display = "none";
								document.getElementById("ExamesAnalises").style.display = "none";
								document.getElementById("EstadoConservacao").style.display = "none";
								document.getElementById("IntervencoesAnteriores").style.display = "none";
								document.getElementById("TipoIntervencao").style.display = "none";
								document.getElementById("IntervencaoRealizada").style.display = "none";
								document.getElementById("Documentacao").style.display = "none";
								document.getElementById("Fontes").style.display = "none";
								document.getElementById("Equipa").style.display = "";
							}
						}>Equipa</NavLink>
	             	</NavItem>
            	</Nav>
				</Collapse>
			</Navbar>


			<div id = "Inicio">
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
			

			
			





			<div id = "CondicoesAmbientais">
				<div className="App">
					<div className="right">
						
						<h3>Radiação</h3>
						<h4>Natual</h4>
						<label>Tipo</label>
						<input className="radiacao"/>
						<label>Valor de Luminância</label>
						<input className="radiacao"/>
						<label>Valor de U.V. Medidos</label>
						<input className="radiacao"/>
						<label>Valor Rela de U.V.</label>
						<input className="radiacao"/>
						<p></p>
						<hr></hr>
						<h4>Artificial</h4>
						<label>Origem</label>
						<input className="radiacao"/>
						<label>Valor de Luminância</label>
						<input className="radiacao"/>
						<label>Valor de U.V. Medidos</label>
						<input className="radiacao"/>
						<label>Valor Rela de U.V.</label>
						<input className="radiacao"/>
						<h3>Observações|Conclusões</h3>
						<textarea cols="83" rows="7"></textarea>



					</div>
					<div className="left">

						<h1>Condições Ambientais</h1>

						<h3>Descrição</h3>
						<textarea  cols="80" rows="10"></textarea><br></br>
						<h3>Ciclos das Estações Climatérias Anuais</h3>
						<table  align="left" >
						<tr>
							<th></th>
							<th>Frio/Húmido</th>
							<th>Quente/Seco</th>
						</tr>
						<tr>
							<td>Temperatura</td>
							<td>
							<input />
							</td>
							<td>
							<input />
							</td>
						</tr>
						<tr><td>Húmidade Relativa</td>
							<td>
							<input />
							</td>
							<td>
							<input />
							</td>
						</tr>
						<tr><td>Período do Ano</td>
							<td>
							<input />
							</td>
							<td>
							<input />
							</td>
						</tr>
						</table>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>



						<h3>Poluição</h3>
						<table align="left" >
						<tr>
							<td>Agentes poluidores</td>
							<td>
							<input />
							</td>
						</tr>
						<tr><td>Resultados</td>
							<td>
							<input />
							</td>
						</tr>
						<tr><td>Fontes|Origem</td>
							<td>
							<input />
							</td>
						</tr>
						</table>
					</div>
				</div>
			</div>





			<div id = "ExamesAnalises">
				<div className="centro">
					<h1>Exames e Analise</h1>
					<h2>Objetivos gerais</h2>
					<table>
					<tr>
					<td>
					<label>Identificação de materiais, técnicas e tecnologias de produção</label>
					<br></br>
					<label>Identificação de intervenientes efetuadas no objeto</label>
					<br></br>
					<label>Caracterização do estado de conservação</label>
					<br></br>
					<label>Identificação de patologias e agentes de biodeterização</label>
					<br></br>
					<label>Datação do objeto e das eventuais itervenções que tenha sido alvo</label>

					</td>
					<td>
					<input type="checkbox"></input>  <br></br>
					<input type="checkbox"></input>  <br></br>
					<input type="checkbox"></input>  <br></br>
					<input type="checkbox"></input>  <br></br>
					<input type="checkbox"></input>  <br></br>
					</td>
					</tr>
					</table>

					<table className="tbl">
					<tr>
						<td></td>
						<td>Tipo-Referência</td>
						<td>Localização</td>
						<td>Objetivos expecíficos</td>
						<td>Resultados</td>
						<td>Entidade Técnico Responsável</td>
						<td>Data</td>
					</tr>

					<tr id="myRow">
						<td><button onclick="myFunction()">+</button></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					</table>
					<br></br>
					<br></br>
					<table className="tbl1">
					<tr>
					<td>
					Interpretações de Resultados 
					</td>
					</tr>
					<td>
					"Escrever"
					</td>
					<tr>
					<br></br>
					</tr>

					<br></br>
					<br></br>

					<tr>
					<td>
					Observações | Conclusões 
					</td>
					</tr>
					<td>
						"escrever"
					</td>
					<tr>
					</tr>

					</table>
				</div>
			</div>





			<div id = "EstadoConservacao">
				<div className="App">
					<div className="right">
					<h3>Deterioração Biológica dos Materiais</h3>
						<p>Identificação de Patologias e Agentes de Biodeterioração - Diagnóstico</p>
					<h3>Estrutura</h3>
					<textarea cols="80" rows="7">
					</textarea>
					<h3>Superfície</h3>
					<textarea cols="80" rows="7">
					</textarea>
					<h3>Elementos Acessórios</h3>
					<textarea cols="80" rows="7">
					</textarea>
					<h3>Observações|Conclusões</h3>
					<textarea cols="80" rows="7">
					</textarea>
					</div>
					<div className="left">
					<h1>Estado de Conservação</h1>
					<h3>Deterioração Física, Química e Mecânica dos Materiais:</h3>
					<p>Alterabilidades: Decorrente de envelhecimento natural</p>
					<p>Alteração: Decorrente de fatores físicos, químicos, biológicos e antrópicos</p>
					<h3>Estrutura</h3>
					<textarea cols="80" rows="7">
					</textarea >
					<h3>Superfície</h3>
					<textarea cols="80" rows="7">
					</textarea>
					<h3>Elementos Acessórios</h3>
					<textarea cols="80" rows="7">
					</textarea>

					


					</div>


					</div>
			</div>



			<div id = "IntervencoesAnteriores">
				<div className="App">
					<div className="right">
					<h3>Vontade expressa do proprietárrio ou do dono da obra</h3>
					<h4>Tipo de Intervenção</h4>
					<textarea cols="80" rows="3" />
					<br />
					<br />
					<table>
						<tr>
						<td>
							<label>Preservação</label>
							<br />
							<label>Conservação</label>
						</td>
						<td>
							<input type="checkbox" />
							<input type="checkbox" />
						</td>
						</tr>
					</table>
					<h3>Aspetos Especificos</h3>
					<textarea cols="80" rows="3" />
					</div>
					<div className="left">
					<h1>Intervenções Anteriores</h1>
					<h3>Estrutura</h3>
					<textarea cols="80" rows="2" />
					<h3>Superficie</h3>
					<textarea cols="80" rows="2" />
					<h3>Elementos Acessórios</h3>
					<textarea cols="80" rows="2" />
					<h3>Observações | Conclusões </h3>
					<textarea cols="80" rows="2" />
					</div>
				</div>
			</div>



			<div id = "TipoIntervencao">
				<div className="App">
					<div class="div1">
					<h1>Tipo de Intervenção e Proposta</h1>
						<h3>Tipo de Intervenção proposta pelo Conservador-Restaurador</h3>
						<div  class="preservacao"><label>Preservação<input class="checkbox" type="checkbox"/></label></div>
						<div class="conservacao"><label>Conservação<input class="checkbox" type="checkbox"/></label></div>
						<div class="restauro"><label>Restauro<input class="checkbox" type="checkbox"/></label></div>
					</div>
						
						<div class="div2">
						<table align="center" class="tabela">
						<tr class="cab">
							<td class="cab2">Proposta Metodolígica de Intervenção</td>
							<td class="cab2">Recursos Materiais|Técnicos|Tecnológicos </td>
							<td class="cab2">Observações | Conclusões</td>
						</tr>
						<tr>
							<td class="nome">Estrutura:</td>
							<td><textarea rows="2" cols="30" type="text" maxlength="100"/></td>
							<td><textarea rows="2" cols="30" type="text" maxlength="50"/></td>
						</tr>
						<tr>
							<td class="nome">Superfície:</td>
							<td><textarea rows="2" cols="30" type="text" maxlength="100"/></td>
							<td><textarea rows="2" cols="30" type="text" maxlength="100"/></td>
						</tr>
						<tr>
							<td class="nome">Elementos Acessórios:</td>
							<td><textarea rows="2" cols="30" type="text" maxlength="100"/></td>
							<td><textarea rows="2" cols="30" type="text" maxlength="100"/></td>
						</tr>
						
						</table>
						
						</div>
						<div class="div3">
						<p>Data da Informação da proposta:<input type="date" min="2019-01-01"/></p>
						<p class="p1">Data da aceitação da proposta: <input type="date"/></p>
						</div>
						
						<div class="div4">
						<p>Interlocutores do Processo (IPT):<textarea class="textarea2"></textarea></p>
						<p>(Cliente): <textarea class="textarea2"></textarea></p>
						</div>

					</div>
			</div>



			<div id = "IntervencaoRealizada">
				<div className="App">
					<div className="right">
					<h3>Elementos Acessórios</h3>
					<textarea cols="80" rows="3" />
					<h2>Materias</h2>
					<textarea cols="80" rows="3" />

					<h3>Observações | Conclusões</h3>
					<textarea cols="80" rows="3" />
					</div>
					<div className="left">
					<h1>Intervenções Realizada</h1>
					<h3>Estrutura</h3>
					<textarea cols="80" rows="2" />
					<h2>Materias</h2>
					<textarea cols="80" rows="3" />

					<h3>Superficie</h3>
					<textarea cols="80" rows="2" />
					<h2>Materias</h2>
					<textarea cols="80" rows="3" />
					</div>
				</div>
			</div>



			<div id = "Documentacao">
				<div className="App">
					<div className="right">
					<h3>Exames e Análises</h3>
					<h4>Tipo|Designação</h4>
					<textarea cols="80" rows="3">
					</textarea>
					<h4>Referências</h4>
					<textarea cols="80" rows="3">
					</textarea>
					<h4>Entidade|Autor</h4>
					<textarea cols="80" rows="3">
					</textarea>

					</div>
					<div className="left">
					<h1>Documentação</h1>
					<h3>Relatório Técnico da Intervenção do LCRM</h3>
					<textarea cols="80" rows="2"></textarea>
					<h3>Originais Fotográficos</h3>
					<h4>Tipo|Designação</h4>
					<textarea cols="80" rows="3">
					</textarea>
					<h4>Referências</h4>
					<textarea cols="80" rows="3">
					</textarea>
					<h4>Entidade|Autor</h4>
					<textarea cols="80" rows="3">
					</textarea>
					<h3>Documentação Gráfica</h3>
					<h4>Tipo|Designação</h4>
					<textarea cols="80" rows="3">
					</textarea>
					<h4>Referências</h4>
					<textarea cols="80" rows="3">
					</textarea>
					<h4>Entidade|Autor</h4>
					<textarea cols="80" rows="3">
					</textarea>
					</div>
				</div>
			</div>



			<div id = "Fontes">
				<div className="App">
					<div className="right">
					<h3>Bibliográficos</h3>
					<label>Autor/Título/Local/Editor/Data/Página(s)</label>
					<input className="bibliográficos" />
					<table align="left">
						<tr>
						<th />
						<th>Tipo</th>
						<th>Localização</th>
						<th>Conta</th>
						</tr>
						<tr>
						<td />
						<td>
							<input />
						</td>
						<td>
							<input />
						</td>
						<td>
							<input />
						</td>
						</tr>
					</table>
					<br />
					<br />
					<br />
					<br />
					<br />
					<h4>Eletronicas</h4>
					<label>Autor/Título/Local/Editor/Data/Página(s)</label>
					<input className="bibliográficos" />
					<table align="left">
						<tr>
						<th />
						<th>Tipo</th>
						<th>Localização</th>
						<th>Conta</th>
						</tr>
						<tr>
						<td />
						<td>
							<input />
						</td>
						<td>
							<input />
						</td>
						<td>
							<input />
						</td>
						</tr>
					</table>
					</div>

					<div className="left">
					<h1>Fontes</h1>
					<h3>Arquivísticas | Documentais</h3>
					<label>Autor/Título/Local/Editor/Data/Página(s)</label>
					<input className="bibliográficos" />
					<table align="left">
						<tr>
						<th />
						<th>Tipo</th>
						<th>Localização</th>
						<th>R</th>
						</tr>
						<tr>
						<td />
						<td>
							<input />
						</td>
						<td>
							<input />
						</td>
						<td>
							<input />
						</td>
						</tr>
					</table>
					<br />
					<br />
					<br />
					<br />
					<br />
					<h4>Iconográficas</h4>
					<label>Autor/Título/Local/Editor/Data/Página(s)</label>
					<input className="bibliográficos" />
					<table align="left">
						<tr>
						<th />
						<th>Tipo</th>
						<th>Localização</th>
						<th>Conta</th>
						</tr>
						<tr>
						<td />
						<td>
							<input />
						</td>
						<td>
							<input />
						</td>
						<td>
							<input />
						</td>
						</tr>
					</table>
					</div>

					<div className="down" />
					<br />
					<br />
					<br />
					<h4>Eletronicas</h4>
					<table align="left">
					<tr>
						<th />
						<th>Autor/Título/Local/Editor/Data/Página(s)</th>
						<th>Tipo</th>
						<th>Localização</th>
						<th>Conta</th>
					</tr>
					<tr>
						<td />
						<td>
						<input />
						</td>
						<td>
						<input />
						</td>
						<td>
						<input />
						</td>
						<td>
						<input />
						</td>
					</tr>
					</table>
				</div>
			</div>



			<div id = "Equipa">
				<div className="App">
					<div className="down">
					<h1>Equipa</h1>
					<h3>Constituição da Equipa</h3>
					<table align="center" className="Campos">
						<tbody>
						<tr>
							<th>Nome do Técnico</th>

							<th>Funções Desempenhadas</th>

							<th>Habilitaçòes | Nivel Profissional</th>
						</tr>

						<tr>
							<td />

							<td />

							<td />
						</tr>

						<tr>
							<td />

							<td> </td>

							<td />
						</tr>

						<tr>
							<td />

							<td />

							<td />
						</tr>

						<tr>
							<td />

							<td />

							<td />
						</tr>

						<tr>
							<td />
							<td />
							<td />
						</tr>

						<tr>
							<td />
							<td />
							<td />
						</tr>

						<tr>
							<td />
							<td />
							<td />
						</tr>
						</tbody>
					</table>
					</div>
				</div>
			</div>
		</div>
		);
	}
}
