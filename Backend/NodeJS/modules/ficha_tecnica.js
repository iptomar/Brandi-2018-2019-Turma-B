//export
module.exports = function(app, con, verificaLogin, verificaLoginAdmin) {

	//method: get | action: consultarFT
	//metodo que permite consultar uma ficha tecnica
	app.get("/objetos/:id/consultarFT", (req, res) => {
		let sql = "Select o.designacao, p.LCRM, p.CEARC, p.dataAberturaLCRM, p.dataAberturaCEARC, p.dataEntradaLCRM, p.dataEntradaCEARC, t.nome, tp.funcao  from processos p, tecnicos t, tecnicoProcesso tp, objetos o where t.idTecnico=tp.tecnico and p.idProcesso=tp.processo and p.objeto=o.idObjeto and p.objeto = ?"

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" })
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Ficha Tecnica não encontrada" })
				} else {
					res.status(200).json(results)
				}
			}
		})
	})

	//method: post | action: inserirFT
	//metodo que permite inserir a ficha tecnica
	app.post('/inserirFT', function(request, response) {
	    //guarda os dados recebidos
	    let LCRM = request.body.LCRM
	    let CEARC = request.body.CEARC
	    let dataAberturaLCRM = request.body.dataAberturaLCRM
	    let dataAberturaCEARC = request.body.dataAberturaCEARC
	    let dataEntradaLCRM = request.body.dataEntradaLCRM
	    let dataEntradaCEARC = request.body.dataEntradaCEARC
	    let coordenador = request.body.coordenador
	    let funcao = request.body.funcao
	    let objeto = request.body.objeto

	    //guardar o id do tecnico, id do processo e id do objetos
	    let idTecnico
	    let idProcesso
	    let idObjeto

	    //foram recebidos dados
	    if (LCRM && CEARC && dataAberturaLCRM && dataAberturaCEARC && dataEntradaLCRM && dataEntradaCEARC && coordenador && funcao && objeto) {
		
	        //procura utilizador na db
	        con.query('SELECT idTecnico FROM tecnicos WHERE nome = ?', [coordenador],
	        function(error, results, fields) {
	            //utilizador encontrado
	            if (results.length > 0) {
	                idTecnico=results[0].idTecnico
					
					con.query('SELECT * FROM objetos WHERE designacao = ?', [objeto],
					function(error, results, fields) {
						//objeto encontrado
						if (results.length > 0) {
							idObjeto=results[0].idObjeto
							con.query('SELECT * FROM processos WHERE objeto=?', [idObjeto],
							function(error, results, fields) {
								if (results.length == 0) {
									//insere na tabela processo os dados
									const processo= {LCRM:LCRM, CEARC:CEARC, dataAberturaLCRM:dataAberturaLCRM, dataAberturaCEARC:dataAberturaCEARC, dataEntradaLCRM:dataEntradaLCRM, dataEntradaCEARC:dataEntradaCEARC, objeto:idObjeto}
									con.query('INSERT INTO processos SET ?', [processo],
									function(error, results, fields) {
										if(error){
											response.send("Erro ao inserir na tabela processos")
											response.end()
										}else{
											idProcesso=results.insertId
											//insere na tabela tecnicoProcesso os dados
											const tecnicoProcesso = {tecnico:idTecnico, processo:idProcesso, funcao:funcao }
											con.query('INSERT INTO tecnicoProcesso SET ?', [tecnicoProcesso],
											function(error, results, fields) {
												if(error){
													con.query('delete from processos where objeto = ?', [idObjeto],
														function(error, results, fields) {
															if(error){
																response.send("Erro inesperado")
																response.end()
															}else{
																response.send("Erro ao inserir na tabela tecnicosProcesso")
																response.end()
															}
													})
												}else{
													response.send("Ficha Tecnica inserida com sucesso")
													response.end()
												}
		
											})
										}
									})
								}
								else{
									response.send('Ficha tecnica já existe.')
									response.end()
								}
							})	
						//objeto não encontrado
						} else {
							//response.send('Objeto inválido.')
							//response.end()
							const obj = {designacao : objeto, superCategoria:"", categoria:"", subCategoria:"", tipologia:"", localizacao:"", dimensoes:"", outrasDimensoes:"", conjunto:false, elementosConjunto:"", elementosAcessorios:"", marcasAutoria:"", marcasMontagem:"",marcasConstrucao:"", classificacaoPatrimonial:"", estilo:"", epoca:"", qualidade:"", estruturaMaterial:"", superficieMaterial:"", tecnicaEstrutura:"", tecnicaSuperficie:"", descricao:"", analogias:"", conclusoes:"", autoria:"", datacao:"", localOrigem:"", condicoesAmbientais:""}
							con.query('INSERT INTO objetos SET ?', [obj],
							function(error, results, fields) {
								if(error){
									console.log(error)
									 response.send("Erro ao inserir novo objeto")
								}else{
									idObjeto=results.insertId
									con.query('SELECT * FROM processos WHERE objeto=?', [idObjeto],
									function(error, results, fields) {
										if (results.length == 0) {
											//insere na tabela processo os dados
											const processo= {LCRM:LCRM, CEARC:CEARC, dataAberturaLCRM:dataAberturaLCRM, dataAberturaCEARC:dataAberturaCEARC, dataEntradaLCRM:dataEntradaLCRM, dataEntradaCEARC:dataEntradaCEARC, objeto:idObjeto}
											con.query('INSERT INTO processos SET ?', [processo],
											function(error, results, fields) {
												if(error){
													response.send("Erro ao inserir na tabela processos")
													response.end()
												}else{
													idProcesso=results.insertId
													//insere na tabela tecnicoProcesso os dados
													const tecnicoProcesso = {tecnico:idTecnico, processo:idProcesso, funcao:funcao }
													con.query('INSERT INTO tecnicoProcesso SET ?', [tecnicoProcesso],
													function(error, results, fields) {
														if(error){
															con.query('delete from processos where idProcesso = ?', [idProcesso],
															function(error, results, fields) {
																if(error){
																	console.log(error)
																	response.send("Erro inesperado")
																	response.end()
																}else{
																	response.send("Erro ao inserir na tabela tecnicosProcesso")
																	response.end()
																}
															})
															
														}else{
															response.send("Ficha Tecnica inserida com sucesso")
															response.end()
														}
				
													})
												}
											})
										}
										else{
											response.send('Ficha tecnica já existe.')
											response.end()
										}
									})	
								}

							})
						}
					})


	            //utilizador não encontrado
	            } else {
	                response.send('Coordenador inválido.')
	 		response.end()
	            }
	        })
	    //não foram recebidos dados
	    } else {
	        response.send('Por favor peencha todos os campos.')
	        response.end()
	    }
	})


	//method: post | action: updateFT
	//metodo que permite dar update a uma ficha tecnica
	app.post('/objetos/:id/updateFT', function(request, response) {
		//guarda os dados recebidos
		var LCRM = request.body.LCRM
		var CEARC = request.body.CEARC
		var dataAberturaLCRM = request.body.dataAberturaLCRM
		var dataAberturaCEARC = request.body.dataAberturaCEARC
		var dataEntradaLCRM = request.body.dataEntradaLCRM
		var dataEntradaCEARC = request.body.dataEntradaCEARC
		var coordenador = request.body.coordenador
		var funcao = request.body.funcao
		
		
		//guardar o id do tecnico, id do processo e id do objetos
		var idTecnico
		var idProcesso
		
		
		//foram recebidos dados
		if (LCRM && CEARC && dataAberturaLCRM && dataAberturaCEARC && dataEntradaLCRM && dataEntradaCEARC && coordenador && funcao) {
			//procura utilizador na db
			con.query('SELECT idTecnico FROM tecnicos WHERE nome = ?', [coordenador],
			function(error, results, fields) {
				//utilizador encontrado
				if (results.length > 0) {
					idTecnico=results[0].idTecnico
					//verifica se existe a ficha tecnica
					const tecnicoProcesso = {tecnico:idTecnico, funcao:funcao }
					con.query('select * from processos WHERE objeto = ?', [request.params.id],
					function(error, results, fields) {
						if (error) {
							response.send( "Erro ao procurar o objeto" )
							response.end()
						} else {
							if(results.length>0){
								//update na tabela processo dos dados
								const processo= {LCRM:LCRM, CEARC:CEARC, dataAberturaLCRM:dataAberturaLCRM, dataAberturaCEARC:dataAberturaCEARC, dataEntradaLCRM:dataEntradaLCRM, dataEntradaCEARC:dataEntradaCEARC}
								con.query('UPDATE processos SET  ? WHERE objeto = ?', [processo, request.params.id],
								function(error, results, fields) {
									if (error) {
										response.send( "Erro ao atualizar os dados na tabela processos" )
										response.end()
									} else {
										//update na tabela tecnicoProcesso dos dados
										const tecnicoProcesso = {tecnico:idTecnico, funcao:funcao }
										con.query('update tecnicoProcesso SET ? WHERE processo=(SELECT idProcesso FROM processos WHERE objeto = ?)', [tecnicoProcesso,request.params.id],
										function(error, results, fields) {
											if (error) {
												response.send( "Erro ao atualizar os dados na tabela tecnicoProcesso" )
												response.end()
											} else {
												response.send("Ficha Tecnica alterada com sucesso")
												response.end()
											}	
										})
									}
								})
							}else{
							response.send("Ficha Tecnica não encontrada")
							response.end()
							
							}
						}	
					})

					
				//utilizador não encontrado
				} else {
					response.send('Coordenador inválido.')
					response.end()
				}		
			})
		//não foram recebidos dados
		} else {
			response.send('Por favor peencha todos os campos.')
			response.end()
		}
	})

	//method: get | action: removeFT
	//metodo que permite remover uma ficha tecnica
	app.get("/objetos/:id/removeFT", (req, res) => {
	    
		con.query('SELECT * FROM processos WHERE objeto = ?', [req.params.id],
	        function(error, results, fields) {
				if(results.length>0){
					let sql = "Delete from tecnicoProcesso where processo = (Select idProcesso from processos where objeto = ?); Delete from processos where objeto = ?"
					// req.params.id mapeia o :id que está no URL acima.
					con.query(sql, [req.params.id, req.params.id], (err, results) => {
						if (err) {
							res.status(500).json({ erro: "Erro ao remover Ficha Tecnica" })
						} else {
							res.status(200).json({message: "Ficha Tecnica removida com sucesso"})
						}
					})
				}else{
					res.status(404).json({ erro: "Ficha Tecnica não encontrada" })
				}
		})
	})

	//method: get | action: remove
	//metodo que permite remover um objeto
	app.get("/objetos/:id/remove", (req, res) => {
		let sql = "Delete from objetos where idObjeto = ?"
		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro ao remover Objeto" })
			} else {
				res.status(200).json({message: "Objeto removido com sucesso"})
			}
		})
	})

}