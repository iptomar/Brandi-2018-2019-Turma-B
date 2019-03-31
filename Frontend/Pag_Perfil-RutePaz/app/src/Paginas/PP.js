import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class PP extends Component {
	render() {
		return (
			<div style={{ width: "100%", margin: "auto" }}>
				<Grid className="Profile-grid">
					<Cell col={12}>
						<img
							src="https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png"
							alt="imag"
							className="avatarImg"
						/>

						<div className="text">
							<h1>
								Laboratório de Conservação e Restauro - Madeiras I Lab.CR-M II
              </h1>
							<p>
								Artefactos e Estruturas em Madeiras I Mobiliário I Retabulística
								e Talha I
              </p>

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
										<td />
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
					</Cell>
				</Grid>
			</div>
		);
	}
}
export default PP;
