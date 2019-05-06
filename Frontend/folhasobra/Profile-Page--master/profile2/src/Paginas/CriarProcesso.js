import React, { Component } from "react";
import ipt from './ipt.png';
import logotipoCurso from './logotipoCurso.png';
import "./CriarProcesso.css";
import {Link} from 'react-router-dom';

class CriarProcesso extends Component {
  render() {
    return (

      /*div Principal*/
      <div>
          <div class="imagens">
          <div class="imagem">
            <img class="estt" alt="./img/img.png" src={ipt} height="100" width="450" ></img>
          </div>
         <div class="imagem">
            <img class="lab" alt="./img/img.png" src={logotipoCurso} height="100" width="450" ></img>
         </div>
        </div>
        <div align="center" id="box">
        <h1 align="center" id ="criar">Novo Processo</h1>
          <form>
            <input class ="same"type ="number" name=""  placeholder="Nº Processo" min="1"></input>
            <input class ="same"  type ="date" name=""  placeholder="Data"></input><br></br>
            <textarea placeholder="Designação do Procedimento"></textarea>
            <br></br>
            <input class ="same" type ="text" name=""  placeholder="Materiais/Produtos"></input>
            <input class ="same" type ="number" name=""  placeholder="Quantidade" min="1"></input>
            <input class="botoes" type = "submit" name="" value="Adicionar Materiais"></input>
            <table>
              <tr>
                <th>Materiais já Selecionados:</th>
                <th>Quantidade:</th>
              </tr>
              <tr>
                <td>
                </td>
                <td>
                </td>
                <td class="ze">   
               <input class="botoesRemover" type = "submit" name="" value="❌"></input><br></br>
                </td>                
              </tr>
            </table><br></br>
            <input class ="same" type ="text" name=""  placeholder="Duração"></input> 
            <input class="same"  type ="text" name=""  placeholder="Técnico"></input> <br></br>
           <textarea placeholder="Observações"></textarea> <br></br> 
           <input class="botoes" type = "submit" name="" value="Adicionar Processo"></input>
            <Link class="back" role="button" to="/FolhaDeObra">Voltar</Link>
          </form>
        </div>
      </div>
    );
  }
}
export default CriarProcesso;