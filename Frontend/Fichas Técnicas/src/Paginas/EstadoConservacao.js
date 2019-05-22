import React, { Component } from 'react';

class EstadoConservacao extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col col-md-6">
            <h1>Estado de Conservação</h1>
            <h5 class="col-md-17 bg-secondary text-black">
              Deterioração Física, Química e Mecânica dos Materiais:
            </h5>
            <p>Alterabilidades: Decorrente de envelhecimento natural</p>
            <p>
              Alteração: Decorrente de fatores físicos, químicos, biológicos e
              antrópicos
            </p>

            <h5 class="mt-3 bg-secondary text-black">Estrutura</h5>
            <div class="col">
              <textarea class="form-control-2 ml-n4" cols="60" rows="3" />
            </div>
            <h5 class="mt-3 bg-secondary text-black">Superfície</h5>
            <div class="col">
              <textarea class="form-control-2 ml-n4" cols="60" rows="3" />
            </div>
            <h5 class="mt-3 bg-secondary text-black">Elementos Acessórios</h5>
            <div class="col">
              <textarea class="form-control-2 ml-n4" cols="60" rows="3" />
            </div>
            <h5 class="col-md-17 bg-secondary text-black">
              Deterioração Biológica dos Materiais
            </h5>
            <p>
              Identificação de Patalogias e Agentes de Biodeterioração -
              Diagnóstico
            </p>
            <h5 class="mt-3 bg-secondary text-black">Estrutura</h5>
            <div class="col">
              <textarea class="form-control-2 ml-n4" cols="60" rows="3" />
            </div>
            <h5 class="mt-3 bg-secondary text-black">Superfície</h5>
            <div class="col">
              <textarea class="form-control-2 ml-n4" cols="60" rows="3" />
            </div>
            <h5 class="mt-3 bg-secondary text-black">Elementos Acessórios</h5>
            <div class="col">
              <textarea class="form-control-2 ml-n4" cols="60" rows="3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EstadoConservacao;
