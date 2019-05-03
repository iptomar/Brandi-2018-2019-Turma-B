
import React, { Component } from "react";
import "./FolhaDeObra.css";
import ipt from './ipt.png';
import logotipoCurso from './logotipoCurso.png';
import {Link} from 'react-router-dom';

class Projectos extends Component {
  render() {
    return (
      /*div Principal*/
      <div>
        <div class="imagens">
          <div class="imagem">
            <img class="estt" alt="./img/img.png" src={ipt}></img>
          </div>
         <div class="imagem">
            <img class="lab" alt="./img/img.png" src={logotipoCurso}></img>
         </div>
        </div>

        <div>
          <h1 align="center">Folha de Obra</h1>
        </div>

        <div class="btnDiv" align="center">
          <Link className="btn sucesso" role="button" to="/CriarProcesso">Criar Processo</Link>
          <Link className="btn sucesso" role="button" to="/VerificarProcesso">Verificar Processo</Link>
        </div>

        
      </div>
    );
  }
}
export default Projectos;
