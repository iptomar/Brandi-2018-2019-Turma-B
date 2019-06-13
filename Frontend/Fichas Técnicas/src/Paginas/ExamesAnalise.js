import React, { Component } from "react";


class ExamesAnalises extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-md-12">
            <h1>Exames e Analise</h1>
            <h2 class="mt-3 bg-secondary text-black">Objetivos gerais</h2>
            <div class="row">
              <div className="col col-md-10">
                <h5>Identificação de materiais, técnicas e tecnologias de produção</h5>
              </div>
              <div class="col-md-2">
                <input type="checkbox"></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div className="col col-md-10">
                <h5>Identificação de intervenientes efetuadas no objeto</h5>
              </div>
              <div class="col-md-2">
                <input type="checkbox"></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div className="col col-md-10">
                <h5>Caracterização do estado de conservação</h5>
              </div>
              <div class="col-md-2">
                <input type="checkbox"></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div className="col col-md-10">
                <h5>Identificação de patologias e agentes de biodeterização</h5>
              </div>
              <div class="col-md-2">
                <input type="checkbox"></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div className="col col-md-10">
                <h5>Datação do objeto e das eventuais itervenções que tenha sido alvo</h5>
              </div>
              <div class="col-md-2">
                <input type="checkbox"></input>
              </div>
            </div>
            <br></br>
          </div>

          <br></br>
          <br></br>

          <div className="col col-md-12">
            <div className="row">
              <div className="col"></div>
              <div className="col">Tipo-Referência</div>
              <div className="col">Localização</div>
              <div className="col">Objetivos expecíficos</div>
              <div className="col">Resultados</div>
              <div className="col">Entidade Técnico Responsável</div>
              <div className="col">Data</div>
            </div>

            <div className="row">
              <div className="col text-center"><button class="btn-lg" onclick="myFunction()">+</button></div>
              <div className="col"><textarea className="form-control-2 ml-n4" cols="25" rows="2"></textarea></div>
              <div className="col"><textarea className="form-control-2 ml-n4" cols="25" rows="2"></textarea></div>
              <div className="col"><textarea className="form-control-2 ml-n4" cols="25" rows="2"></textarea></div>
              <div className="col"><textarea className="form-control-2 ml-n4" cols="25" rows="2"></textarea></div>
              <div className="col"><textarea className="form-control-2 ml-n4" cols="25" rows="2"></textarea></div>
              <div className="col"><textarea className="form-control-2 ml-n4" cols="25" rows="2"></textarea></div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col col-md-12">
            <h2 class="mt-3 bg-secondary text-black">Interpretações de Resultados  </h2>
          </div>
          <div className="col col-md-12">
            <textarea className="form-control-2" cols="217" rows="5"></textarea>
          </div>
          </div>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col col-md-12">
              <h2 class="mt-3 bg-secondary text-black">Observações | Conclusões </h2>
            </div>
            <div className="col col-md-12">
              <textarea className="form-control-2" cols="217" rows="5"></textarea>
            </div>


          </div>
        </div>


    );
  }
}
export default ExamesAnalises;
