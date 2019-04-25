import React, { Component } from "react";
import "./TestesSolub.css";
import logo from './img/Logos.JPG';

export default class TestesSolub extends Component {
  render() {
    return (
      <div class="principal">

<div class="div4">
            <img src={logo}/>
            <h1 class="info"><b>Laboratório de Conservação e Restauro - Madeiras | Lab.CR-M |</b></h1>
            <h2><b>| Artefactos e Estruturas em Madeira | Mobiliário | Retabulística e Talha |</b></h2>
        </div>
        <div class="div1">
            <h1><b>TESTE DE EFICÁCIA DOS SOLVENTES NA LIMPEZA E SOLUBILIZAÇÃO DE ESTRATOS E SUJIDADE</b></h1>
            <hr />
        </div>

        <div class="div3">
            <h3 class="ident"><b>Identificação do Estrato/Sujidade: </b><input class="ident2"type="text" maxlength="50"/></h3>
            <h3 class="caract"><b>Características: </b><textarea cols={40} rows={10}/></h3> 
            <h3 input type="button" class="button">Seguinte</h3>
        </div>







        <div class="div4">
          <img src={logo}/>
          <h1 class="info"><b>Laboratório de Conservação e Restauro - Madeiras | Lab.CR-M |</b></h1>
        <h2><b>| Artefactos e Estruturas em Madeira | Mobiliário | Retabulística e Talha |</b></h2>
        </div>
        
    <div class="div1">
        <h1><b>TESTE DE EFICÁCIA DOS SOLVENTES NA LIMPEZA E SOLUBILIZAÇÃO DE ESTRATOS E SUJIDADE</b></h1>
        <hr />
    </div>
    <div class="div2">
        <table  align="center">
            <tr class="cab">
                <td>Solvente ou Mistura de Solventes</td>
                <td>Grau de Eficácia Na Solubilização</td>
                <td>Observações</td>
            </tr>
            <tr>
                <td><textarea rows="2" type="text" maxlength="50"/></td>
                <td><input class="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxlength="80"/></td>
            </tr>   
            <tr>
                <td><textarea rows="2" type="text" maxlength="50"/></td>
                <td><input class="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxlength="80"/></td>
            </tr>   
            <tr>
                <td><textarea rows="2" type="text" maxlength="50"/></td>
                <td><input class="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxlength="80"/></td>
            </tr>   
            <tr>
                <td><textarea rows="2" type="text" maxlength="50"/></td>
                <td><input class="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxlength="80"/></td>
            </tr>   
            <tr>
                <td><textarea rows="2" type="text" maxlength="50"/></td>
                <td><input class="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxlength="80"/></td>
            </tr>   
            <tr>
                <td><textarea rows="2" type="text" maxlength="50"/></td>
                <td><input class="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxlength="80"/></td>
            </tr>   
            <tr>
                <td><textarea rows="2" type="text" maxlength="50"/></td>
                <td><input class="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxlength="80"/></td>
            </tr>   
            <tr>
                <td><textarea rows="2" type="text" maxlength="50"/></td>
                <td><input class="grau2" type="number" name="quantity" min="1" max="5"/></td>
                <td><textarea rows="2" type="text" maxlength="80"/></td>
            </tr>   
            
            
        </table>
    </div>
    <div class="div3">
       <h3 class="numero"><b>Folha do teste número: </b><input type="number" name="quantity"/></h3>
       <h3 class="data"><b>Data: </b><input type="date"/></h3>
       <h3 class="tecnico"><b>Técnico responsável: </b><input type="text" maxlength="30"/></h3>
       <h3 class="grau"><b>Graus de Eficácia no Processo de Solubilização dos Estratos:</b></h3>
       <h3 class="eficacia"><b> 1 - Muito Eficaz | 2 - Eficaz | 3 - Eficácia média | 4 - Pouco Eficaz | 5 - Eficária Nula</b></h3>
       <h3 input type="button" class="button">Guardar</h3>
    </div>
    </div>	
    );
  }
}