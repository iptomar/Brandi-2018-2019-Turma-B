import React, { Component } from "react";
import "./Register.css";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
  }

  componentDidMount(){

  }
  render(){
    return (
      <div>
        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label" htmlFor="name">
          Username
        </ControlLabel>
        <FormControl
          type="username"
          id="username"
          className="FormField__Input"
          placeholder="Insira o username"
          name="username"
          onChange={this.handleChange}
        />
      </FormGroup>

      <FormGroup className="FormField">
        <ControlLabel className="FormField__Label">
          password
        </ControlLabel>
        <FormControl
          type="password"
          id="password"
          className="FormField__Input"
          placeholder="Insira a sua password"
          name="password"
          onChange={this.handleChange}
        />
        </FormGroup>

        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label" htmlFor="email">
          Email
        </ControlLabel>
        <FormControl
          type="email"
          id="email"
          className="FormField__Input"
          placeholder="Insira o seu email"
          name="email"
          onChange={this.handleChange}
        />
        </FormGroup>

        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label">
          tipo
        </ControlLabel>
        <FormControl
          id="tipo"
          className="FormField__Input"
          placeholder="Insira o seu tipo"
          name="tipo"
          onChange={this.handleChange}
        />
        </FormGroup>

        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label">
          Habilitacoes
        </ControlLabel>
        <FormControl
          id="Habilitacoes"
          className="FormField__Input"
          placeholder="Insira as suas Habilitacoes"
          name="Habilitacoes"
          onChange={this.handleChange}
        />
        </FormGroup>

        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label" htmlFor="email">
          Nome
        </ControlLabel>
        <FormControl
          id="Nome"
          className="FormField__Input"
          placeholder="Insira o seu Nome"
          name="Nome"
          onChange={this.handleChange}
        />
        </FormGroup>

        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label">
          Nivel profissional
        </ControlLabel>
        <FormControl
          id="NivProfissional"
          className="FormField__Input"
          placeholder="Insira o seu nivel profissional"
          name="NivProfissional"
          onChange={this.handleChange}
        />
        </FormGroup>

        <button id="idBtn"className="FormField__Button mr-20" onClick = {this.handleSubmit}>
          Registar
        </button>

        
        
       </div>
    );
  }
}
