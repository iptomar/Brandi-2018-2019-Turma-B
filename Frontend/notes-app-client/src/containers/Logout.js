import React, { Component } from "react";
import axios from 'axios';
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
    if(loginState === "success"){
      sessionStorage.setItem("loginState", "idle");
      alert("Logged out");
      this.props.history.push("/");
      
    }else{
      alert("You are not logged in");
      this.props.history.push("/login");
    }

    //const proxyurl = "http://cors-anywhere.herokuapp.com/";
    axios.get(/*proxyurl + 'http://brandi.ipt.pt/*/'/api/logout')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
  }
  render(){
    return<div></div>
  }
}
