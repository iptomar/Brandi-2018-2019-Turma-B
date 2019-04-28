import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Paginas/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
<div className="lay">
        <Layout>
          <Header
            className="header-color"
            title="Conservação e Restauro "
            scroll
          >
            <Navigation>
            <Link to="/CondicoesAmbientais">Condicoes Ambientais</Link>
            <Link to="/EstadoConservacao">Condicoes Ambientais</Link>

              </Navigation>
          </Header>
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
