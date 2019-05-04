import React, { Component } from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import axios from 'axios';
import logo from './img/logos2.png';
import "./AnalisesSolvente.css";
import "./navbar.css";

export default class AnalisesSolvente extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { 
            isOpen: false,
            fichaTecId:(window.location.pathname).split("/")[2]
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
        axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/objetos/'+this.state.fichaTecId+'/analisesSolventes')
        .then((response) => {
            return response.data
        })
        .then(data => {
            let an = data;
            let table = document.getElementById('tableAnalises');
            for(let i=0;i<an.length;i++){
                let tr = document.createElement('tr');
                let sujidade = document.createElement('td');
                sujidade.textContent = an[i].sujidade;
                tr.appendChild(sujidade);

                let data = document.createElement('td');
                data.textContent = an[i].data;
                tr.appendChild(data);

                let tecnico = document.createElement('td');
                tecnico.textContent = an[i].nomeTecnico;
                tr.appendChild(tecnico);
                table.appendChild(tr);

                let info = document.createElement('a');
                info.href = "http://brandi.ipt.pt/detalhesAnalises/"+an[i].idAnalise+"";
                //info.href = "http://localhost:3000/detalhesAnalises/"+an[i].idAnalise+"";
                info.textContent = "Detalhes"
                tr.appendChild(info);
                table.appendChild(tr);
            }
        })
        .catch(error =>{
            console.log(error);
            let table = document.getElementById('tableAnalises');
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.colSpan = 4;
            td.textContent = "Não existem dados disponiveis";
            tr.appendChild(td);
            table.appendChild(tr);
        })

    }

  render() {
    return (
      <div className="bodyAnalises">
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

        <div className="analisesTableDiv">
            <table id = "tableAnalises" className="analisesTable">
                <tr>
                    <th>Sujidade</th>
                    <th>data</th>
                    <th>tecnico</th>
                    <th>Info</th>
                </tr>
            </table>
        </div>

      </div>	
    );
  }
}