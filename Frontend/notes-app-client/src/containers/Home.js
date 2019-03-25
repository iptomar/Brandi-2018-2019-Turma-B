import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  componentDidMount(){
    sessionStorage.setItem("loginState", "idle");
  }
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home</h1>
          <p>Home page</p>
        </div>
      </div>
    );
  }
}
