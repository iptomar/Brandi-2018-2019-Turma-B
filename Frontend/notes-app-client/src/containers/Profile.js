import React, { Component } from "react";
import "./Profile.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name : ""
    };
  }

  componentDidMount(){
    const sessionName = sessionStorage.getItem("username");
    this.setState({name: sessionName })
    document.getElementById("header").innerHTML = sessionName;
  }

  doLogout = event =>{
    this.props.history.push("/logout");
  }

  render() {

    return (
      <div className="Login">
        <h1 id = "header">test</h1>
        <button onClick = {this.doLogout} >Logout</button>
      </div>   
    );
  }
}
