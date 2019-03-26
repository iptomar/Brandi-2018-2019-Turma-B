import React, { Component } from "react";
import "./Menu.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

  }

  Add = event =>{
    this.props.history.push("/add");
  }

  Consultar = event =>{
    this.props.history.push("/consultar");
  }

  Remove = event =>{
    this.props.history.push("/remove");
  }

  Edit = event =>{
    this.props.history.push("/edit");
  }

  render() {

    return (
      <div >
        <button onClick = {this.Add}>Adicionar ficha tecnica</button>
        <button onClick = {this.Consultar}>Consultar ficha tecnica</button>
        <button onClick = {this.Remove}>Remover ficha tecnica</button>
        <button onClick = {this.Edit}>Editar ficha tecnica</button>
      </div>   
    );
  }
}
