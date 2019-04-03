import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Redirect } from 'react-router-dom'
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loginState: "idle"
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({ loginState: 'loggingIn' })
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ loginState: 'loggingIn' })

    const username = this.state.username

    const password = this.state.password

    //const proxyurl = "http://cors-anywhere.herokuapp.com/";
    axios.post(/*proxyurl + 'http://brandi.ipt.pt/*/'api/auth', { username, password })
      .then(res => {
        if(res.data === "Incorrect Username and/or Password!"){
          this.setState({ loginState: 'error' })
        }else{
          this.setState({ loginState: 'success' })
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {

    let alertBox = document.getElementById("alertBox");
    if(alertBox != null){
      document.getElementById("divBtn").removeChild(alertBox);
    }
    if (this.state.loginState === "error") {
      let x = document.createElement("div");
      x.className="alert alert-danger";
      x.id = "alertBox"
      let y = document.createElement("strong")
      y.innerText = "Wrong username/password";
      x.appendChild(y);
      document.getElementById("divBtn").appendChild(x);
    } else if (this.state.loginState === "success"){
      sessionStorage.setItem("username", this.state.username);
      sessionStorage.setItem("loginState", this.state.loginState);
      return <Redirect to='/menu' />
    }

    return (
      <Router>
        <div className="App">
          <div className="App__Aside">
            <img className= "estt" src={require('./img/estt.png')}></img><br></br>
            <img className= "icr" src={require('./img/lcr.png')}></img>
          </div>
          <div className="App__Form">
            <div className="FormTitle">
              <Link to="/login" className="FormTitle__Link ">
                Iniciar Sessao
              </Link>
            </div>
            <Route exact path="/login">
              <div className="FormCenter">
                <form className="FormField " onSubmit={this.handleSubmit}>
                  <FormGroup className="FormField">
                    <ControlLabel className="FormField__Label" htmlFor="name">
                      Username
                    </ControlLabel>
                    <FormControl
                      type="username"
                      id="username"
                      value={this.state.username}
                      className="FormField__Input"
                      placeholder="Insira o username"
                      name="username"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup className="FormField">
                    <ControlLabel className="FormField__Label" htmlFor="email">
                      password
                    </ControlLabel>
                    <FormControl
                      type="password"
                      value={this.state.password}
                      id="password"
                      className="FormField__Input"
                      placeholder="Insira a sua password"
                      name="password"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <div id="divBtn" className="FormField">
                    <button id="idBtn"className="FormField__Button mr-20" disabled={!this.validateForm()} type="submit">
                      Iniciar sessao
                    </button>
                  </div>
                </form>
              </div>
            </Route>
          </div>
        </div>
      </Router>
    );
  }
}
