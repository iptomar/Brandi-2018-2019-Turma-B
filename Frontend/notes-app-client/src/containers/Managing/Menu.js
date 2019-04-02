import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import "./Menu.css";

export default class Login extends Component {
  /*constructor(props) {
    super(props);

  }*/

  render() {

    return (
      
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title="Conservação e Restauro "
            scroll
          >
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/fichatecnica">Objetos</Link>
            </Navigation>
          </Header>
          <Drawer title="Conservação e Restauro ">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/profile">Perfil</Link>
              <Link to="/logout">Logout</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
          </Content>    
        </Layout>
      </div>   
    );
  }
}
