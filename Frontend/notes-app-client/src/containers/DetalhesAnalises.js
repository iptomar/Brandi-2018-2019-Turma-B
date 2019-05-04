import React, { Component } from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import axios from 'axios';
import logo from './img/logos2.png';
import "./DetalhesAnalises.css";
import "./navbar.css";

export default class DetalhesAnalises extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { 
            isOpen: false,
            analiseID:(window.location.pathname).split("/")[2],
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

        //const proxyurl = "http://cors-anywhere.herokuapp.com/";
        axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/analisesSolventes/id/'+this.state.analiseID+'')
        .then((response) => {
            return response.data
        })
        .then(data => {
            let analise = data;

            let identSujData = document.getElementById('identSujData');
            let td1 = document.createElement('td');
            td1.textContent = analise[0].sujidade;
            identSujData.appendChild(td1);

            let caractSujData = document.getElementById('caractSujData');
            let td2 = document.createElement('td');
            td2.textContent = analise[0].caracteristicas;
            caractSujData.appendChild(td2);

            let tecnicoSujData = document.getElementById('tecnicoSujData');
            let td3 = document.createElement('td');
            td3.textContent = analise[0].nomeTecnico;
            tecnicoSujData.appendChild(td3);

            let dataSujData = document.getElementById('dataSujData');
            let td4 = document.createElement('td');
            td4.textContent = analise[0].data;
            dataSujData.appendChild(td4);

        })
        .catch(error =>{
            let identSujData = document.getElementById('identSujData');
            let td = document.createElement('td');
            td.textContent = "Dados Indisponiveis";
            td.rowSpan = 4;
            identSujData.appendChild(td);
        })

        axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/analisesSolventes/'+this.state.analiseID+'/testesSolvente')
        .then((response) => {
            return response.data
        })
        .then(data => {
            let testes = data;
            let tableTestes = document.getElementById('tableTestes');
            for(let i = 0; i<testes.length; i++){
                let tr = document.createElement('tr');
                tr.className = "testesTableDef";

                let solventeTD = document.createElement('td');
                solventeTD.className = "testesTableDef";
                solventeTD.textContent = testes[i].solvente;
                tr.appendChild(solventeTD);

                let eficaciaTD = document.createElement('td');
                eficaciaTD.className = "testesTableDef";
                eficaciaTD.textContent = testes[i].eficacia;
                tr.appendChild(eficaciaTD);

                let observacaoTD = document.createElement('td');
                observacaoTD.className = "testesTableDef";
                observacaoTD.textContent = testes[i].observacao;
                tr.appendChild(observacaoTD);

                tableTestes.appendChild(tr);
            }

            let trFinal = document.createElement('tr');
            let thFinal = document.createElement('th');
            thFinal.colSpan = 3;
            thFinal.textContent = "Graus de Eficácia no Processo de Solubilização dos Estratos:";
            trFinal.appendChild(thFinal);
            thFinal.className = "thFinal";
            tableTestes.appendChild(trFinal);

            let trFinal2 = document.createElement('tr');
            let thFinal2 = document.createElement('th');
            thFinal2.colSpan = 3;
            thFinal2.textContent = "1 - Muito Eficaz | 2 - Eficaz | 3 - Eficácia média | 4 - Pouco Eficaz | 5 - Eficária Nula";
            trFinal2.appendChild(thFinal2);
            thFinal2.className = "thFinal";
            tableTestes.appendChild(trFinal2);


        })
        .catch(error =>{
            let tableTestes = document.getElementById('tableTestes');
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.textContent = "Não existem testes / Testes Indisponiveis"
            td.colSpan = 3;
            tr.appendChild(td);
            tableTestes.appendChild(tr);

        })

    }

  render() {
    return (
      <div className="bodyDetalhesAnalises">
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


        <div className="divInfo">
            <img alt="" src={logo}/>
        </div>

        <div className="divTitle">
            <h1 className="h1Title"><b>TESTE DE EFICÁCIA DOS SOLVENTES NA LIMPEZA E SOLUBILIZAÇÃO DE ESTRATOS E SUJIDADE</b></h1>
            <hr />
        </div>

        <div className="headerDiv">
            <table className="tableHeader">
                <tr id="identSujData">
                    <th className="identSuj">
                        <b>Identificação do Estrato/Sujidade: </b>
                    </th>
                </tr>
                <tr id="caractSujData">
                    <th className="caractSuj">
                        <b>Características: </b>
                    </th>
                </tr>
                <tr id="tecnicoSujData">
                    <th className="tecnicoSuj">
                        <b>Tecnico: </b>
                    </th>
                </tr>
                <tr id="dataSujData">
                    <th className="dataSuj">
                        <b>Data: </b>
                    </th>
                </tr>
            </table>
        </div>

        <div className="testesDiv">
            <table id="tableTestes" className="testesTable">
                <tr className="testesTableDef">
                    <th className="testesTableDef">Solvente ou Mistura de Solventes</th>
                    <th className="testesTableDef">Grau de Eficácia Na Solubilização</th>
                    <th className="testesTableDef">Observações</th>
                </tr>
            </table>
        </div>

      </div>	
    );
  }
}