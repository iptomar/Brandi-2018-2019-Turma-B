//modules
var fs = require('fs')


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

	//lista de tecnicos [Nomes apenas]
	app.get("/tecnicosNome", verificaLogin, (req,res) =>{
		let sql = "SELECT idTecnico, nome FROM tecnicos"
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

	//materiais de um procedimento
	app.get("/procedimento/:id/materiais", verificaLogin, (req, res) => {
		let sql = "SELECT * FROM materiais WHERE procedimento = ?"
		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" })
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Materiais not found" })
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

	//procedimentos de uma peça
	app.get("/pecas/:id/procedimentos", verificaLogin, (req, res) => {
		let sql = "SELECT * FROM procedimentos WHERE peca = ?"
		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" })
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Procedimentos not found" })
				} else {
					res.status(200).json(results)
				}
			}
		})
	})

	//lista de peças
	app.get("/pecas", verificaLogin, (req, res) => {
		let sql = "SELECT * FROM pecas"
		con.query(sql, (err, results) => {
			if (err) {
				console.error("Erro get peças", err)
				res.status(500).json({ erro: "Erro na query" })
			} else {
				res.status(200).json(results)
			}
		})
	})

	//peças (pelo ID)
	app.get("/pecas/id/:id", verificaLogin, (req, res) => {
		let sql = "SELECT * FROM pecas WHERE idPeca = ?"
		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" })
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "peça not found" })
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

	//Imagens de uma peça (pelo ID da peça)
	app.get("/pecas/:id/imagens", verificaLogin, (req, res) => {
		let sql = "SELECT * FROM imagens WHERE peca = ?"
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

	//Interessados 
	app.get("/interessados", verificaLogin, (req, res) => {
		let sql = "Select * from interessados"
		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, (err, results) => {
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

	//Interessados (pelo ID do interessado)
	app.get("/interessados/:id", verificaLogin, (req, res) => {
		let sql = "Select * from interessados where idInteressado = ?"
		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" })
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Interessado not found" })
				} else {
					res.status(200).json(results)
				}
			}
		})
	})

	//Interessados de uma obra(pelo ID da obra)
	app.get("/obras/:id/interessados", verificaLogin, (req, res) => {
		let sql = "Select interessados.*,interessadosObra.tipo from interessados,interessadosObra where interessadosObra.obra = ? and interessados.idInteressado = interessadosObra.interessado"

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

	//Ciclos climatéricos de uma peça (pelo ID da peça)
	app.get("/pecas/:id/ciclosclimatericos", verificaLogin, (req, res) => {
		let sql = "Select * from ciclosClimatericos where peca = ?"

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

	//fontes de uma peça (pelo ID da peça)
	app.get("/pecas/:id/fontes", verificaLogin, (req, res) => {
		let sql = "Select * from fontes where peca = ?"
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

	//poluição de uma peça (pelo ID da peça)
	app.get("/pecas/:id/poluicao", verificaLogin, (req, res) => {
		let sql = "Select * from poluicao where peca = ?"
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

	//iluminação de uma peça (pelo ID da peça)
	app.get("/pecas/:id/iluminacao", verificaLogin, (req, res) => {
		let sql = "Select * from iluminacao where peca = ?"
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

	//pedidos de intervenção de uma peça (pelo ID da peça)
	app.get("/pecas/:id/pedidosintervencao", verificaLogin, (req, res) => {
		let sql = "Select * from pedidosIntervencao where peca = ?"
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

	//conservações de uma peça (pelo ID da peça)
	app.get("/pecas/:id/conservacoes", verificaLogin, (req, res) => {
		let sql = "Select * from conservacoes where peca = ?"
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

	//propostasIntervencao de uma peça (pelo ID da peça)
	app.get("/pecas/:id/propostasIntervencao", verificaLogin, (req, res) => {
		let sql = "Select * from propostasIntervencao where peca = ?"
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

	//intervencoes de uma peça (pelo ID da peça)
	app.get("/pecas/:id/intervencoes", verificaLogin, (req, res) => {
		let sql = "Select intervencoes.* from intervencoes,propostasIntervencao  where propostasIntervencao.peca = ? and intervencoes.proposta = propostasIntervencao.idProposta" 
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

	//testes feitos num exame (pelo ID da peça)
	app.get("/pecas/:id/testes", verificaLogin, (req, res) => {
		let sql = "SELECT * FROM testes WHERE peca = ?"
		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" })
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Peça not found" })
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
					res.status(404).json({ erro: "Testes not found" })
				} else {
					res.status(200).json(results)
				}
			}
		})
	})

	//Documentação de uma peça (pelo ID da peça)
	app.get("/pecas/:id/documentacao", verificaLogin, (req, res) => {
		let sql = "Select * from documentacao where peca = ?"
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
        let sql = "SELECT analisesSolventes.*,  tecnicos.nome as nomeTecnico FROM analisesSolventes, tecnicos WHERE analisesSolventes.idAnalise = ? and analisesSolventes.tecnico =  tecnicos.idTecnico"
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

	//analisesSolventes de uma peça (pelo ID da peça)
	app.get("/pecas/:id/analisesSolventes", verificaLogin, (req, res) => {
		let sql = "Select analisesSolventes.*, tecnicos.nome as nomeTecnico from analisesSolventes,tecnicos where analisesSolventes.peca = ? and tecnicos.idTecnico = analisesSolventes.tecnico"
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

	//Intervencoes Anteriores de uma peça (pelo ID da peça)
	app.get("/pecas/:id/intervencoesanteriores", verificaLogin, (req, res) => {
		let sql = "Select * from intervencoesAnteriores where peca = ?"
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

	//Lista de obras
	app.get("/obras", verificaLogin, (req, res) => {
		let sql = "SELECT * FROM obras"
		con.query(sql, (err, results) => {
			if (err) {
				console.error("Erro get obras", err)
				res.status(500).json({ erro: "Erro na query" })
			} else {
				res.status(200).json(results)
			}
		})
	})

	//Get obra (pelo ID da obra)
	app.get("/obras/id/:id", verificaLogin, (req, res) => {
		let sql = "Select * from obras where idObra = ?"
		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" })
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Obra not found" })
				} else {
					res.status(200).json(results)
				}
			}
		})
	})

	//Peças de uma obra (pelo ID da obra)
	app.get("/obras/:id/pecas", verificaLogin, (req, res) => {
		let sql = "Select * from pecas where obra = ?"
		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" })
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Peças not found" })
				} else {
					res.status(200).json(results)
				}
			}
		})
	})

	
	//imagem do utilizador (pelo username)
	app.get("/tecnicos/username/:username/image",  (req, res) => {
		let sql = "SELECT * FROM tecnicos WHERE username = ?"
		con.query(sql, [req.params.username], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Imagem não existe" })
			} else {
				fs.readFile(results[0].fotografia, function (err, content) {
					if (err) {
						res.writeHead(400, {'Content-type':'text/html'})
						console.log(err);
						res.end("No such image");    
					} else {
						//specify the content type in the response will be an image
						res.writeHead(200,{'Content-type':'image/jpg'});
						res.end(content);
					}
				});
			}
		})	
	})
}