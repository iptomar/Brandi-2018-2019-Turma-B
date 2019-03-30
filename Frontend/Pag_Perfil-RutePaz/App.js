import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="header" align="center">
          <p>Laboratório de Conservação e Restauro - Madeiras I Lab.CR-M II</p>
          <p>Artefactos e Estruturas em Madeiras I Mobiliário I Retabulística e Talha I</p>
        </div>
        <table align="center">
        <tbody>
          <tr className="Campos">
            <th>Campo</th>
            <th>Valor Atual</th>
            <th>Ações Disponíveis</th>
          </tr>
          <tr>
            <td>Nome</td>
            <td>(nome aluno)</td>
            <td>Editar</td>
          </tr>
          <tr>
            <td>Username</td>
            <td>(username aluno) </td>
            <td>Editar</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>(e-mail aluno)</td>
            <td>Editar</td>
          </tr>
          <tr>
            <td>Password</td>
            <td>********</td>
            <td>Editar</td>
          </tr>
          <tr>
            <td>Tipo</td>
            <td>(aluno)</td>
            <td>Editar</td>
          </tr>
          <tr>
            <td>Habilitações</td>
            <td></td>
            <td>Editar</td>
          </tr>
          <tr>
            <td>Nível Profissional</td>
            <td>0</td>
            <td>Editar</td>
          </tr>
          </tbody>
        </table>


      </div>

    );
  }
}

export default App;
