import React, { Component } from "react";
import "./FichaTecnica.css";
import axios from 'axios';
import { CardDeck } from 'reactstrap';
export default class FichasTecnica extends Component {
  	constructor(props) {
    super(props);

    this.state ={ 
		isLoading: true,
		objetos:[]
	};
  }
	
componentDidMount(){
	

	//const proxyurl = "http://cors-anywhere.herokuapp.com/";
	axios.get(/*proxyurl + 'http://brandi.ipt.pt/*/'api/objetos')
	.then((response) => {
		return response.data
	})
	.then(data => {
		this.setState({objetos: data})
		for (var i = 0; i < this.state.objetos.length; i++) {

			// um tecnico do array
			var objeto = this.state.objetos[i];

			// nome do tecnico
			var nome = objeto.designacao;
			
			var deck = document.querySelector('#deck');
			
			var card = document.createElement('div');
			card.classList.add('card');
			card.classList.add('cardListObj');
			deck.appendChild(card);
			
			var image = document.createElement('img');
			image.setAttribute('src',require("./img/image.png"));
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

    return (
     <CardDeck id="deck" className="cardDeckListObj" > 
		</CardDeck>
    );
  }
}
