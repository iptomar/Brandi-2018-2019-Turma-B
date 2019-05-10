import React, { Component } from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import axios from 'axios';
import "./Pecas.css";
import "./navbar.css";
import "./base.css";
export default class Obras extends Component {
	constructor(props) {
	    super(props);

		this.toggle = this.toggle.bind(this);
		this.state ={ 
			isLoading: true,
			isOpen: false,
			objetos:[],
			imagens:[]
		};
  }

toggle() {
	this.setState({
		isOpen: !this.state.isOpen
	});
}

addFt = event => {
	this.props.history.push("/adicionar")
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

	const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(proxyurl + 'http://brandi.ipt.pt/api/obras')
	.then((response) => {
		return response.data
	})
	.then(data => {
		this.setState({objetos: data})
		let propsHistory = this.props.history;
		for (var i = 1; i < this.state.objetos.length+1; i++) {
			
			// um objeto do array
			let objeto = this.state.objetos[i-1];
			
			// designação do objeto
			let nome = objeto.designacao;
			
			let deck = document.querySelector('#row1');
			deck.classList.add("deckObj");
			
			let col = document.createElement('div');
			col.classList.add('col');
			col.classList.add('colObj');
			col.classList.add("col-xs-12");
			col.classList.add("col-sm-6");
			col.classList.add("col-md-4");
			col.classList.add("col-lg-3");
			col.classList.add("d-flex");
			col.classList.add("align-items-stretch");
			deck.appendChild(col);

			let card = document.createElement('div');
			card.id = objeto.idObra;
			card.classList.add('card');
			card.classList.add('cardObj');
			card.classList.add("m-3");
			card.addEventListener('click', function(){
				propsHistory.push("/pecas/"+this.id);
			});
			col.appendChild(card);
			
			let image = document.createElement('img');
			image.setAttribute('alt','alt');
			image.classList.add('card-img');
			image.classList.add('imgObj');
			image.classList.add('img-fluid');
			card.appendChild(image);
		
			let body = document.createElement('div');
			body.classList.add('card-body');
			body.classList.add('bodyObj');
			card.appendChild(body);

			let titulo = document.createElement('div');
			titulo.classList.add('card-title');
			titulo.classList.add('titleObj');
			titulo.textContent = nome;
			body.appendChild(titulo);
			
      /*axios.get(proxyurl + 'http://brandi.ipt.pt/api/objetos/'+objeto.idObjeto+'/imagens')
      .then((response) => {
				return response.data
			})		
			.then(data => {
				this.setState({imagens: data})
				
				let imgname = this.state.imagens[0].imagem;
				let imgpath = './img/'+ imgname;
				image.setAttribute('src',require(""+imgpath));
			})
			.catch(err => {
				image.setAttribute('src',require("./img/img.png"));				
			});*/
      image.setAttribute('src',require("./img/img.png"));
    }
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
		    <div id="grid" className="container">
				<Button className="btAddObj pull-right" onClick = {this.addFt}>Adicionar</Button>
		        <div id="row1" className="row"></div>
		    </div>
	    </div>
    );
  }
}
