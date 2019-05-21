import React, { Component } from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import "./AddAnalise.css";
import "./navbar.css";
import "./base.css";

export default class AnalisesSolvente extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { 
            isOpen: false,
            sujidade:"",
            data:"",
            caracteristicas:"",
            tecnico:"",
            peca:(window.location.pathname).split("/")[2]
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleChange = event => {

    }

    handleSubmit1 = event => {

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

        //const proxyurl = "http://cors-anywhere.herokuapp.com/";
        axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/tecnicosNome')
        .then((response) => {
            return response.data
        })
        .then(data => {
            let tecnicos = data;
            let tecnicosSel = document.getElementById('tecnicosSel');
            for(let i=0;i<tecnicos.length;i++){
                let option = document.createElement('option');
                option.text = tecnicos[i].nome;
                option.value = tecnicos[i].idTecnico;
                tecnicosSel.appendChild(option);
            }
        })
        .catch(error =>{
            console.log(error);
            let tecnicosSel = document.getElementById('tecnicosSel');
            let option = document.createElement('option');
            option.text = "ERRO A RECEBER TÉCNICOS";
            tecnicosSel.appendChild(option);
        })

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

        <Form className="AddAnaliseForm">

            <FormGroup>
            <Label for="sujArea" className="addAnTag">Sujidade</Label>
            <Input type="textarea" id="sujArea" placeholder="Sujidade..."/>
            </FormGroup>

            <FormGroup>
            <Label for="dataAn" className="addAnTag">Data</Label>
            <Input type="date" id="dataAn"/>
            </FormGroup>

            <FormGroup>
            <Label for="caracteristicasArea" className="addAnTag">Caracteristicas</Label>
            <Input type="textarea" id="caracteristicasArea" placeholder="Caracteristicas..."/>
            </FormGroup>

            <FormGroup>
                <Label for="tecnicosSel" className="addAnTag">Técnico</Label>
                <Input type="select" id="tecnicosSel">
                    <option value="" disabled selected>Selecionar técnico</option>
                </Input>
            </FormGroup>

            <Button>Adicionar</Button>

        </Form>

      </div>	
    );
  }
}