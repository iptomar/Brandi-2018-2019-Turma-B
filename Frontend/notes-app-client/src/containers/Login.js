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
    axios.post(/*proxyurl + 'http://brandi.ipt.pt*/'/api/auth', { username, password })
      .then(res => {
        console.log(res);
        console.log(res.data);

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

    if (this.state.loginState === "error") {
        alert("Wrong login information")
    } else if (this.state.loginState === "success"){
      sessionStorage.setItem("username", this.state.username);
      sessionStorage.setItem("loginState", this.state.loginState);
      return <Redirect to='/profile' />
    }

    return (
      /*
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>*/
      <Router>
        <div className="App">
          <div className="App__Aside" />
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
                  <div className="FormField">
                    <button className="FormField__Button mr-20" disabled={!this.validateForm()} type="submit">
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
