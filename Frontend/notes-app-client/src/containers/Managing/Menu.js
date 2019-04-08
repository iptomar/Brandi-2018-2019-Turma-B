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

  componentDidMount(){
    if(sessionStorage.getItem("loginState") !== "success"){
      this.props.history.push("/login");
    }


    if(sessionStorage.getItem("tipo") === "admin"){
      let nav = document.getElementById("navi");

      let registLink = document.createElement("a");
      registLink.href = "/register"
      registLink.innerHTML = "Registar";

      let tecnicLink = document.createElement("a");
      tecnicLink.href = "/tecnicos"
      tecnicLink.innerHTML = "Tecnicos";

      nav.appendChild(registLink);
      nav.appendChild(tecnicLink);
    }    
  }

  render() {

    return (
      
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={<a href="/menu" style={{ color: '#ffffff' }}>Conservação e Restauro</a>}
            scroll
            href="google.com"
            
          >
            <Navigation>
              <Link to="/objetos">Objetos</Link>
            </Navigation>
          </Header>
          <Drawer title="Conservação e Restauro ">
            <Navigation id="navi">
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
