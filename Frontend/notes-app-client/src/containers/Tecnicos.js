import React, { Component } from "react";
import "./Tecnicos.css";
import axios from 'axios';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap';

export default class Tecnicos extends Component {
	constructor(props) {
		super(props);

		this.state = { 
		
		};
  }

componentDidMount(){
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
				<Navbar className="navbarTec" dark expand="sm">
          		<NavbarBrand className="navbarbrandTec" href="/">Conservação e Restauro</NavbarBrand>
          		<NavbarToggler onClick={this.toggle} />
          		<Collapse isOpen={this.state.isOpen} navbar>
            	<Nav className="ml-auto" navbar>
	            	<NavItem>
	                	<NavLink href="/">Home</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink href="/menu">Menu</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink href="/profile">Profile</NavLink>
	             	</NavItem>
	            	<NavItem>
	                	<NavLink href="/logout">Logout</NavLink>
	             	</NavItem>
            	</Nav>
				</Collapse>
			</Navbar> 
			</div>
		);
	}
}
