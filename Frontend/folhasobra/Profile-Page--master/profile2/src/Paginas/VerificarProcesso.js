import React, { Component } from "react";
import ipt from './ipt.png';
import logotipoCurso from './logotipoCurso.png';
import "./VerificarProcesso.css";
import { Link } from 'react-router-dom';


class VerificarProcesso extends Component {
  render() {
    return (
      /*div Principal*/
      <div>
        <div class="imagens">
          <div class="imagem">
            <img class="estt" alt="./img/img.png" src={ipt} height="100" width="450"  ></img>
          </div>
          <div class="imagem">
            <img class="lab" alt="./img/img.png" src={logotipoCurso} height="100" width="450" ></img>
          </div>
        </div>
        <div>
          <h1 align="center">Verificar Processo</h1>
        </div>
        <div align="center" class="search-box">
          <input type="number" min="0" class="search-txt" placeholder="Procurar (Ex: 12)"></input>
          <div class="diva">
            <button class="search-btn">🔍</button><br></br>
          </div>
        </div>
        <Link class="btnvp" role="button" to="/FolhaDeObra">Voltar</Link>
      </div>
    );
  }
}
export default VerificarProcesso;
