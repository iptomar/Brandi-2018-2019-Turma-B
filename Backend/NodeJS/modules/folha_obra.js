//modules



//export
module.exports = function(app, con, verificaLogin, verificaLoginAdmin) {
	
	//metodo que permite consultar uma folha de obra
	app.get("/peca/:id/folhaobra", verificaLogin, (req, res) => {
		let json=[
		]
		let sql1 = "select procedimentos.*, tecnicos.nome as nomeTecnico from procedimentos, tecnicos where procedimentos.peca = ? and procedimentos.tecnico = tecnicos.idTecnico"
		let sql2 = "select * from materiais where procedimento=?"
		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql1 , [req.params.id], (err, results) => {
			if (err) {
				console.log(err)
				res.status(500).json({ erro: "Erro na query" })
			} else {
				if (results[0].length == 0) {
					res.status(404).json({ erro: "Folha de obra não encontrada" })
				} else {
					json=results
					for (let i = 0; i < results.length; i++) {
						con.query(sql2, [results[i].idProcedimento],(err,results2)=>{
				
							for(let j=0; j<json.length; j++){
								if(json[j].idProcedimento===results[i].idProcedimento){
									json[j].materiais=results2
									if( i === results.length-1 && j===json.length-1){
										res.status(200).json(json)
										console.log(JSON.stringify(json,null,2))
									}
								}
							}
						})
					}
				}
			}
		})
	})

	//metodo que permite consultar uma folha de obra
	app.get("/peca/:id/folhaobraHeader", verificaLogin, (req, res) => {
		let sql = "SELECT pecas.designacao as peca, obras.CEARC as processoCEARC FROM pecas, obras where pecas.idPeca = ? and pecas.obra = obras.idObra"
		con.query(sql,[req.params.id], (err, results) => {
			if (err) {
				console.error("Erro get folha de obra [HEADER]", err)
				res.status(500).json({ erro: "Erro na query" })
			} else {
				res.status(200).json(results)
			}
		})
	})


	//metodo que permite inserir um procedimento
	app.post('/procedimentos/new', verificaLogin, function(request, response) {
		//guarda os dados recebidos
		
		let	designacao  = request.body.designacao
		let	data  = request.body.data
		let	duracao = request.body.duracao
		let observacoes = request.body.observacoes
		let	peca = request.body.peca
		let	tecnico = request.body.tecnico
		let materiais = request.body.materiais
		console.log(materiais[0])
		//foram recebidos dados
		if (data && designacao && duracao && observacoes && peca && tecnico) {
			sql0 = 'start transaction'
			sql1 = 'insert into procedimentos (data, designacao, duracao, observacoes, peca, tecnico) values(?,?,?,?,?,?)'
			sql2 = 'insert into materiais (material, quantidade, procedimento)values(?,?,?)'
			con.query(sql0+';'+sql1, [data, designacao, duracao, observacoes, peca, tecnico],
			function(error, results, fields) {
				if(error){
					console.log(error)
					con.query('rollback')
					response.send("Erro ao registar procedimento")
					response.end()
				} else {
					let resposta = {
						message: "Sucesso",
						id: results[1].insertId 
					}
					for(let i=0; i<materiais.length; i++){
						con.query(sql2, [materiais[i][0],materiais[i][1],resposta.id],
						function(error, results, fields) {
							if(error){
								con.query('rollback')
								response.send("Erro ao registar procedimento")
								response.end()
							}else{
								if(i===materiais.length-1){
									con.query('commit')
									response.send(resposta)
									response.end()
								}
							}
						})
					}
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite alterar um procedimento
	app.post('/procedimentos/:id/update', verificaLogin, function(request, response) {
		//guarda os dados recebidos	
		let	designacao  = request.body.designacao
		let	data  = request.body.data
		let	duracao = request.body.duracao
		let observacoes = request.body.observacoes
		let	peca = request.body.peca
		let	tecnico = request.body.tecnico
		//foram recebidos dados
		if (data && designacao && duracao && observacoes && peca && tecnico) {
			sql0 = 'start transaction'
			sql1 = 'update procedimentos set data = ?, designacao = ?, duracao = ?, observacoes = ?, peca = ?, tecnico = ? where idProcedimento = ?'
			con.query(sql0+';'+sql1, [data, designacao, duracao, observacoes, peca, tecnico, request.params.id],
			function(error, results, fields) {
				if(error){
					console.log(error)
					con.query('rollback')
					response.send("Erro ao alterar procedimento")
					response.end()
				} else {
					con.query('commit')
					response.send("Sucesso")
					response.end()
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})	

	//metodo que permite alterar um procedimento
	app.post('/materiais/:id/update', verificaLogin, function(request, response) {
		//guarda os dados recebidos	
		let	materiais  = request.body.materiais
		let	quantidade  = request.body.quantidade
		//foram recebidos dados
		if (materiais && quantidade) {
			sql0 = 'start transaction'
			sql1 = 'update materiais set material = ?, quantidade = ? where idMaterial = ?'
			con.query(sql0+';'+sql1, [materiais, quantidade, request.params.id],
			function(error, results, fields) {
				if(error){
					console.log(error)
					con.query('rollback')
					response.send("Erro ao alterar materiais")
					response.end()
				} else {
					con.query('commit')
					response.send("Sucesso")
					response.end()
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})	

	//metodo que permite remover um material
	app.get("/materiais/:id/remove", verificaLoginAdmin, (request, response) => {
		let sql1 = 'select * from materiais where idMaterial = ?'
		// request.params.id mapeia o :id que está no URL acima.
		con.query(sql1, [request.params.id], (err, results) => {
			if(results.length<=0){
				response.status(404).json({ erro: "Materiais não encontrado" })
			}else{
				let sql2 = 'delete from materiais where idMaterial = ?'
				con.query(sql2, [request.params.id], (err, results) => {
					if(err){
						console.log(err)
						response.status(500).json({ erro: "Erro ao remover material" });
					} else {
						response.status(200).json({message: "Material removido com sucesso"});
					}
				})
			}
		})
	})

	//metodo que permite remover um procedimento
	app.get("/procedimentos/:id/remove", verificaLoginAdmin, (request, response) => {
		let sql0 = 'select * from procedimentos where idProcedimento = ?'
		// request.params.id mapeia o :id que está no URL acima.
		con.query(sql0, [request.params.id], (err, results) => {
			if(results.length<=0){
				response.status(404).json({ erro: "Procedimento não encontrado" })
			}else{
				let sql1 = 'start transaction'
				let sql2 = 'delete from materiais where procedimento = ?'
				let sql3 = 'delete from procedimentos where idProcedimento=?'
				con.query(sql1+';'+sql2+';'+sql3, [request.params.id,request.params.id], (err, results) => {
					if(err){
						console.log(err)
						con.query('rollback')
						response.status(500).json({ erro: "Erro ao remover procedimento" });
					} else {
						con.query('commit')
						response.status(200).json({message: "Procedimento removido com sucesso"});
					}
				})
			}
		})
	})
}