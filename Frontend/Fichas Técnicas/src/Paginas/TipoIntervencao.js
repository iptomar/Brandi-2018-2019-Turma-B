import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div>
        <div className="card-title">
          <h1 className="head">Tipo de Intervenção e Proposta</h1>
          <br />
          <h3 className="inter1 head1 ">
            Tipo de Intervenção proposta pelo Conservador-Restaurador
          </h3>
          <br />
          <div class="container">
            <div className="row">
              <div className="col-md-4">
                <label className="inter1">
                  Preservação
                  <input class="checkbox" type="checkbox" />
                </label>
              </div>
              <div className="col-md-4">
                <label className="inter1">
                  Conservação
                  <input class="checkbox" type="checkbox" />
                </label>
              </div>
              <div className="col-md-4">
                <label className="inter1">
                  Restauro
                  <input class="checkbox" type="checkbox" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 inter1">
                    Proposta Metodolígica de Intervenção
                  </div>
                  <div className="col-md-6 inter1">
                    Recursos Materiais | Técnicos | Tecnológicos
                  </div>
                </div>
                <div className="row">
                  <div className="col inter1 inter2 form-control rounded-0">
                    Estrutura:
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <textarea
                        className="form-control rounded-0"
                        id="exampleFormControlTextarea2"
                        rows="3"
                      />
                    </div>{' '}
                  </div>
                </div>
                <div className="row">
                  <div className="col inter1 inter2 form-control rounded-0">
                    Superfície:
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <textarea
                        className="form-control rounded-0"
                        id="exampleFormControlTextarea2"
                        rows="3"
                      />
                    </div>{' '}
                  </div>
                </div>
                <div className="row">
                  <div className="col inter1 inter2 form-control rounded-0">
                    Elementos Acessórios:
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <textarea
                        className="form-control rounded-0"
                        id="exampleFormControlTextarea2"
                        rows="3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col inter1">Observações | Conclusão</div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <textarea
                      className="form-control rounded-0"
                      id="exampleFormControlTextarea2"
                      rows="5"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col inter1 inter2 form-control rounded-0">
                  Data da informação da proposta:
                </div>
                <div className="col">
                  <input type="date" min="2019-01-01" />
                </div>
              </div>
            </div>
            <div className="container ">
              <div className="row">
                <div className="col inter1 inter2 form-control rounded-0 mt-5">
                  Data da aceitação da proposta:
                </div>
                <div className="col mt-5">
                  <input type="date" min="2019-01-01" />
                </div>
              </div>
            </div>
            <div className="container ">
              <div class="row">
                <div className="col inter1 inter2 form-control rounded-0 mt-5">
                  Interlocutores da proposta:
                </div>
                <div className="col">
                  <div className="form-group">
                    <textarea
                      className="form-control rounded-0 mt-5"
                      id="exampleFormControlTextarea2"
                      rows="1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col inter1 inter2 form-control rounded-0 mt-3">
                  Cliente:
                </div>
                <div className="col">
                  <div className="form-group">
                    <textarea
                      className="form-control rounded-0 mt-3"
                      id="exampleFormControlTextarea2"
                      rows="1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
