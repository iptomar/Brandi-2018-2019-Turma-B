import React, { Component } from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import axios from 'axios';
import logo from './img/logos2.png';
import "./FolhaDeObra.css";
import "./navbar.css";
import "./base.css";

export default class DetalhesAnalises extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { 
            isOpen: false,
            pecaID:(window.location.pathname).split("/")[2],
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

        //const proxyurl = "http://cors-anywhere.herokuapp.com/";
        axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/peca/'+this.state.pecaID+'/folhaobraHeader')
        .then((response) => {
            return response.data
        })
        .then(data => {
            let header = data;
            let nProcessoObra = document.getElementById('nProcessoObra');
            nProcessoObra.textContent = header[0].processoCEARC;
            let designacaoProcObra = document.getElementById('designacaoProcObra');
            designacaoProcObra.textContent = header[0].peca;

        })
        .catch(error =>{
            let nProcessoObra = document.getElementById('nProcessoObra');
            nProcessoObra.textContent = "ERRO";
            let designacaoProcObra = document.getElementById('designacaoProcObra');
            designacaoProcObra.textContent = "ERRO";

        })

        axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/peca/'+this.state.pecaID+'/folhaobra')
        .then((response) => {
            return response.data
        })
        .then(data => {
            let procedimentos = data;
            let FOTable = document.getElementById('FOTableID');
            for(let i=0; i<procedimentos.length; i++){
                let tr = document.createElement('tr');

                let dataTD = document.createElement('td');
                dataTD.textContent = procedimentos[i].data;
                tr.appendChild(dataTD);

                let designacaoTD = document.createElement('td');
                designacaoTD.textContent = procedimentos[i].designacao;
                tr.appendChild(designacaoTD);

                let materiaisTD = document.createElement('td');
                for(let j=0;j<procedimentos[i].materiais.length; j++){
                    let matTR = document.createElement('tr');
                    let matTH = document.createElement('th');
                    matTH.textContent = procedimentos[i].materiais[j].material;
                    matTR.appendChild(matTH);
                    materiaisTD.appendChild(matTR);
                }
                tr.appendChild(materiaisTD);

                let quantidadesTD = document.createElement('td');
                for(let j=0;j<procedimentos[i].materiais.length; j++){
                    let quantTR = document.createElement('tr');
                    let quantTH = document.createElement('th');
                    quantTH.textContent = procedimentos[i].materiais[j].quantidade;
                    if(quantTH.textContent === ""){
                        quantTH.textContent = "-";
                    }
                    quantTR.appendChild(quantTH);
                    quantidadesTD.appendChild(quantTR);
                }
                tr.appendChild(quantidadesTD);

                let duracaoTD = document.createElement('td');
                duracaoTD.textContent = procedimentos[i].duracao;
                tr.appendChild(duracaoTD);

                let tecnicoTD = document.createElement('td');
                tecnicoTD.textContent = procedimentos[i].nomeTecnico;
                tr.appendChild(tecnicoTD);

                let observacoesTD = document.createElement('td');
                observacoesTD.textContent = procedimentos[i].observacoes;
                tr.appendChild(observacoesTD);

                FOTable.appendChild(tr);
            }

        })
        .catch(error =>{
            console.log(error);
            let FOTable = document.getElementById('FOTableID');
            let tr = document.createElement('tr');
            let th = document.createElement('th');
            th.textContent = "Não foram encontrados procedimentos";
            th.colSpan = 7;
            tr.appendChild(th);
            FOTable.appendChild(tr);
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


        <div className="divInfoFO">
            <img alt="" src={logo}/>
        </div>

        <div className="FOHeader">
            <table id="FOHeaderTableID" className="FOHeaderTable">
                <tr>
                    <th><b>n.º processo:</b></th>
                    <td id="nProcessoObra"></td>
                    <th><b>designação: </b></th>
                    <td id="designacaoProcObra"></td>
                </tr>
            </table>
        </div>

        <div className="divFOTable">
            <table id="FOTableID" className="FOTable">
                <tr>
                    <th>data</th>
                    <th>designação do procedimento</th>
                    <th>materiais e produtos</th>
                    <th>quantidades</th>
                    <th>duração(h.min)</th>
                    <th>técnico</th>
                    <th>observações</th>
                </tr>
            </table>
        </div>

      </div>	
    );
  }
}