import React, { Component } from "react";

export default class IntervencoesRealizadas extends Component {
	render() {
  return (
    <div className="App">
    <div className="right">
      <h3>Elementos Acessórios</h3>
      <textarea cols="80" rows="3" />
     <h2>Materias</h2>
      <textarea cols="80" rows="3" />

      <h3>Observações | Conclusões</h3>
      <textarea cols="80" rows="3" />
    </div>
    <div className="left">
      <h1>Intervenções Realizada</h1>
      <h3>Estrutura</h3>
      <textarea cols="80" rows="2" />
      <h2>Materias</h2>
      <textarea cols="80" rows="3" />

      <h3>Superficie</h3>
      <textarea cols="80" rows="2" />
      <h2>Materias</h2>
      <textarea cols="80" rows="3" />
    </div>
  </div>
  );
}
}