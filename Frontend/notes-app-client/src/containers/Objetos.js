import React, { Component } from "react";
import "./Objetos.css";
import axios from 'axios';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
Button} from 'reactstrap';
export default class Objetos extends Component {
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
	if(sessionStorage.getItem("loginState") === "idle"){
		this.props.history.push("/login");
	}

	//const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(/*proxyurl + 'http://brandi.ipt.pt/*/'/api/objetos')
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
			card.id = objeto.idObjeto;
			card.classList.add('card');
			card.classList.add('cardObj');
			card.classList.add("m-3");
			card.addEventListener('click', function(){
				propsHistory.push("/fichatecnica/"+this.id);
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
			
			axios.get(/*proxyurl + 'http://brandi.ipt.pt/*/'/api/objetos/'+objeto.idObjeto+'/imagens')
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
			});
    	}
	})
}
	render() {

    return (
        <div className="pageObj">
	    	<Navbar className="navbarObj" dark expand="sm">
          		<NavbarBrand className="navbarbrandObj" href="/">Conservação e Restauro</NavbarBrand>
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

		    <div id="grid" className="container">
				<Button className="btAddObj pull-right" onClick = {this.addFt}>Adicionar</Button>
		        <div id="row1" className="row"></div>
		    </div>
	    </div>
    );
  }
}
