import React, { Component } from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import axios from 'axios';
import "./Tecnicos.css";
import "./navbar.css";

export default class Tecnicos extends Component {
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

	if(sessionStorage.getItem("tipo") !== "admin"){
		this.props.history.push("/menu");
	}

	let main = document.getElementById("main")

	let divInic = document.createElement("div");
	divInic.id = "grid";
	divInic.className = "container"

	let divSec = document.createElement("div");
	divSec.id = "row1";
	divSec.className = "row"

	divInic.appendChild(divSec);
	main.appendChild(divInic);
	
	//const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/tecnicos/')
	.then((response) => {
		return response.data;
	})
	.then(data => {
		let propsHistory = this.props.history;
		for (var i = 1; i < data.length+1; i++) {
			
			// um objeto do array
			let user = data[i-1];
			
			// designação do objeto
			let nome = user.nome;
			
			let deck = document.querySelector('#row1');
			deck.classList.add("deckTec");
			
			let col = document.createElement('div');
			col.classList.add('col');
			col.classList.add('colTec');
			col.classList.add("col-xs-12");
			col.classList.add("col-sm-6");
			col.classList.add("col-md-4");
			col.classList.add("col-lg-3");
			col.classList.add("d-flex");
			col.classList.add("align-items-stretch");
			deck.appendChild(col);

			let card = document.createElement('div');
			card.id = user.username
			card.classList.add('card');
			card.classList.add('cardTec');
			card.classList.add("m-3");
			card.addEventListener('click', function(){
				propsHistory.push("/profile/" + this.id);
			});
			col.appendChild(card);
			
			let image = document.createElement('img');
			image.setAttribute('alt','alt');
			image.classList.add('card-img');
			image.classList.add('imgTec');
			image.classList.add('img-fluid');
			card.appendChild(image);
		
			let body = document.createElement('div');
			body.classList.add('card-body');
			body.classList.add('bodyTec');
			card.appendChild(body);

			let titulo = document.createElement('div');
			titulo.classList.add('card-title');
			titulo.classList.add('titleTec');
			titulo.textContent = nome;
			body.appendChild(titulo);
		}
	})
	.catch(err => {

	});
	
}
	render() {
    return (
			<div id="main" className="pageObj">
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
			</div>
		);
	}
}
