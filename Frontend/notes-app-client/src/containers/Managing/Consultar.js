import React, { Component } from "react";
import "./Consultar.css";

export default class Login extends Component {
  /*constructor(props) {
    super(props);

  }*/

  componentDidMount(){
    if(sessionStorage.getItem("loginState") !== "success"){
      this.props.history.push("/login");
    }
  }

  render() {

    return (
      <div >
        <h1>Consultar</h1>
      </div>   
    );
  }
}
