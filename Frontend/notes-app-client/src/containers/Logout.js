import React, { Component } from "react";
import "./Logout.css";
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logState: ""
    };
  }

  componentDidMount(){
    const loginState = sessionStorage.getItem("loginState");
    this.setState({ logState: loginState })
    alert(this.state.loginState);
    if(this.state.logstate === "success"){
      sessionStorage.setItem("loginState", "idle");
      //alert("logged out");
      return <Redirect to='/'/>
    }else{
      //alert("you are still logged in");
      return <Redirect to='/profile'/>
    }
  }

  render() {
    return (  
      <h1 id = "header">Log Out</h1>
    );
  }
}
