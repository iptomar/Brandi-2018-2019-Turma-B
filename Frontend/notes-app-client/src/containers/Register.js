import React, { Component } from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import "./Register.css";
import "./navbar.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      Nome : "",
      username : "",
      password : "",
      email : "",
      tipo : "",
      Habilitacoes: "",
      NivProfissional : "" 
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

  handleSubmit = event => {
    event.preventDefault();

    let Nome = this.state.Nome;
    let username = this.state.username;
    let password = this.state.password;
    let email = this.state.email;
    let tipo = this.state.tipo;
    let Habilitacoes = this.state.Habilitacoes;
    let NivProfissional = this.state.NivProfissional;

    //const proxyurl = "http://cors-anywhere.herokuapp.com/";
    axios.post(/*proxyurl + 'http://brandi.ipt.pt*/'/api/register', { Nome, username, password, email, tipo, Habilitacoes, NivProfissional})
      .then(res => {
        console.log(res)
        this.props.history.push("/tecnicos");
      })
      .catch(err => {
        console.log(err);
        /*Alterar este alerta para outra coisa, alertas são bad guys ;)*/
        alert("fail")
      });
  }

  componentDidMount(){
    if(sessionStorage.getItem("loginState") !== "success"){
      this.props.history.push("/login");
    }
    if(sessionStorage.getItem("tipo") !== "admin"){
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
  }
  render(){
    return (
      <div className="bodydiv">

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
          <div className="registerform">
          
            <FormGroup className="FormField Fielddiv">
            <ControlLabel className="FormField__Label" htmlFor="name">
              Username
            </ControlLabel>
            <FormControl
              type="username"
              id="username"
              className="FormField__Input regField"
              placeholder="Insira o username"
              name="username"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup className="FormField Fielddiv">
            <ControlLabel className="FormField__Label">
              password
            </ControlLabel>
            <FormControl
              type="password"
              id="password"
              className="FormField__Input regField"
              placeholder="Insira a sua password"
              name="password"
              onChange={this.handleChange}
            />
            </FormGroup>

            <FormGroup className="FormField Fielddiv">
            <ControlLabel className="FormField__Label" htmlFor="email">
              Email
            </ControlLabel>
            <FormControl
              type="email"
              id="email"
              className="FormField__Input regField"
              placeholder="Insira o seu email"
              name="email"
              onChange={this.handleChange}
            />
            </FormGroup>

            <FormGroup className="FormField Fielddiv">
            <ControlLabel className="FormField__Label">
              tipo
            </ControlLabel>
            <FormControl
              id="tipo"
              className="FormField__Input regField"
              placeholder="Insira o seu tipo"
              name="tipo"
              onChange={this.handleChange}
            />
            </FormGroup>

            <FormGroup className="FormField Fielddiv">
            <ControlLabel className="FormField__Label">
              Habilitacoes
            </ControlLabel>
            <FormControl
              id="Habilitacoes"
              className="FormField__Input regField"
              placeholder="Insira as suas Habilitacoes"
              name="Habilitacoes"
              onChange={this.handleChange}
            />
            </FormGroup>

            <FormGroup className="FormField Fielddiv">
            <ControlLabel className="FormField__Label" htmlFor="email">
              Nome
            </ControlLabel>
            <FormControl
              id="Nome"
              className="FormField__Input regField"
              placeholder="Insira o seu Nome"
              name="Nome"
              onChange={this.handleChange}
            />
            </FormGroup>

            <FormGroup className="FormField Fielddiv">
            <ControlLabel className="FormField__Label">
              Nivel profissional
            </ControlLabel>
            <FormControl
              id="NivProfissional"
              className="FormField__Input regField"
              placeholder="Insira o seu nivel profissional"
              name="NivProfissional"
              onChange={this.handleChange}
            />
            </FormGroup>

            <button id="idBtn"className="FormField__Button mr-20 buttondiv" onClick = {this.handleSubmit}>
              Registar
            </button>
          </div>
       </div>
    );
  }
}
