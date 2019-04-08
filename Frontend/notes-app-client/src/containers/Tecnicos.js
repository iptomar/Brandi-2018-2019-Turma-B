import React, { Component } from "react";
import "./Tecnicos.css";
import axios from 'axios';
import {Button} from 'reactstrap';

export default class Tecnicos extends Component {
	constructor(props) {
		super(props);

		this.state = { 
		
		};
  }

componentDidMount(){
	//const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/tecnicos/')
	.then((response) => {
		return response.data;
	})
	.then(data => {
		for (var i = 1; i < data.length+1; i++) {
			
			// um objeto do array
			let user = data[i-1];
			
			// designação do objeto
			let nome = user.nome;
			
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
			card.id = user.idTecnico;
			card.classList.add('card');
			card.classList.add('cardObj');
			card.classList.add("m-3");
			card.addEventListener('click', function(){
				this.props.history.push("/tecnicos/"+this.id);
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
		}
	})
	.catch(err => {

	});
}
	render() {
    return (
			<div id="grid" className="container">
			<Button className="btAddObj pull-right" onClick = {this.addFt}>Adicionar</Button>
					<div id="row1" className="row"></div>
			</div>
		);
	}
}
