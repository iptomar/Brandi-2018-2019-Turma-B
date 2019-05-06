import React, { Component } from "react";
import "./App.css";

class PaginasFontes extends Component {
	render() {
  return (
    <div className="App">
    <div className="right">
      <h3>Bibliográficos</h3>
      <label>Autor/Título/Local/Editor/Data/Página(s)</label>
      <input className="bibliográficos" />
      <table align="left">
        <tr>
          <th />
          <th>Tipo</th>
          <th>Localização</th>
          <th>Conta</th>
        </tr>
        <tr>
          <td />
          <td>
            <input />
          </td>
          <td>
            <input />
          </td>
          <td>
            <input />
          </td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>Eletronicas</h4>
      <label>Autor/Título/Local/Editor/Data/Página(s)</label>
      <input className="bibliográficos" />
      <table align="left">
        <tr>
          <th />
          <th>Tipo</th>
          <th>Localização</th>
          <th>Conta</th>
        </tr>
        <tr>
          <td />
          <td>
            <input />
          </td>
          <td>
            <input />
          </td>
          <td>
            <input />
          </td>
        </tr>
      </table>
    </div>

    <div className="left">
      <h1>Fontes</h1>
      <h3>Arquivísticas | Documentais</h3>
      <label>Autor/Título/Local/Editor/Data/Página(s)</label>
      <input className="bibliográficos" />
      <table align="left">
        <tr>
          <th />
          <th>Tipo</th>
          <th>Localização</th>
          <th>R</th>
        </tr>
        <tr>
          <td />
          <td>
            <input />
          </td>
          <td>
            <input />
          </td>
          <td>
            <input />
          </td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>Iconográficas</h4>
      <label>Autor/Título/Local/Editor/Data/Página(s)</label>
      <input className="bibliográficos" />
      <table align="left">
        <tr>
          <th />
          <th>Tipo</th>
          <th>Localização</th>
          <th>Conta</th>
        </tr>
        <tr>
          <td />
          <td>
            <input />
          </td>
          <td>
            <input />
          </td>
          <td>
            <input />
          </td>
        </tr>
      </table>
    </div>

    <div className="down" />
    <br />
    <br />
    <br />
    <h4>Eletronicas</h4>
    <table align="left">
      <tr>
        <th />
        <th>Autor/Título/Local/Editor/Data/Página(s)</th>
        <th>Tipo</th>
        <th>Localização</th>
        <th>Conta</th>
      </tr>
      <tr>
        <td />
        <td>
          <input />
        </td>
        <td>
          <input />
        </td>
        <td>
          <input />
        </td>
        <td>
          <input />
        </td>
      </tr>
    </table>
  </div>

    
  );
}
}
export default PaginasFontes;
