import React, { Component } from "react";
import {Form, Input, FormGroup, Label, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import axios from 'axios';
import "./Add.css";
import "../navbar.css";
import "../base.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      obraId:(window.location.pathname).split("/")[2],
      designacao:"",
      LCRM:"",
      CEARC:"",
      dataAberturaLCRM:"",
      dataAberturaCEARC:"",
      dataEntradaLCRM:"",
      dataEntradaCEARC:"",
    };
  }

 toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit1 = event => {
    event.preventDefault();

    let designacao = this.state.designacao;
    let LCRM = this.state.LCRM;
    let CEARC = this.state.CEARC;
    let dataAberturaLCRM = this.state.dataAberturaLCRM;
    let dataAberturaCEARC = this.state.dataAberturaCEARC;
    let dataEntradaLCRM = this.state.dataEntradaLCRM;
    let dataEntradaCEARC = this.state.dataEntradaCEARC;

    //const proxyurl = "http://cors-anywhere.herokuapp.com/";
    axios.post(/*proxyurl + 'http://brandi.ipt.pt*/'/api/obra/new', { designacao, LCRM, CEARC, dataAberturaLCRM, dataAberturaCEARC, dataEntradaLCRM, dataEntradaCEARC})
      .then(res => {
        console.log(res)
        this.props.history.push("/obras");
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSubmit2 = event => {
    event.preventDefault();

    let designacao = this.state.designacao;
    let LCRM = this.state.LCRM;
    let CEARC = this.state.CEARC;
    let dataAberturaLCRM = this.state.dataAberturaLCRM;
    let dataAberturaCEARC = this.state.dataAberturaCEARC;
    let dataEntradaLCRM = this.state.dataEntradaLCRM;
    let dataEntradaCEARC = this.state.dataEntradaCEARC;

    //const proxyurl = "http://cors-anywhere.herokuapp.com/";
    axios.post(/*proxyurl + 'http://brandi.ipt.pt*/'/api/obras/'+ this.state.obraId +'/update', { designacao, LCRM, CEARC, dataAberturaLCRM, dataAberturaCEARC, dataEntradaLCRM, dataEntradaCEARC})
      .then(res => {
        console.log(res)
        this.props.history.push("/obras");
      })
      .catch(err => {
        console.log(err);
      });
  }

  goBack = event => {
    if(window.location.pathname.split("/")[1] === "editar"){
      this.props.history.push("/pecas/" + this.state.obraId);
    }else{
      this.props.history.push("/obras");
    }
  }

  componentDidMount(){
    if(sessionStorage.getItem("loginState") !== "success"){
      this.props.history.push("/login");
    }

    //const proxyurl = "http://cors-anywhere.herokuapp.com/";
    axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/checkLogin')
    .catch(error =>{
      this.props.history.push("/logout");
    });

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

		if(window.location.pathname.split("/")[1] === "editar"){
			//const proxyurl = "http://cors-anywhere.herokuapp.com/";
      axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/obras/id/'+ this.state.obraId)
      .then((response) => {
        return response.data[0]
      })
      .then(data => {
        console.log(data)
        this.setState({ designacao: data.designacao });
        this.setState({ LCRM: data.LCRM });
        this.setState({ CEARC: data.CEARC });
        this.setState({ dataAberturaCEARC: data.dataAberturaCEARC.substring(0,10) });
        this.setState({ dataAberturaLCRM: data.dataAberturaLCRM.substring(0,10) });
        this.setState({ dataEntradaCEARC: data.dataEntradaCEARC.substring(0,10) });
        this.setState({ dataEntradaLCRM: data.dataEntradaLCRM.substring(0,10) });
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
      <div className="bodydiv">
        <Navbar dark className="topnavbar" expand="sm">
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
        <Form className="formFT">
          <FormGroup>
            <Label for="designacao">Designacao</Label>
            <Input type="designacao" name="designacao" id="designacao" value={this.state.designacao} onChange={this.handleChange}/>
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
          <Button className="pull-right" id="btAdd"></Button>
        </Form>
       </div>  
    );
  }
}
