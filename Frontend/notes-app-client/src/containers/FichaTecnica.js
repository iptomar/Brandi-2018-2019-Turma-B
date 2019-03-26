import React, { Component } from "react";
import "./FichaTecnica.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Login extends Component {

  render() {

    return (
      <Router>
        <div className="App2">
          <div className="App__Form2">
            <div className="FormTitle">
              <Link to="/fichatecnica" className="FormTitle__Link ">
                Ficha Técnica
              </Link>
            </div>
            <Route exact path="/fichatecnica">
              <div className="FormCenter">
                    <button className="FormField__Button mr-20" type="button">
                      Adicionar nova ficha
                    </button>
              </div>
            </Route>
          </div>
        </div>
      </Router>
    );
  }
}
