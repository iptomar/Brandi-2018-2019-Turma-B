import React, { Component } from 'react';

export default class TipoIntervencao extends Component {
  render(){
    return (
      <div className="App">
      <div class="div1">
      <h1>Tipo de Intervenção e Proposta</h1>
        <h3>Tipo de Intervenção proposta pelo Conservador-Restaurador</h3>
        <div  class="preservacao"><label>Preservação<input class="checkbox" type="checkbox"/></label></div>
        <div class="conservacao"><label>Conservação<input class="checkbox" type="checkbox"/></label></div>
        <div class="restauro"><label>Restauro<input class="checkbox" type="checkbox"/></label></div>
      </div>
        
        <div class="div2">
        <table align="center" class="tabela">
          <tr class="cab">
            <td class="cab2">Proposta Metodolígica de Intervenção</td>
            <td class="cab2">Recursos Materiais|Técnicos|Tecnológicos </td>
            <td class="cab2">Observações | Conclusões</td>
          </tr>
          <tr>
            <td class="nome">Estrutura:</td>
            <td><textarea rows="2" cols="30" type="text" maxlength="100"/></td>
            <td><textarea rows="2" cols="30" type="text" maxlength="50"/></td>
          </tr>
          <tr>
            <td class="nome">Superfície:</td>
            <td><textarea rows="2" cols="30" type="text" maxlength="100"/></td>
            <td><textarea rows="2" cols="30" type="text" maxlength="100"/></td>
          </tr>
          <tr>
            <td class="nome">Elementos Acessórios:</td>
            <td><textarea rows="2" cols="30" type="text" maxlength="100"/></td>
            <td><textarea rows="2" cols="30" type="text" maxlength="100"/></td>
          </tr>
          
        </table>
        
        </div>
        <div class="div3">
        <p>Data da Informação da proposta:<input type="date" min="2019-01-01"/></p>
        <p class="p1">Data da aceitação da proposta: <input type="date"/></p>
        </div>
        
        <div class="div4">
        <p>Interlocutores do Processo (IPT):<textarea class="textarea2"></textarea></p>
        <p>(Cliente): <textarea class="textarea2"></textarea></p>
        </div>

      </div>
    );
  }
}