import React, { Component } from "react";
import "./App.css";

class IntervencoesAnteriores extends Component {
	render() {
  return (
    <div className="App">
    <div className="right">
      <h3>Vontade expressa do proprietárrio ou do dono da obra</h3>
      <h4>Tipo de Intervenção</h4>
      <textarea cols="80" rows="3" />
      <br />
      <br />
      <label>Preservação</label>
      <input type="checkbox" />
      <label>Conservação</label>
      <input type="checkbox" />

      <br />
      <h4>Aspetos Especificos</h4>
      <textarea cols="80" rows="3" />
    </div>
    <div className="left">
      <h1>Intervenções Anteriores</h1>
      <h3>Estrutura</h3>
      <textarea cols="80" rows="2" />
      <h3>Superficie</h3>
      <textarea cols="80" rows="2" />
      <h3>Elementos Acessórios</h3>
      <textarea cols="80" rows="2" />
      <h3>Observações | Conclusões </h3>
      <textarea cols="80" rows="2" />
    </div>
  </div>

    
  );
}
}
export default IntervencoesAnteriores;
