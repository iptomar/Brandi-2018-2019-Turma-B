import React, { Component } from "react";
import "./Menu.css";

export default class Login extends Component {
  /*constructor(props) {
    super(props);

  }*/

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

  Profile = event =>{
    this.props.history.push("/profile");
  }

  FichTec = event =>{
    this.props.history.push("/fichatecnica");
  }

  render() {

    return (
      <div >
        <button onClick = {this.Add}>Adicionar ficha tecnica</button><br/>
        <button onClick = {this.Consultar}>Consultar ficha tecnica</button><br/>
        <button onClick = {this.Remove}>Remover ficha tecnica</button><br/>
        <button onClick = {this.Edit}>Editar ficha tecnica</button><br/>
        <button onClick = {this.Profile}>Profile</button><br/>
        <button onClick = {this.FichTec}>Ficha Tecnica</button>
      </div>   
    );
  }
}
