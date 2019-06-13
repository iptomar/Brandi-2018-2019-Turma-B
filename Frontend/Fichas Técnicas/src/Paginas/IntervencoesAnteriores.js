import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-6">
          <h1>Intervenções Anteriores</h1>
          <h3 className="font-weight-bold bg-secondary text-white">
            Estrutura
          </h3>
          <div className="col">
            <textarea className="form-control-2 ml-n4" cols="103" rows="5" />
          </div>
          <h3 className="font-weight-bold bg-secondary text-white">
            Superficie
          </h3>
          <div className="col">
            <textarea className="form-control-2 ml-n4" cols="103" rows="5" />
          </div>
          <h3 className="font-weight-bold mt-3 bg-secondary text-white">
            Elementos Acessórios
          </h3>
          <div className="col">
            <textarea className="form-control-2 ml-n4" cols="103" rows="5" />
          </div>
          <h3 className="font-weight-bold bg-secondary text-white">
            Observações | Conclusões
          </h3>
          <div className="col">
            <textarea className="form-control-2 ml-n4" cols="103" rows="5" />
          </div>
        </div>
        <div className="col col-md-6 mt-5">
          <h3 className="font-weight-bold mt-2 bg-secondary text-white">
            Vontade expressa do proprietárrio ou do dono da obra
          </h3>
          <h3 className="font-weight-bold bg-secondary text-white">
            Tipo de Intervenção
          </h3>
          <div className="col">
            <textarea className="form-control-2 ml-n4" cols="103" rows="6" />
          </div>
          <h3 className="font-weight-bold bg-secondary text-white">Materias</h3>
          <div className="col">
            <textarea className="form-control-2 ml-n4" cols="103" rows="7" />
          </div>

          <h3 className="font-weight-bold mt-3 bg-secondary text-white">
            Aspetos Especificos
          </h3>
          <div className="col">
            <textarea className="form-control-2 ml-n4" cols="103" rows="7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
