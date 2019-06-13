import React, { Component } from "react";

export default class IntervencoesRealizadas extends Component {
  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col col-md-6">
            <h1>Intervenções Realizada</h1>
            <h3 className="bg-secondary text-white">Estrutura</h3>
            <div className="col">
              <textarea className="form-control-2 ml-n4" cols="103" rows="5"></textarea>
            </div>
            <h2 className="font-weight-bold bg-secondary text-white">Materias</h2>
            <div className="col">
              <textarea className="form-control-2 ml-n4" cols="103" rows="5"></textarea>
            </div>
            <h3 className="mt-3 bg-secondary text-white">Superficie</h3>
            <div className="col">
              <textarea className="form-control-2 ml-n4" cols="103" rows="5"></textarea>
            </div>
            <h2 className="font-weight-bold bg-secondary text-white">Materias</h2>
            <div className="col">
              <textarea className="form-control-2 ml-n4" cols="103" rows="5"></textarea>
            </div>
          </div>
          <div className="col col-md-6 mt-5">
            <h3 className="mt-2 bg-secondary text-white">Elementos Acessórios</h3>
            <div className="col">
              <textarea className="form-control-2 ml-n4" cols="103" rows="7"></textarea>
            </div>
            <h2 className="font-weight-bold bg-secondary text-white">Materias</h2>
            <div className="col">
              <textarea className="form-control-2 ml-n4" cols="103" rows="7"></textarea>
            </div>

            <h3 className="mt-3 bg-secondary text-white">Observações | Conclusões</h3>
            <div className="col">
              <textarea className="form-control-2 ml-n4" cols="103" rows="8"></textarea>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default IntervencoesRealizadas;
