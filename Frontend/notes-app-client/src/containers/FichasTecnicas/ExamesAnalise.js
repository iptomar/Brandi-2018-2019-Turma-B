import React, { Component } from "react";

export default class ExamesAnalises extends Component {
	render() {
  return (
    <div className="centro">
    <h1>Exames e Analise</h1>
    <h2>Objetivos gerais</h2>
    <table>
    <tr>
    <td>
    <label>Identificação de materiais, técnicas e tecnologias de produção</label>
    <br></br>
    <label>Identificação de intervenientes efetuadas no objeto</label>
    <br></br>
    <label>Caracterização do estado de conservação</label>
    <br></br>
    <label>Identificação de patologias e agentes de biodeterização</label>
    <br></br>
    <label>Datação do objeto e das eventuais itervenções que tenha sido alvo</label>

    </td>
    <td>
    <input type="checkbox"></input>  <br></br>
    <input type="checkbox"></input>  <br></br>
    <input type="checkbox"></input>  <br></br>
    <input type="checkbox"></input>  <br></br>
    <input type="checkbox"></input>  <br></br>
    </td>
    </tr>
    </table>

    <table className="tbl">
      <tr>
        <td></td>
        <td>Tipo-Referência</td>
        <td>Localização</td>
        <td>Objetivos expecíficos</td>
        <td>Resultados</td>
        <td>Entidade Técnico Responsável</td>
        <td>Data</td>
      </tr>

      <tr id="myRow">
        <td><button onclick="myFunction()">+</button></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <br></br>
    <br></br>
    <table className="tbl1">
      <tr>
      <td>
      Interpretações de Resultados 
      </td>
      </tr>
      <td>
       "Escrever"
      </td>
      <tr>
      <br></br>
      </tr>

      <br></br>
      <br></br>

      <tr>
      <td>
      Observações | Conclusões 
      </td>
      </tr>
      <td>
        "escrever"
      </td>
      <tr>
      </tr>

    </table>
  </div>
  );
}
}