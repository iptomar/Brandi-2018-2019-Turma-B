import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./Profile.css";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
			user : [],
			name : ""
    };
  }

  componentDidMount(){
		if(sessionStorage.getItem("loginState") === "idle"){
      this.props.history.push("/login");
    }


		let sessionName;
		if(window.location.pathname === "/profile"){
			sessionName = sessionStorage.getItem("username");
		}else{
			if(sessionStorage.getItem("tipo") != "admin"){
				this.props.history.push("/login");
			}else{
				sessionName = (window.location.pathname).split("/")[2];
			}
		}    
    this.setState({name: sessionName })
    //const proxyurl = "http://cors-anywhere.herokuapp.com/";
    axios.get(/*proxyurl + 'http://brandi.ipt.pt/*/'/api/tecnicos/username/' + sessionName)
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
