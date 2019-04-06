import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import "./Add.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fichaTecId:(window.location.pathname).split("/")[2],
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

  handleSubmit1 = event => {
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

  handleSubmit2 = event => {
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
    axios.post(/*proxyurl + 'http://brandi.ipt.pt*/'/api/objetos/'+ this.state.fichaTecId +'/updateFT', { LCRM, CEARC, dataAberturaLCRM, dataAberturaCEARC, dataEntradaLCRM, dataEntradaCEARC, coordenador, funcao, objeto})
      .then(res => {
        console.log(res)
        this.props.history.push("/objetos");
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount(){
		if(window.location.pathname.split("/")[1] === "editar"){
			//const proxyurl = "http://cors-anywhere.herokuapp.com/";
      axios.get(/*proxyurl + 'http://brandi.ipt.pt/*/'api/objetos/'+ this.state.fichaTecId +'/consultarFT')
      .then((response) => {
        return response.data[0]
      })
      .then(data => {
        console.log(data)
        this.setState({ LCRM: data.LCRM });
        this.setState({ CEARC: data.CEARC });
        this.setState({ dataAberturaCEARC: data.dataAberturaCEARC });
        this.setState({ dataAberturaLCRM: data.dataAberturaLCRM });
        this.setState({ dataEntradaCEARC: data.dataEntradaCEARC });
        this.setState({ dataEntradaLCRM: data.dataEntradaLCRM });
        this.setState({ objeto: data.designacao });
        this.setState({ funcao: data.funcao });
        this.setState({ coordenador: data.nome });
      });
      document.getElementById("idBtn").onclick = this.handleSubmit2
      document.getElementById("idBtn").innerHTML = "Editar"
		}else{
      document.getElementById("idBtn").onclick = this.handleSubmit1
      document.getElementById("idBtn").innerHTML = "Adicionar"
    }
  }

  render() {

    return (
      <div>
        <FormGroup className="FormField">
        <ControlLabel className="FormField__Label">
        LCRM
        </ControlLabel>
        <FormControl
          value={this.state.LCRM}
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
          value={this.state.CEARC}
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
          value={this.state.dataAberturaLCRM}
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
          value={this.state.dataAberturaCEARC}
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
          value={this.state.dataEntradaLCRM}
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
          value={this.state.dataEntradaCEARC}
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
          value={this.state.coordenador}
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
          value={this.state.funcao}
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
          value={this.state.objeto}
          id="objeto"
          className="FormField__Input"
          placeholder="Objeto"
          name="objeto"
          onChange={this.handleChange}
        />
        </FormGroup>
        <button id="idBtn"className="FormField__Button mr-20">
        </button>
       </div>  
    );
  }
}
