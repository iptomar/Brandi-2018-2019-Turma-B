import React, { Component } from "react";
import logo from '../Logos.JPG';

class TesteSolub extends Component {
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
      </div>
    );
  }
}
export default TesteSolub;