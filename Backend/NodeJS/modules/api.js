﻿//modules
var session = require('express-session')
//export
module.exports = function(app, con, verificaLogin, verificaLoginAdmin) {

	//lista de tecnicos
	app.get("/tecnicos", verificaLoginAdmin, (req,res) =>{
		let sql = "SELECT * FROM tecnicos"

			con.query(sql, (err, results) => {
				if (err) {
					console.error("Erro get tecnicos", err)
					res.status(500).json({ erro: "Erro na query" })
				} else {
					res.status(200).json(results)
				}
			})
	})

	//tecnico (pelo ID)
	app.get("/tecnicos/id/:id", verificaLogin, (req, res) => {
		
			let sql = "SELECT * FROM tecnicos WHERE idTecnico = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					console.error("Erro get tecnico", err)
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Tecnico not found" })
					} else {
						if(results[0].username === req.session.username || req.session.role === "admin"){
							res.status(200).json(results)
						}
						else{
							res.status(500).json({ erro: "Permission denied" })
						}
					}
				}
			})
	})

	//tecnico (pelo username)
	app.get("/tecnicos/username/:username", verificaLogin, (req, res) => {

			if(req.session.username == req.params.username || req.session.role === "admin"){
				let sql = "SELECT * FROM tecnicos WHERE username = ?"

				// req.params.id mapeia o :username que está no URL acima.
				con.query(sql, [req.params.username], (err, results) => {
					if (err) {
						console.error("Erro get tecnico", err)
						res.status(500).json({ erro: "Erro na query" })
					} else {
						if (results.length ==0) {
							res.status(404).json({ erro: "Tecnico not found" })
						} else {
							res.status(200).json(results)
						}
					}
				})
			}
			else{
				res.status(500).json({ erro: "Permission denied" })
			}
		
	})

	//lista de materiais
	app.get("/materiais", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM materiais"

			con.query(sql, (err, results) => {
				if (err) {
					console.error("Erro get materiais", err)
					res.status(500).json({ erro: "Erro na query" })
				} else {
					res.status(200).json(results)
				}
			})	
	})

	//material (pelo ID)
	app.get("/materiais/id/:id", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM materiais WHERE idMaterial = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Material not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})	
	})



	//lista de procedimentos
	app.get("/procedimentos", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM procedimentos"

			con.query(sql, (err, results) => {
				if (err) {
					console.error("Erro get procedimentos", err)
					res.status(500).json({ erro: "Erro na query" })
				} else {
					res.status(200).json(results)
				}
			})
	})

	//procedimento (pelo ID)
	app.get("/procedimentos/id/:id", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM procedimentos WHERE idProcedimento = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Procedimento not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//lista de processosObra
	app.get("/processosObra", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM processosObra"

			con.query(sql, (err, results) => {
				if (err) {
					console.error("Erro get processosObra", err)
					res.status(500).json({ erro: "Erro na query" })
				} else {
					res.status(200).json(results)
				}
			})
	})

	//processosObra (pelo ID)
	app.get("/processosObra/id/:id", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM processosObra WHERE numProcesso = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "ProcessoObra not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//lista de processos
	app.get("/processos", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM processos"

			con.query(sql, (err, results) => {
				if (err) {
					console.error("Erro get processos", err)
					res.status(500).json({ erro: "Erro na query" })
				} else {
					res.status(200).json(results)
				}
			})
	})

	//processo (pelo ID)
	app.get("/processos/id/:id", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM processos WHERE idProcesso = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Processo not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//tecnicos de um processo
	app.get("/processos/:id/tecnicos", verificaLogin, (req, res) => {

			let sql = "SELECT tec.* FROM tecnicoProcesso, tecnicos tec WHERE tecnico = idTecnico and processo = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					console.error("Erro get tecnicos do processo", err)
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Tecnicos not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//lista de objetos
	app.get("/objetos", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM objetos"

			con.query(sql, (err, results) => {
				if (err) {
					console.error("Erro get objetos", err)
					res.status(500).json({ erro: "Erro na query" })
				} else {
					res.status(200).json(results)
				}
			})
	})

	//objeto (pelo ID)
	app.get("/objetos/id/:id", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM objetos WHERE idObjeto = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Objeto not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//Todas as imagens
	app.get("/imagens", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM imagens"

			con.query(sql, (err, results) => {
				if (err) {
					console.error("Erro get Imagens", err)
					res.status(500).json({ erro: "Erro na query" })
				} else {
					res.status(200).json(results)
				}
			})
	})

	//Imagens de um objeto (pelo ID do objeto)
	app.get("/objetos/:id/imagens", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM imagens WHERE objeto = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Imagens not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//Interessados de um objeto (pelo ID do objeto)
	app.get("/objetos/:id/interessados", verificaLogin, (req, res) => {

			let sql = "Select interessados.*,interessadosObjeto.tipo from interessados,interessadosObjeto where interessadosObjeto.objeto = ? and interessados.idInteressado = interessadosObjeto.interessado"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Interessados not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//Ciclos climatéricos de um objeto (pelo ID do objeto)
	app.get("/objetos/:id/ciclosclimatericos", verificaLogin, (req, res) => {

			let sql = "Select * from ciclosClimatericos where objeto = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Ciclos climatéricos not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//fontes de um objeto (pelo ID do objeto)
	app.get("/objetos/:id/fontes", verificaLogin, (req, res) => {

			let sql = "Select * from fontes where objeto = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Fontes not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//poluição de um objeto (pelo ID do objeto)
	app.get("/objetos/:id/poluicao", verificaLogin, (req, res) => {

			let sql = "Select * from poluicao where objeto = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Poluição not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//iluminação de um objeto (pelo ID do objeto)
	app.get("/objetos/:id/iluminacao", verificaLogin, (req, res) => {

			let sql = "Select * from iluminacao where objeto = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Iluminação not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//pedidos de intervenção de um objeto (pelo ID do objeto)
	app.get("/objetos/:id/pedidosintervencao", verificaLogin, (req, res) => {

			let sql = "Select * from pedidosIntervencao where objeto = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Pedidos de intervenção not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
		
	})

	//conservações de um objeto (pelo ID do objeto)
	app.get("/objetos/:id/conservacoes", verificaLogin, (req, res) => {

			let sql = "Select * from conservacoes where objeto = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Conservacoes not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})


	//lista de propostasIntervencao
	app.get("/propostasIntervencao", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM propostasIntervencao"

			con.query(sql, (err, results) => {
				if (err) {
					console.error("Erro get PropostasIntervencao", err)
					res.status(500).json({ erro: "Erro na query" })
				} else {
					res.status(200).json(results)
				}
			})
	})

	//propostasIntervencao (pelo ID do objeto)
	app.get("/objetos/:id/propostasIntervencao", verificaLogin, (req, res) => {

			let sql = "Select * from propostasIntervencao where objeto = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "PropostasIntervencao not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//lista de intervencoes
	app.get("/intervencoes", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM intervencoes"

			con.query(sql, (err, results) => {
				if (err) {
					console.error("Erro get intervencoes", err)
					res.status(500).json({ erro: "Erro na query" })
				} else {
					res.status(200).json(results)
				}
			})
	})

	//intervencoes (pelo ID do objeto)
	app.get("/objetos/:id/intervencoes", verificaLogin, (req, res) => {

			let sql = "Select intervencoes.* from intervencoes,propostasIntervencao  where propostasIntervencao.objeto = ? and intervencoes.proposta = propostasIntervencao.idProposta" 

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "intervencoes not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//testes feitos num exame (pelo ID do objeto)
	app.get("/objetos/:id/testes", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM testes WHERE objeto = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Objeto not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//testes feitos por um tecnico (pelo ID do tecnico)
	app.get("/tecnicos/:id/testes", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM testes WHERE tecnico = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Objeto not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//Documentação de um objeto (pelo ID do objeto)
	app.get("/objetos/:id/documentacao", verificaLogin, (req, res) => {

			let sql = "Select * from documentacao where objeto = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Documentacao not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//Testes de uma análise (pelo ID da análise)
	app.get("/analisesSolventes/:id/testesSolvente", verificaLogin, (req, res) => {

			let sql = "Select * from testesSolvente where analise = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Testes not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//lista de analisesSolventes
	app.get("/analisesSolventes", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM analisesSolventes"

			con.query(sql, (err, results) => {
				if (err) {
					console.error("Erro get analisesSolventes", err)
					res.status(500).json({ erro: "Erro na query" })
				} else {
					res.status(200).json(results)
				}
			})
	})

	//analisesSolventes (pelo ID)
	app.get("/analisesSolventes/id/:id", verificaLogin, (req, res) => {

			let sql = "SELECT * FROM analisesSolventes WHERE idObjeto = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "analisesSolventes not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//analisesSolventes de um objeto (pelo ID do objeto)
	app.get("/objetos/:id/analisesSolventes", verificaLogin, (req, res) => {

			let sql = "Select * from analisesSolventes where objeto = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "analisesSolventes not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
		
	})

	//analisesSolventes de um tecnico (pelo ID do tecnico)
	app.get("/tecnicos/:id/analisesSolventes", verificaLogin, (req, res) => {

			let sql = "Select * from analisesSolventes where tecnico = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "analisesSolventes not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

	//Intervencoes Anteriores de um objeto (pelo ID do objeto)
	app.get("/objetos/:id/intervencoesanteriores", verificaLogin, (req, res) => {

			let sql = "Select * from intervencoesAnteriores where objeto = ?"

			// req.params.id mapeia o :id que está no URL acima.
			con.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).json({ erro: "Erro na query" })
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Testes not found" })
					} else {
						res.status(200).json(results)
					}
				}
			})
	})

}