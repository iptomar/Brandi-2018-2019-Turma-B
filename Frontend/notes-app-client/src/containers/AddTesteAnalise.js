import React, { Component } from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import "./AddTesteAnalise.css";
import "./navbar.css";
import "./base.css";

export default class DetalhesAnalises extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { 
            isOpen: false,
            analiseID:(window.location.pathname).split("/")[2],
            solvente: "",
            grau: "",
            obs: ""
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

        let solvente = this.state.solvente;
        let eficacia = this.state.grau;
        let obs = this.state.obs;
        let analise = this.state.analiseID;

        //const proxyurl = "http://cors-anywhere.herokuapp.com/";
        axios.post(/*proxyurl + 'http://brandi.ipt.pt*/'/api/testesSolvente/new', { solvente, eficacia, obs, analise})
        .then(res => {
        console.log(res)
        this.props.history.push("/detalhesAnalises/"+ this.state.analiseID);
        })
        .catch(err => {
        console.log(err);
        });

    }

    mudarAddTeste = event =>{
        this.props.history.push("/addTesteAnalise/"+ this.state.analiseID);
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

        <div >
            <Form className="addTesteForm">
                <FormGroup>
                    <Label for="solvente">Solvente ou Mistura de Solventes</Label>
                    <Input type="text" id="solvente" value={this.state.solvente}  onChange={this.handleChange}></Input>
                </FormGroup>

                <FormGroup>
                    <Label for="grau">Grau de Eficácia na Solubilização</Label>
                    <Input type="select" id="grau" value={this.state.grau}  onChange={this.handleChange}>
                        <option disabled selected></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="obs">Observações</Label>
                    <Input type="textarea" placeholder="Observações..." id="obs" value={this.state.obs}  onChange={this.handleChange}></Input>
                </FormGroup>

                <Button onClick={this.handleSubmit}>Adicionar</Button>

            </Form>
        </div>

      </div>	
    );
  }
}