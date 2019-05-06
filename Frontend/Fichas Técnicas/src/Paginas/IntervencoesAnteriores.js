import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="right">
        <h3>Vontade expressa do proprietárrio ou do dono da obra</h3>
        <h4>Tipo de Intervenção</h4>
        <textarea cols="80" rows="3" />
        <br />
        <br />
        <table>
          <tr>
            <td>
              <label>Preservação</label>
              <br />
              <label>Conservação</label>
            </td>
            <td>
              <input type="checkbox" />
              <input type="checkbox" />
            </td>
          </tr>
        </table>
        <h3>Aspetos Especificos</h3>
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

export default App;
