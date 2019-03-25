import React, { Component } from "react";
import "./Logout.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logState: "testLogState"
    };
  }

  componentDidMount(){
    const loginState = sessionStorage.getItem("loginState");
    console.log(loginState);
    if(loginState === "success"){
      sessionStorage.setItem("loginState", "idle");
      alert("Logged out");
      this.props.history.push("/");
      
    }else{
      alert("You are not logged in");
      this.props.history.push("/login");
    }
  }
  render(){
    return<div></div>
  }
}
