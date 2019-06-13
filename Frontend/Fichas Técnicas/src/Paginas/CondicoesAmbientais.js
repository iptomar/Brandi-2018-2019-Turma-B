import React, { Component } from "react";


class CondicoesAmbientais extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col col-md-6">

            <h1>Condições Ambientais</h1>

            <h3 class="bg-secondary text-black">
              Descrição
            </h3>
            <div class="col">
              <textarea class="form-control-2 ml-n4" cols="100" rows="10" />
            </div>
            <h3 class="bg-secondary text-black">
              Ciclos das Estações Climatérias Anuais
            </h3>
            <div class="row">
              <div class="col">
                <h3> </h3>
              </div>
              <div class="col">
                <h3>Frio/Húmido</h3>
              </div>
              <div class="col">
                <h3>Quente/Seco</h3>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h3>Temperatura</h3>
                <h6>(Valores Médios em ºC)</h6>
              </div>
              <div class="col">
                <textarea class="form-control-2 ml-n4" cols="35" />
              </div>
              <div class="col">
                <textarea class="form-control-2 ml-n4" cols="35" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h3>Humidade Relativa</h3>
                <h6>(Valores Médios em %)</h6>
              </div>
              <div class="col">
                <textarea class="form-control-2 ml-n4" cols="35" />
              </div>
              <div class="col">
                <textarea class="form-control-2 ml-n4" cols="35" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h3>Período do Ano</h3>
                <h6>(Inicio/Fim - em meses)</h6>
              </div>
              <div class="col">
                <textarea class="form-control-2 ml-n4" cols="35" />
              </div>
              <div class="col">
                <textarea class="form-control-2 ml-n4" cols="35" />
              </div>
            </div>

            <h3 class="bg-secondary text-black">
              Poluição
            </h3>
            <div class="row">
              <div class="col col-md-4">
                <h3>Agentes poluidores</h3>
              </div>
              <div class="col">
                <textarea class="form-control-2 ml-n4" cols="65" />
              </div>

              <div class="col col-md-4">
                <h3>Resultados</h3>
              </div>
              <div class="col">
                <textarea class="form-control-2 ml-n4" cols="65" />
              </div>

              <div class="col col-md-4">
                <h3>Fontes|Origem</h3>
              </div>
              <div class="col">
                <textarea class="form-control-2 ml-n4" cols="65" />
              </div>
            </div>
        </div>

             


            <div className="col col-md-6 mt-5">

            <h3 class="bg-secondary text-black">Radiação</h3>


              <div class="row">
              <div class="col col-md-4">
                    <h5 class="mt-3">Natural</h5>
              </div>
              <div class="col">
              <div class="col col-md-6 ">
                    <div class="row">Tipo</div>
                    <textarea className="form-control-2 ml-n4" cols="60" rows="2"></textarea>
                    <div class="row">Valor de Luminância</div>
                    <textarea className="form-control-2 ml-n4" cols="60" rows="2"></textarea>
                    <div class="row">Valor de U.V. Medidos</div>
                    <textarea className="form-control-2 ml-n4" cols="60" rows="2"></textarea>
                    <div class="row">Valor Rela de U.V.</div>
                    <textarea className="form-control-2 ml-n4" cols="60" rows="2"></textarea>
                    <p></p>
              </div>
              </div>
              </div>
              <div class="row">
              <div class="col col-md-4">
                    <h5 class="mt-3">Artificial</h5>
              </div>
              <div class="col">
              <div class="col col-md-6 ">
                    <div class="row">Tipo</div>
                    <textarea className="form-control-2 ml-n4" cols="60" rows="2"></textarea>
                    <div class="row">Valor de Luminância</div>
                    <textarea className="form-control-2 ml-n4" cols="60" rows="2"></textarea>
                    <div class="row">Valor de U.V. Medidos</div>
                    <textarea className="form-control-2 ml-n4" cols="60" rows="2"></textarea>
                    <div class="row">Valor Rela de U.V.</div>
                    <textarea className="form-control-2 ml-n4" cols="60" rows="2"></textarea>
                    <p></p>
              </div>
              </div>
            </div>

            <h3 class="bg-secondary text-black">
              Observações|Conclusões</h3>
            <textarea cols="100" rows="7"></textarea>
          </div>
          </div>
      </div>
   
    );
  }
}
export default CondicoesAmbientais;
