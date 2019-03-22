import React, { Component } from "react";
import "./Profile.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name : "test"
    };
  }

  componentDidMount(){
    //session.setState({name: sessionStorage.getItem("username")});
    alert(this.state.name);
  }
  /*
    axios.post('/api/users', { username, password })
      .then(res => {
        console.log(res);
        console.log(res.data);

        this.setState({loginState: 'success'})
      })
      .catch(err => {
        this.setState({ loginState: 'error'});
      });*/
  

  render() {


    return (
      <div className="Login">
        <h1>PROFILE</h1>
      </div>
    );
  }
}
