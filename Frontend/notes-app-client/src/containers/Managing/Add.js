import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import "./Add.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      LCRM:"",
      CEARC:"",
      dataAberturaLCRM:"",
      dataAberturaCEARC:"",
      dataEntradaLCRM:"",
      dataEntradaCEARC:"",
      coordenador:"",
      funcao:"",
      objeto:""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("submit")

    let LCRM = this.state.LCRM;
    let CEARC = this.state.CEARC;
    let dataAberturaLCRM = this.state.dataAberturaLCRM;
    let dataAberturaCEARC = this.state.dataAberturaCEARC;
    let dataEntradaLCRM = this.state.dataEntradaLCRM;
    let dataEntradaCEARC = this.state.dataEntradaCEARC;
    let coordenador = this.state.coordenador;
    let funcao = this.state.funcao;
    let objeto = this.state.objeto;

    //const proxyurl = "http://cors-anywhere.herokuapp.com/";
    axios.post(/*proxyurl + 'http://brandi.ipt.pt*/'/api/inserirFT', { LCRM, CEARC, dataAberturaLCRM, dataAberturaCEARC, dataEntradaLCRM, dataEntradaCEARC, coordenador, funcao, objeto})
      .then(res => {
        console.log(res)
        this.props.history.push("/objetos");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {

    return (
      <div>
        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label">
        LCRM
        </ControlLabel>
        <FormControl
          id="LCRM"
          className="FormField__Input"
          placeholder="LCRM"
          name="LCRM"
          onChange={this.handleChange}
        />
      </FormGroup>

      <FormGroup className="FormField">
        <ControlLabel className="FormField__Label">
        CEARC
        </ControlLabel>
        <FormControl
          id="CEARC"
          className="FormField__Input"
          placeholder="CEARC"
          name="CEARC"
          onChange={this.handleChange}
        />
        </FormGroup>

        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label">
          Data de Abertura LCRM
        </ControlLabel>
        <FormControl
          id="dataAberturaLCRM"
          className="FormField__Input"
          placeholder="Data de Abertura LCRM"
          name="dataAberturaLCRM"
          onChange={this.handleChange}
        />
        </FormGroup>

        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label">
          Data de Abertura CEARC
        </ControlLabel>
        <FormControl
          id="dataAberturaCEARC"
          className="FormField__Input"
          placeholder="Data de Abertura CEARC"
          name="dataAberturaCEARC"
          onChange={this.handleChange}
        />
        </FormGroup>

        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label">
          Data de Entrada LCRM
        </ControlLabel>
        <FormControl
          id="dataEntradaLCRM"
          className="FormField__Input"
          placeholder="Data de Entrada LCRM"
          name="dataEntradaLCRM"
          onChange={this.handleChange}
        />
        </FormGroup>

        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label">
          Data de Entrada CEARC
        </ControlLabel>
        <FormControl
          id="dataEntradaCEARC"
          className="FormField__Input"
          placeholder="Data de Entrada CEARC"
          name="dataEntradaCEARC"
          onChange={this.handleChange}
        />
        </FormGroup>

        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label">
          Coordenador
        </ControlLabel>
        <FormControl
          id="coordenador"
          className="FormField__Input"
          placeholder="Coordenador"
          name="coordenador"
          onChange={this.handleChange}
        />
        </FormGroup>

        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label">
          Funcao
        </ControlLabel>
        <FormControl
          id="funcao"
          className="FormField__Input"
          placeholder="Funcao"
          name="funcao"
          onChange={this.handleChange}
        />
        </FormGroup>

        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label">
          Objeto
        </ControlLabel>
        <FormControl
          id="objeto"
          className="FormField__Input"
          placeholder="Objeto"
          name="objeto"
          onChange={this.handleChange}
        />
        </FormGroup>
        <button id="idBtn"className="FormField__Button mr-20" onClick = {this.handleSubmit}>
          Adicionar
        </button>
       </div>  
    );
  }
}
