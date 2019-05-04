import React, { Component } from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Grid, Cell } from "react-mdl";
import axios from "axios";
import "./Profile.css";
import "./navbar.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

	this.toggle = this.toggle.bind(this);
    this.state = {
			isOpen: false,
			user : [],
			name : ""
    };
  }

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	////////////////////
	//Alterar butoes

	editNome = event => {
		let textField = document.createElement("input");
		textField.id = "TfNome";
		let nomeAluno = document.getElementById("nomeAluno");
		let btn = document.getElementById("CampoNome");
		btn.removeEventListener('click', this.editNome);
		btn.innerHTML = "Save";
		btn.addEventListener('click', this.submitNome);
		document.getElementById("CampoUsername").remove();
		document.getElementById("CampoEmail").remove();
		document.getElementById("CampoPass").remove();
		document.getElementById("CampoTipo").remove();
		document.getElementById("CampoHab").remove();
		document.getElementById("CampoNivel").remove();
		nomeAluno.innerHTML = "";
		nomeAluno.appendChild(textField);
	}

	editUser = event => {
		let textField = document.createElement("input");
		textField.id = "TfUser";
		let userAluno = document.getElementById("userAluno");
		let btn = document.getElementById("CampoUsername");
		btn.innerHTML = "Save";
		btn.removeEventListener('click', this.editUser);
		btn.addEventListener('click', this.submitUsername);
		document.getElementById("CampoNome").remove();
		document.getElementById("CampoEmail").remove();
		document.getElementById("CampoPass").remove();
		document.getElementById("CampoTipo").remove();
		document.getElementById("CampoHab").remove();
		document.getElementById("CampoNivel").remove();
		userAluno.innerHTML = "";
		userAluno.appendChild(textField);
	}

	editEmail = event => {
		let textField = document.createElement("input");
		textField.id = "TfEmail";
		let emailAluno = document.getElementById("emailAluno");
		let btn = document.getElementById("CampoEmail");
		btn.innerHTML = "Save";
		btn.removeEventListener('click', this.editEmail);
		btn.addEventListener('click', this.submitEmail);
		document.getElementById("CampoUsername").remove();
		document.getElementById("CampoNome").remove();
		document.getElementById("CampoPass").remove();
		document.getElementById("CampoTipo").remove();
		document.getElementById("CampoHab").remove();
		document.getElementById("CampoNivel").remove();
		
		emailAluno.innerHTML = "";
		emailAluno.appendChild(textField);
	}

	editPass = event => {
		let textField = document.createElement("input");
		textField.id = "TfPass";
		let passAluno = document.getElementById("passAluno");
		let btn = document.getElementById("CampoPass");
		btn.innerHTML = "Save";
		btn.removeEventListener('click', this.editPass);
		btn.addEventListener('click', this.submitPass);
		document.getElementById("CampoUsername").remove();
		document.getElementById("CampoNome").remove();
		document.getElementById("CampoEmail").remove();
		document.getElementById("CampoTipo").remove();
		document.getElementById("CampoHab").remove();
		document.getElementById("CampoNivel").remove();
		passAluno.innerHTML = "";
		passAluno.appendChild(textField);
	}

	editTipo = event => {
		let textField = document.createElement("input");
		textField.id = "TfTipo";
		let tipoAluno = document.getElementById("tipoAluno");
		let btn = document.getElementById("CampoTipo");
		btn.innerHTML = "Save";
		btn.removeEventListener('click', this.editTipo);
		btn.addEventListener('click', this.submitTipo);
		document.getElementById("CampoPass").remove();
		document.getElementById("CampoUsername").remove();
		document.getElementById("CampoNome").remove();
		document.getElementById("CampoEmail").remove();
		document.getElementById("CampoHab").remove();
		document.getElementById("CampoNivel").remove();
		tipoAluno.innerHTML = "";
		tipoAluno.appendChild(textField);
	}

	editHab = event => {
		let textField = document.createElement("input");
		textField.id = "TfHab";
		let habAluno = document.getElementById("habAluno");
		let btn = document.getElementById("CampoHab");
		btn.innerHTML = "Save";
		btn.removeEventListener('click', this.editHab);
		btn.addEventListener('click', this.submitHab);
		document.getElementById("CampoPass").remove();
		document.getElementById("CampoUsername").remove();
		document.getElementById("CampoNome").remove();
		document.getElementById("CampoEmail").remove();
		document.getElementById("CampoTipo").remove();
		document.getElementById("CampoNivel").remove();
		habAluno.innerHTML = "";
		habAluno.appendChild(textField);
	}

	editNivel = event => {
		let textField = document.createElement("input");
		textField.id = "TfNivel";
		let nivelAluno = document.getElementById("nivelAluno");
		let btn = document.getElementById("CampoNivel");
		btn.innerHTML = "Save";
		btn.removeEventListener('click', this.editNivel);
		btn.addEventListener('click', this.submitNivel);
		document.getElementById("CampoPass").remove();
		document.getElementById("CampoUsername").remove();
		document.getElementById("CampoNome").remove();
		document.getElementById("CampoEmail").remove();
		document.getElementById("CampoTipo").remove();
		document.getElementById("CampoHab").remove();
		nivelAluno.innerHTML = "";
		nivelAluno.appendChild(textField);
	}

	///////////////////
	//Submeter Valores

	submitNome = event => {
		const nomeActual = this.state.user.nome;
		console.log(this.state.user.nome);
		const Nome = document.getElementById("TfNome").value;

		//const proxyurl = "http://cors-anywhere.herokuapp.com/";
    axios.post(/*proxyurl + 'http://brandi.ipt.pt*/'/api/tecnicos/username/'+ nomeActual +'/updateNome', { Nome })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err)
      });
	}

	submitUsername = event => {
		console.log("submitUsername");
	}

	submitEmail = event => {
		console.log("submitEmail");
	}

	submitPass = event => {
		console.log("submitPass");
	}

	submitHab = event => {
		console.log("submitHab");
	}

	submitTipo = event => {
		console.log("submitTipo");
	}

	submitNivel = event => {
		console.log("submitNivel");
	}

  componentDidMount(){
		if(sessionStorage.getItem("loginState") !== "success"){
      this.props.history.push("/login");
		}
		
		let CampoNome = document.createElement("button");
		CampoNome.id = "CampoNome";
		CampoNome.innerHTML = "Edit";
		CampoNome.addEventListener('click', this.editNome);

		let CampoUsername = document.createElement("button");
		CampoUsername.id = "CampoUsername";
		CampoUsername.innerHTML = "Edit"
		CampoUsername.addEventListener('click', this.editUser);

		let CampoEmail = document.createElement("button");
		CampoEmail.id = "CampoEmail";
		CampoEmail.innerHTML = "Edit"
		CampoEmail.addEventListener('click', this.editEmail);

		let CampoPass = document.createElement("button");
		CampoPass.id = "CampoPass";
		CampoPass.innerHTML = "Edit"
		CampoPass.addEventListener('click', this.editPass);

		let CampoTipo = document.createElement("button");
		CampoTipo.id = "CampoTipo";
		CampoTipo.innerHTML = "Edit"
		CampoTipo.addEventListener('click', this.editTipo);

		let CampoHab = document.createElement("button");
		CampoHab.id = "CampoHab";
		CampoHab.innerHTML = "Edit"
		CampoHab.addEventListener('click', this.editHab);

		let CampoNivel = document.createElement("button");
		CampoNivel.id = "CampoNivel";
		CampoNivel.innerHTML = "Edit"
		CampoNivel.addEventListener('click', this.editNivel);

		let tdNome = document.getElementById("tdNome");
		let tdUsername = document.getElementById("tdUsername");
		let tdEmail = document.getElementById("tdEmail");
		let tdPass = document.getElementById("tdPass");
		let tdTipo = document.getElementById("tdTipo");
		let tdHab = document.getElementById("tdHab");
		let tdNivel = document.getElementById("tdNivel");

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
			
			
			tdNome.appendChild(CampoNome);
			tdUsername.appendChild(CampoUsername);
			tdEmail.appendChild(CampoEmail);
			tdPass.appendChild(CampoPass);
			tdTipo.appendChild(CampoTipo);
			tdHab.appendChild(CampoHab);
			tdNivel.appendChild(CampoNivel);

		}else{

			tdEmail.appendChild(CampoEmail);
			tdPass.appendChild(CampoPass);

		}
		
		

		let sessionName;
		if(window.location.pathname === "/profile"){
			sessionName = sessionStorage.getItem("username");
		}else{
			if(sessionStorage.getItem("tipo") !== "admin"){
				this.props.history.push("/login");
			}else{
				sessionName = (window.location.pathname).split("/")[2];
			}
		}    
    this.setState({name: sessionName })
    //const proxyurl = "http://cors-anywhere.herokuapp.com/";
    axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/tecnicos/username/' + sessionName)
    .then((response) => {
      return response.data
    })
    .then(data => {
      this.setState({user: data[0]})	
      console.log(this.state.user);
      document.getElementById("nomeAluno").innerHTML = this.state.user.nome;
      document.getElementById("userAluno").innerHTML = this.state.user.username;
      document.getElementById("emailAluno").innerHTML = this.state.user.email;
      document.getElementById("tipoAluno").innerHTML = this.state.user.tipo;
      document.getElementById("habAluno").innerHTML = this.state.user.habilitacoes;
      document.getElementById("nivelAluno").innerHTML = this.state.user.nivelProfissional;
    })  
  }

  render() {

    return (
      <div style={{ width: "100%", margin: "auto" }}>
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
				<Grid className="Profile-grid">
					<Cell col={12}>
						<img
							src="https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png"
							alt="imag"
							className="avatarImg"
						/>

						<div className="text">
							<h1>
								Laboratório de Conservaçâo e Restauro - Madeiras I Lab.CR-M II
              				</h1>
							<p>
								Artefactos e Estruturas em Madeiras I Mobiliário I Retabulástica
								e Talha I
              				</p>

							<table align="center">
								<tbody>
									<tr className="Campos">
										<th>Campo</th>
										<th>Valor Atual</th>
										<th>Ações Disponíveis</th>
									</tr>
									<tr>
										<td>Nome</td>
										<td id="nomeAluno"></td>
										<td id="tdNome">
										</td>
									</tr>
									<tr>
										<td>Username</td>
										<td id="userAluno"></td>
										<td id="tdUsername">
										</td>
									</tr>
									<tr>
										<td>E-mail</td>
										<td id="emailAluno"></td>
										<td id="tdEmail">
										</td>
									</tr>
									<tr>
										<td>Password</td>
										<td id="passAluno">********</td>
										<td id="tdPass">
										</td>
									</tr>
									<tr>
										<td>Tipo</td>
										<td id="tipoAluno"></td>
										<td id="tdTipo">
										</td>
									</tr>
									<tr>
										<td>Habilitacões</td>
										<td id="habAluno"></td>
										<td id="tdHab">
										</td>
									</tr>
									<tr>
										<td>Nível Profissional</td>
										<td id="nivelAluno"></td>
										<td id="tdNivel">
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</Cell>
				</Grid>
			</div> 
    );
  }
}
