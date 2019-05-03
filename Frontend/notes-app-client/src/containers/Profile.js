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
										<td>
											<button id="editNome">Edit</button>
										</td>
									</tr>
									<tr>
										<td>Username</td>
										<td id="userAluno"></td>
										<td>
											<button id="editUsername">Edit</button>

										</td>
									</tr>
									<tr>
										<td>E-mail</td>
										<td id="emailAluno"></td>
										<td>
											<button id="editEmail">Edit</button>
										</td>
									</tr>
									<tr>
										<td>Password</td>
										<td>********</td>
										<td>
											<button id="editPassword">Edit</button>
										</td>
									</tr>
									<tr>
										<td>Tipo</td>
										<td id="tipoAluno"></td>
										<td>
											<button id="editTipo">Edit</button>
										</td>
									</tr>
									<tr>
										<td>Habilitacões</td>
										<td id="habAluno"></td>
										<td>
											<button id="editHab">Edit</button>
										</td>
									</tr>
									<tr>
										<td>Nível Profissional</td>
										<td id="nivelAluno"></td>
										<td>
											<button id="editNProf">Edit</button>
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
