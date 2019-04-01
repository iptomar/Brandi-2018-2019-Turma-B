import React, { Component } from "react";
import "./FichaTecnica.css";
import axios from 'axios';
import { CardDeck, Card, CardBody, CardImg, CardTitle, CardText, CardFooter } from 'reactstrap';
export default class FichasTecnica extends Component {
  	constructor(props) {
    super(props);

    this.state ={ 
		isLoading: true,
		tecnicos:[]
	};
  }
	
componentDidMount(){
	
	axios.get('/api/tecnicos')
	.then((response) => {
		return response.data
	})
	.then(data => {
		this.setState({tecnicos: data})
		console.log(data);
		for (var i = 0; i < this.state.tecnicos.length; i++) {

			// um tecnico do array
			var tecnico = this.state.tecnicos[i];

			// nome do tecnico
			var nome = tecnico.nome;
			
			var deck = document.querySelector('#deck');
			
			var card = document.createElement('div');
			card.classList.add('card');
			card.classList.add('cardListObj');
			deck.appendChild(card);
			
			var image = document.createElement('img');
			image.setAttribute('src',require("./image.png"));
			image.classList.add('card-img');
			card.classList.add('imgListObj');
			card.appendChild(image);
			
			var body = document.createElement('div');
			body.classList.add('card-body');
			card.appendChild(body);
			
			var titulo = document.createElement('div');
			titulo.classList.add('card-title');
			card.classList.add('cardTitleListObj');
			body.appendChild(titulo);
			titulo.textContent = nome;
			
			
    	}
	})
}
	render() {

	const tecnicos = this.state;	
    return (
     <CardDeck id="deck" className="cardDeckListObj" > 
		</CardDeck>
    );
  }
}
