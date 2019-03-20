import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Redirect } from 'react-router-dom'
import axios from "axios";

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
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ loginState: 'loggingIn' })

    const username = this.state.username

    const password = this.state.password

    axios.post('/api/auth', { username, password })
      .then(res => {
        console.log(res);
        console.log(res.data);

        this.setState({loginState: 'success'})
      })
      .catch(err => {
        this.setState({ loginState: 'error'});
      });
  }

  render() {

    if (this.state.loginState === "error") {
      return (
        <h1>Erro</h1>
      )
    } else if (this.state.loginState === "success"){
      return <Redirect to='/profile' />
    }

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.email}
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
      </div>
    );
  }
}
