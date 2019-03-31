import React, { Component } from "react";
import "./FichaTecnica.css";
import axios from 'axios';
import { CardDeck, Card, CardBody, CardImg, CardTitle, CardText, CardFooter } from 'reactstrap';
export default class FichasTecnica extends Component {
  	constructor(props) {
    super(props);

    this.state = {
       isLoading: true,
       tecnicos:[]
    };
  }
componentDidMount(){	
  //const proxyurl = "http://cors-anywhere.herokuapp.com/";
  axios.get(/*proxyurl + 'http://brandi.ipt.pt*/'/api/tecnicos')
    .then((response) => {
      return response.data
    })
	  .then(data => {
      this.setState({tecnicos: data})
      console.log(data);
      document.getElementById("header1").innerHTML = this.state.tecnicos[0].nome;
      document.getElementById("header2").innerHTML = this.state.tecnicos[1].nome;
      document.getElementById("header3").innerHTML = this.state.tecnicos[2].nome;
    })
      
}
	render() {
    return (
      <CardDeck className="cardDeckListObj" > 
		  <Card className="cardListObj" >
			<CardImg className="imgListObj" variant="top" src={require('./image.png')} />
			<CardBody>
			  <CardTitle className="cardTitleListObj" id='header1'></CardTitle>
			</CardBody>
		  </Card>
		  <Card className="cardListObj">
			<CardImg className="imgListObj" variant="top" src={require('./image.png')} />
			<CardBody>
			  <CardTitle className="cardTitleListObj" id='header2'>Card title</CardTitle>
			</CardBody>
		  </Card>
		  <Card className="cardListObj">
			<CardImg className="imgListObj" variant="top" src={require('./image.png')} />
			<CardBody>
			  <CardTitle className="cardTitleListObj" id='header3'>Card title</CardTitle>
			</CardBody>
		  </Card>
		</CardDeck>
    );
  }
}
