import React, { Component } from "react";


class CondicoesAmbientais extends Component {
	render() {
  return (
    <div className="App">
      <div className="right">
        
        <h3>Radiação</h3>
        <h4>Natual</h4>
        <label>Tipo</label>
        <input className="radiacao"/>
        <label>Valor de Luminância</label>
        <input className="radiacao"/>
        <label>Valor de U.V. Medidos</label>
        <input className="radiacao"/>
        <label>Valor Rela de U.V.</label>
        <input className="radiacao"/>
        <p></p>
        <hr></hr>
        <h4>Artificial</h4>
        <label>Origem</label>
        <input className="radiacao"/>
        <label>Valor de Luminância</label>
        <input className="radiacao"/>
        <label>Valor de U.V. Medidos</label>
        <input className="radiacao"/>
        <label>Valor Rela de U.V.</label>
        <input className="radiacao"/>
        <h3>Observações|Conclusões</h3>
        <textarea cols="83" rows="7"></textarea>



      </div>
      <div className="left">

        <h1>Condições Ambientais</h1>

        <h3>Descrição</h3>
        <textarea  cols="80" rows="10"></textarea><br></br>
        <h3>Ciclos das Estações Climatérias Anuais</h3>
        <table  align="left" >
          <tr>
            <th></th>
            <th>Frio/Húmido</th>
            <th>Quente/Seco</th>
          </tr>
          <tr>
            <td>Temperatura</td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
          <tr><td>Húmidade Relativa</td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
          <tr><td>Período do Ano</td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
          </tr>
        </table>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>



        <h3>Poluição</h3>
        <table align="left" >
          <tr>
            <td>Agentes poluidores</td>
            <td>
              <input />
            </td>
          </tr>
          <tr><td>Resultados</td>
            <td>
              <input />
            </td>
          </tr>
          <tr><td>Fontes|Origem</td>
            <td>
              <input />
            </td>
          </tr>
        </table>




      </div>


    </div>
  );
}
}
export default CondicoesAmbientais;
