import React, { Component } from "react";
import { 
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
Form,
FormGroup, 
Label,
Input,
Button} from "reactstrap";
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

  goBack = event => {
    if(window.location.pathname.split("/")[1] === "editar"){
      this.props.history.push("/fichatecnica/" + this.state.fichaTecId);
    }else{
      this.props.history.push("/objetos");
    }
  }

  componentDidMount(){
    if(sessionStorage.getItem("loginState") === "idle" || sessionStorage.getItem("loginState") === null){
      this.props.history.push("/login");
    }


		if(window.location.pathname.split("/")[1] === "editar"){
			//const proxyurl = "http://cors-anywhere.herokuapp.com/";
      axios.get(/*proxyurl + 'http://brandi.ipt.pt/*/'/api/objetos/'+ this.state.fichaTecId +'/consultarFT')
      .then((response) => {
        return response.data[0]
      })
      .then(data => {
        console.log(data)
        this.setState({ LCRM: data.LCRM });
        this.setState({ CEARC: data.CEARC });
        this.setState({ dataAberturaCEARC: data.dataAberturaCEARC.substring(0,10) });
        this.setState({ dataAberturaLCRM: data.dataAberturaLCRM.substring(0,10) });
        this.setState({ dataEntradaCEARC: data.dataEntradaCEARC.substring(0,10) });
        this.setState({ dataEntradaLCRM: data.dataEntradaLCRM.substring(0,10) });
        this.setState({ objeto: data.designacao });
        this.setState({ funcao: data.funcao });
        this.setState({ coordenador: data.nome });
      });
      document.getElementById("btAdd").onclick = this.handleSubmit2
      document.getElementById("btAdd").innerHTML = "Editar"
		}else{
      document.getElementById("btAdd").onclick = this.handleSubmit1
      document.getElementById("btAdd").innerHTML = "Adicionar"
    }
  }

  render() {

    return (
      <div className="editFT">
        <Navbar className="navbarFT" dark expand="sm">
              <NavbarBrand className="navbarbrandFT" href="/">Conservação e Restauro</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink onClick={this.goBack} href="">Back</NavLink>
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
        <Form className="formFT">
          <FormGroup>
            <Label for="objeto">Objeto</Label>
            <Input type="objeto" name="objeto" id="objeto" value={this.state.objeto} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="CEARC">CEARC</Label>
            <Input type="CEARC" name="CEARC" id="CEARC" value={this.state.CEARC} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="LCRM">LCRM</Label>
            <Input type="LCRM" name="LCRM" id="LCRM" value={this.state.LCRM} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="dataAberturaCEARC">Data de abertura do processo CEARC</Label>
            <Input type="dataAberturaCEARC" name="dataAberturaCEARC" id="dataAberturaCEARC" value={this.state.dataAberturaCEARC}  onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="dataAberturaLCRM">Data de abertura do processo LCRM</Label>
            <Input type="dataAberturaLCRM" name="dataAberturaLCRM" id="dataAberturaLCRM" value={this.state.dataAberturaLCRM} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="dataEntradaCEARC">Data de entrada no CEARC</Label>
            <Input type="dataEntradaCEARC" name="dataEntradaCEARC" id="dataEntradaCEARC" value={this.state.dataEntradaCEARC}  onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="dataEntradaLCRM">Data de entrada no LCRM</Label>
            <Input type="dataEntradaLCRM" name="dataEntradaLCRM" id="dataEntradaLCRM" value={this.state.dataEntradaLCRM} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="coordenador">Nome do responsável</Label>
            <Input type="coordenador" name="coordenador" id="coordenador" value={this.state.coordenador}  onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="funcao">Funções do responsável</Label>
            <Input type="funcao" name="funcao" id="funcao" value={this.state.funcao}  onChange={this.handleChange}/>
          </FormGroup>
          <Button className="pull-right" id="btAdd"></Button>
        </Form>
       </div>  
    );
  }
}
