import React, { Component } from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import axios from 'axios';
import logo from './img/logos2.png';
import "./DetalhesAnalises.css";
import "./navbar.css";
import "./base.css";

export default class DetalhesAnalises extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { 
            isOpen: false,
            analiseID:(window.location.pathname).split("/")[2],
            //Ident. estrato
            analise_zero: "",
            //caracteristicas
            analise_one: "",
            //tecnico
            analise_two: "",
            //data
            analise_three: ""
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

    mudarAddTeste = event =>{
        this.props.history.push("/addTesteAnalise/"+ this.state.analiseID);
    }

    editarAnaliseStart = event =>{
        event.preventDefault();

        document.getElementById('tableTestes').style.visibility = "hidden";
        let butn = document.getElementById('btnEditAnl');
        butn.onclick = this.handleSubmitEditAnalise

        //Edit Identificacao do estrato/sujidade
        let tdIdentSujData = document.getElementById('tdIdentSujData');
        let txtarea1 = document.createElement('textarea');
        this.setState({
            analise_zero : tdIdentSujData.textContent
        }, function (){
            tdIdentSujData.textContent = "";
            txtarea1.id = "analise_zero";
            txtarea1.value = this.state.analise_zero;
            txtarea1.onchange = this.handleChange;
            txtarea1.cols = "60";
            tdIdentSujData.appendChild(txtarea1);
        });

        //Edit caracteristicas
        let tdcaractSujData = document.getElementById('tdcaractSujData');
        let txtarea2 = document.createElement('textarea');
        this.setState({
            analise_one : tdcaractSujData.textContent
        }, function (){
            tdcaractSujData.textContent = "";
            txtarea2.id = "analise_one";
            txtarea2.value = this.state.analise_one;
            txtarea2.onchange = this.handleChange;
            txtarea2.cols = "60";
            tdcaractSujData.appendChild(txtarea2);
        });

        //Edit tecnico
        const proxyurl = "http://cors-anywhere.herokuapp.com/";
        axios.get(proxyurl + 'http://brandi.ipt.pt/api/tecnicosNome')
        .then((response) => {
            return response.data
        })
        .then(data => {
            let tdtecnicoSujData = document.getElementById('tdtecnicoSujData');
            let tecnicos = data;
            for(let i=0; i<tecnicos.length; i++){
                if(tecnicos[i].nome === tdtecnicoSujData.textContent){
                    this.setState({
                        analise_two : tecnicos[i].idTecnico
                    }, function (){
                        tdtecnicoSujData.textContent = "";
                        let select = document.createElement('select');
                        select.id = "analise_two";
                        select.value = this.state.analise_two;
                        select.onchange = this.handleChange;
                        for(let j=0; j<tecnicos.length; j++){
                            let option = document.createElement('option');
                            option.text = tecnicos[j].nome;
                            option.value = tecnicos[j].idTecnico;
                            if(j === i){
                                option.selected = true;
                            }
                            select.appendChild(option);
                        }
                        tdtecnicoSujData.appendChild(select);
                    });
                }
            }
        })
        .catch(error =>{
            console.log(error);

        })

        //edit data
        let tddataSujData = document.getElementById('tddataSujData');
        let inp = document.createElement('input');
        inp.type = "date";
        this.setState({
            analise_three : tddataSujData.textContent
        }, function (){
            tddataSujData.textContent = "";
            inp.id = "analise_three";
            inp.value = this.state.analise_three;
            inp.onchange = this.handleChange;
            tddataSujData.appendChild(inp);
        });

    }

    handleSubmitEditAnalise = event =>{
        event.preventDefault();
        //console.log(this.state.analise_zero +'  '+ this.state.analise_one+'  '+this.state.analise_two+'  '+this.state.analise_three);

        let estratSuj = this.state.analise_zero;
        let caract = this.state.analise_one;
        let tecnico = this.state.analise_two;
        let dat = this.state.analise_three

        const proxyurl = "http://cors-anywhere.herokuapp.com/";
        axios.post(proxyurl + 'http://brandi.ipt.pt/api/analisesSolventes/edit', { estratSuj, caract, tecnico, dat })
        .then(res => {
            console.log(res)
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
        });
        
    }

    handleDelTeste = event =>{
        event.preventDefault();

        let analise = this.state.analiseID;
        let teste = event.currentTarget.value;

        const proxyurl = "http://cors-anywhere.herokuapp.com/";
        axios.post(proxyurl + 'http://brandi.ipt.pt/api/testesSolvente/delete', { analise, teste })
        .then(res => {
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
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

        const proxyurl = "http://cors-anywhere.herokuapp.com/";
        axios.get(proxyurl + 'http://brandi.ipt.pt/api/analisesSolventes/id/'+this.state.analiseID+'')
        .then((response) => {
            return response.data
        })
        .then(data => {
            let analise = data;

            let identSujData = document.getElementById('identSujData');
            let td1 = document.createElement('td');
            td1.id = "tdIdentSujData"
            td1.textContent = analise[0].sujidade;
            identSujData.appendChild(td1);

            let caractSujData = document.getElementById('caractSujData');
            let td2 = document.createElement('td');
            td2.id = "tdcaractSujData";
            td2.textContent = analise[0].caracteristicas;
            caractSujData.appendChild(td2);

            let tecnicoSujData = document.getElementById('tecnicoSujData');
            let td3 = document.createElement('td');
            td3.id = "tdtecnicoSujData"
            td3.textContent = analise[0].nomeTecnico;
            tecnicoSujData.appendChild(td3);

            let dataSujData = document.getElementById('dataSujData');
            let td4 = document.createElement('td');
            td4.id = "tddataSujData"
            td4.textContent = analise[0].data;
            dataSujData.appendChild(td4);

        })
        .catch(error =>{
            let identSujData = document.getElementById('identSujData');
            let td = document.createElement('td');
            td.textContent = "Dados Indisponiveis";
            td.rowSpan = 4;
            identSujData.appendChild(td);
            let but = document.getElementById('btnAddTst');
            but.style.visibility = "hidden";
            let butn = document.getElementById('btnEditAnl');
            butn.style.visibility = "hidden";
            

        })

        axios.get(proxyurl + 'http://brandi.ipt.pt/api/analisesSolventes/'+this.state.analiseID+'/testesSolvente')
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

                let actionsTD = document.createElement('td');
                actionsTD.className = "testesTableDef";
                let editAnchor = document.createElement('a');
                editAnchor.href = "#";
                //editAnchor.onclick =
                editAnchor.value = testes[i].idTeste;
                editAnchor.textContent = "Editar";
                actionsTD.appendChild(editAnchor);
                let separateAux = document.createElement('span');
                separateAux.textContent = " | ";
                actionsTD.appendChild(separateAux);
                let deleteAnchor = document.createElement('a');
                deleteAnchor.href = "#";
                deleteAnchor.onclick = this.handleDelTeste
                deleteAnchor.value = testes[i].idTeste;
                deleteAnchor.textContent = "Apagar";
                actionsTD.appendChild(deleteAnchor);
                tr.appendChild(actionsTD);

                tableTestes.appendChild(tr);
            }

            let trFinal = document.createElement('tr');
            let thFinal = document.createElement('th');
            thFinal.colSpan = 4;
            thFinal.textContent = "Graus de Eficácia no Processo de Solubilização dos Estratos:";
            trFinal.appendChild(thFinal);
            thFinal.className = "thFinal";
            tableTestes.appendChild(trFinal);

            let trFinal2 = document.createElement('tr');
            let thFinal2 = document.createElement('th');
            thFinal2.colSpan = 4;
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
            td.colSpan = 4;
            tr.appendChild(td);
            tableTestes.appendChild(tr);

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


        <div className="divInfo">
            <img alt="" src={logo}/>
        </div>

        <div className="divTitle">
            <h1 className="h1Title"><b>TESTE DE EFICÁCIA DOS SOLVENTES NA LIMPEZA E SOLUBILIZAÇÃO DE ESTRATOS E SUJIDADE</b></h1>
            <hr />
        </div>

        <div className="headerDiv">
            <table className="tableHeaderdet">
                <tr>
                    <th className="th1TableHeader" colSpan="4">
                       <button id="btnEditAnl" className=" pull-right btn btn-secondary" onClick={this.editarAnaliseStart}>Editar</button>
                    </th>
                </tr>
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
                <tr>  
                    <th className="th1TableTestes" colSpan="4">
                       <button id="btnAddTst" className=" pull-right btn btn-secondary" onClick={this.mudarAddTeste}>Adicionar</button>
                    </th>
                </tr>
                <tr className="testesTableDef">
                    <th className="testesTableDef">Solvente ou Mistura de Solventes</th>
                    <th className="testesTableDef">Grau de Eficácia Na Solubilização</th>
                    <th className="testesTableDef">Observações</th>
                    <th className="testesTableDef">Ações Disponiveis</th>
                </tr>
            </table>
        </div>

      </div>	
    );
  }
}