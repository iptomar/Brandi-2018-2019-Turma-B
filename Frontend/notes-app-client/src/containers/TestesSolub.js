import React, { Component } from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import logo from './img/Logos.JPG';
import "./TestesSolub.css";
import "./navbar.css";

export default class TestesSolub extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { 
            isOpen: false
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
    }

  render() {
    return (
      <div className="principal">
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
    <div className="div4">
            <img alt="" src={logo}/>
            <h1 className="info"><b>Laboratório de Conservação e Restauro - Madeiras | Lab.CR-M |</b></h1>
            <h2><b>| Artefactos e Estruturas em Madeira | Mobiliário | Retabulística e Talha |</b></h2>
        </div>
        <div className="div1">
            <h1><b>TESTE DE EFICÁCIA DOS SOLVENTES NA LIMPEZA E SOLUBILIZAÇÃO DE ESTRATOS E SUJIDADE</b></h1>
            <hr />
        </div>

        <div className="div3">
            <h3 className="ident"><b>Identificação do Estrato/Sujidade: </b><input className="ident2"type="text" maxLength="50"/></h3>
            <h3 className="caract"><b>Características: </b><textarea cols={40} rows={10}/></h3> 
            <h3 input type="button" className="button">Seguinte</h3>
        </div>







        <div className="div4">
          <img alt="" src={logo}/>
          <h1 className="info"><b>Laboratório de Conservação e Restauro - Madeiras | Lab.CR-M |</b></h1>
        <h2><b>| Artefactos e Estruturas em Madeira | Mobiliário | Retabulística e Talha |</b></h2>
        </div>
        
    <div className="div1">
        <h1><b>TESTE DE EFICÁCIA DOS SOLVENTES NA LIMPEZA E SOLUBILIZAÇÃO DE ESTRATOS E SUJIDADE</b></h1>
        <hr />
    </div>
    <div className="div2">
        <table  align="center">
            <tr className="cab">
                <td>Solvente ou Mistura de Solventes</td>
                <td>Grau de Eficácia Na Solubilização</td>
                <td>Observações</td>
            </tr>
            <tr>
                <td><textarea rows="2" type="text" maxLength="50"/></td>
                <td><input className="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxLength="80"/></td>
            </tr>   
            <tr>
                <td><textarea rows="2" type="text" maxLength="50"/></td>
                <td><input className="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxLength="80"/></td>
            </tr>   
            <tr>
                <td><textarea rows="2" type="text" maxLength="50"/></td>
                <td><input className="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxLength="80"/></td>
            </tr>   
            <tr>
                <td><textarea rows="2" type="text" maxLength="50"/></td>
                <td><input className="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxLength="80"/></td>
            </tr>   
            <tr>
                <td><textarea rows="2" type="text" maxLength="50"/></td>
                <td><input className="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxLength="80"/></td>
            </tr>   
            <tr>
                <td><textarea rows="2" type="text" maxLength="50"/></td>
                <td><input className="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxLength="80"/></td>
            </tr>   
            <tr>
                <td><textarea rows="2" type="text" maxLength="50"/></td>
                <td><input className="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxLength="80"/></td>
            </tr>   
            <tr>
                <td><textarea rows="2" type="text" maxLength="50"/></td>
                <td><input className="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxLength="80"/></td>
            </tr>   
            
            
        </table>
    </div>
    <div className="div3">
       <h3 className="numero"><b>Folha do teste número: </b><input type="number" name="quantity"/></h3>
       <h3 className="data"><b>Data: </b><input type="date"/></h3>
       <h3 className="tecnico"><b>Técnico responsável: </b><input type="text" maxLength="30"/></h3>
       <h3 className="grau"><b>Graus de Eficácia no Processo de Solubilização dos Estratos:</b></h3>
       <h3 className="eficacia"><b> 1 - Muito Eficaz | 2 - Eficaz | 3 - Eficácia média | 4 - Pouco Eficaz | 5 - Eficária Nula</b></h3>
       <h3 input type="button" className="button">Guardar</h3>
    </div>
    </div>	
    );
  }
}