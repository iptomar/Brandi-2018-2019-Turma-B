import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Paginas/main";
import { Link } from "react-router-dom";

class App extends Component {
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
              <Link to="/PP">Perfil</Link>
              <Link to="/Projectos">Projetos</Link>
              <Link to="/FichaTecnicos">Fichas Tecnicas</Link>
            </Navigation>
          </Header>
          <Drawer title="Conservação e Restauro ">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/PP">Perfil</Link>
              <Link to="/Projectos">Projetos</Link>
              <Link to="/FichaTecnicos">Fichas Tecnicas</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main>
              <h1>hello</h1>
            </Main>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
