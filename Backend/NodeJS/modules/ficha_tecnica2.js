//export
module.exports = function(app, con, verificaLogin, verificaLoginAdmin) {

	//metodo que permite consultar uma ficha tecnica
	app.get("/objetos/:id/ft", (req, res) => {
		let json = [
		{
			idObjeto: null,
			designacao: null,
			processo: [{
			}],
			coordenador: null,
			funcao: null,
			imagens: [{
			}],
			superCategoria: null,
			categoria: null,
			subCategoria: null,
			tipologia: null,
			dimensoes: null,
			outrasDimensoes: null,
			localizacao: null,
			interessados: [{
			}],
			conjunto: null,
			elementosConjunto: null,
			elementosAcessorios: null,
			marcasAutoria: null,
			marcasMontagem: null,
			marcasConstrucao: null,
			classificacao: [{
				classificacaoPatrimonial: null,
				estilo: null,
				epoca: null,
				qualidade: null,
			}],
			estruturaMaterial: null,
			superficieMaterial: null,
			tecnicaEstrutura: null,
			tecnicaSuperficie: null,
			descricao: null,
			analogias: null,
			conclusoes: null,
			autoria: null,
			datacao: null,
			localOrigem: null,
			condicoesAmbientais: null,
			conclusoesAmbientais: null,
			objetivosExames: null,
			resultadosExames: null,
			conclusoesExames: null,
			ciclosClimatericos: [{
			}],
			iluminacao: [{
			}],
			poluicao: [{
			}],
			testes: [{
			}],
			conservacoes: [{
			}]
		}]
		let sql1 = "select * from objetos where idObjeto = ?"
		let sql2 = "select * from processos where objeto = ?"
		let sql3 = "select * from tecnicos,tecnicoProcesso where tecnico = idTecnico and processo = (select idProcesso from processos where objeto = ?)"
		let sql4 = "select * from imagens where objeto = ?"
		let sql5 = "select * from interessados, interessadosObjeto where idInteressado = interessado and objeto = ?"
		let sql6 = "select * from ciclosClimatericos where objeto = ?"
		let sql7 = "select * from iluminacao where objeto = ?"
		let sql8 = "select * from poluicao where objeto = ?"
		let sql9 = "select * from testes where objeto = ?"
		let sql10 = "select * from conservacoes where objeto = ?"
		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql1 +";"+ sql2 +";"+ sql3 +";"+ sql4 +";"+ sql5 +";"+ sql6 +";"+ sql7 +";"+ sql8 +";"+ sql9 +";"+ sql10, [req.params.id, req.params.id, req.params.id, req.params.id, req.params.id, req.params.id, req.params.id, req.params.id, req.params.id, req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" })
			} else {
				if (results[0].length == 0 || results[1].length == 0) {
					res.status(404).json({ erro: "Ficha Tecnica não encontrada" })
				} else {
					//console.log(results[3])
					json[0].idObjeto = results[0][0].idObjeto
					json[0].designacao = results[0][0].designacao
					json[0].processo[0].LCRM = results[1][0].LCRM
					json[0].processo[0].CEARC = results[1][0].CEARC
					json[0].processo[0].dataAberturaLCRM = results[1][0].dataAberturaLCRM
					json[0].processo[0].dataAberturaCEARC = results[1][0].dataAberturaCEARC
					json[0].processo[0].dataEntradaLCRM = results[1][0].dataAberturaLCRM
					json[0].processo[0].dataEntradaCEARC = results[1][0].dataEntradaCEARC
					json[0].coordenador = results[2][0].nome
					json[0].funcao = results[2][0].funcao
					json[0].imagens = results[3]
					json[0].superCategoria = results[0][0].superCategoria
					json[0].categoria = results[0][0].categoria
					json[0].subCategoria = results[0][0].subCategoria
					json[0].tipologia = results[0][0].tipologia
					json[0].dimensoes = results[0][0].dimensoes
					json[0].outrasDimensoes = results[0][0].outrasDimensoes
					json[0].localizacao = results[0][0].localizacao
					json[0].interessados = results[4]
					json[0].conjunto = results[0][0].conjunto
					json[0].elementosConjunto = results[0][0].elementosConjunto
					json[0].elementosAcessorios = results[0][0].elementosAcessorios
					json[0].marcasAutoria = results[0][0].marcasAutoria
					json[0].marcasMontagem = results[0][0].marcasMontagem
					json[0].marcasConstrucao = results[0][0].marcasConstrucao
					json[0].classificacao[0].classificacaoPatrimonial = results[0][0].classificacaoPatrimonial
					json[0].classificacao[0].estilo = results[0][0].estilo
					json[0].classificacao[0].epoca = results[0][0].epoca
					json[0].classificacao[0].qualidade = results[0][0].qualidade
					json[0].estruturaMaterial = results[0][0].estruturaMaterial
					json[0].superficieMaterial = results[0][0].superficieMaterial
					json[0].tecnicaEstrutura = results[0][0].tecnicaEstrutura
					json[0].tecnicaSuperficie = results[0][0].tecnicaSuperficie
					json[0].descricao = results[0][0].descricao
					json[0].analogias = results[0][0].analogias
					json[0].conclusoes = results[0][0].conclusoes
					json[0].autoria = results[0][0].autoria
					json[0].datacao = results[0][0].datacao
					json[0].localOrigem = results[0][0].localOrigem
					json[0].condicoesAmbientais = results[0][0].condicoesAmbientais
					json[0].conclusoesAmbientais = results[0][0].conclusoesAmbientais
					json[0].objetivosExames = results[0][0].objetivosExames
					json[0].resultadosExames = results[0][0].resultadosExames
					json[0].conclusoesExames = results[0][0].conclusoesExames
					json[0].ciclosClimatericos = results[5]
					json[0].iluminacao = results[6]
					json[0].poluicao = results[7]
					json[0].testes = results[8]
					json[0].conservacoes = results[9]
					res.status(200).json(json)
					console.log(JSON.stringify(json,null,2))
				}
			}
		})
	})

	//metodo que permite inserir a ficha tecnica de um objeto
	app.post('/objetos/new', function(request, response) {
	    //guarda os dados recebidos
	    let designacao = request.body.designacao
	    let LCRM = request.body.LCRM
	    let CEARC = request.body.CEARC
	    let dataAberturaLCRM = request.body.dataAberturaLCRM
	    let dataAberturaCEARC = request.body.dataAberturaCEARC
	    let dataEntradaLCRM = request.body.dataEntradaLCRM
	    let dataEntradaCEARC = request.body.dataEntradaCEARC
	    let coordenador = request.body.coordenador
	    let funcao = request.body.funcao
	    let superCategoria = request.body.superCategoria
		let categoria = request.body.categoria
		let subCategoria = request.body.subCategoria
		let tipologia = request.body.tipologia
		let dimensoes = request.body.dimensoes
		let outrasDimensoes = request.body.outrasDimensoes
		let localizacao = request.body.localizacao
		let conjunto = request.body.conjunto
		let elementosConjunto = request.body.elementosConjunto
		let elementosAcessorios = request.body.elementosAcessorios
		let marcasAutoria = request.body.marcasAutoria
		let marcasMontagem = request.body.marcasMontagem
		let marcasConstrucao = request.body.marcasConstrucao
		let classificacaoPatrimonial = request.body.classificacaoPatrimonial
		let estilo = request.body.estilo
		let epoca = request.body.epoca
		let qualidade = request.body.qualidade
		let estruturaMaterial = request.body.estruturaMaterial
		let superficieMaterial = request.body.superficieMaterial
		let tecnicaEstrutura = request.body.tecnicaEstrutura
		let tecnicaSuperficie = request.body.tecnicaSuperficie
		let descricao = request.body.descricao
		let analogias = request.body.analogias
		let conclusoes = request.body.conclusoes
		let autoria = request.body.autoria
		let datacao = request.body.datacao
		let localOrigem = request.body.localOrigem
		let condicoesAmbientais = request.body.condicoesAmbientais
		let conclusoesAmbientais = request.body.conclusoesAmbientais
		let objetivosExames = request.body.objetivosExames
		let resultadosExames = request.body.resultadosExames
		let conclusoesExames = request.body.conclusoesExames 
	    //foram recebidos dados
	    if (designacao && LCRM && CEARC && dataAberturaLCRM && dataAberturaCEARC && dataEntradaLCRM && dataEntradaCEARC &&
	    	coordenador && funcao && superCategoria && categoria && subCategoria && tipologia && dimensoes && outrasDimensoes
	    	&& localizacao && conjunto && elementosConjunto && elementosAcessorios && marcasAutoria && marcasMontagem &&
	    	marcasConstrucao && classificacaoPatrimonial && estilo && epoca && qualidade && estruturaMaterial &&
	    	superficieMaterial && tecnicaEstrutura && tecnicaSuperficie && descricao && analogias && conclusoes &&
	    	autoria && datacao && localOrigem && condicoesAmbientais && conclusoesAmbientais && objetivosExames &&
	    	resultadosExames && conclusoesExames) {
		    //procura utilizador na db
	        con.query('select * from tecnicos where idTecnico = ?', [coordenador],
	        function(error, results, fields) {
	            //utilizador não encontrado
	            if (results.length <= 0) {
	            	response.send('Coordenador inválido.')
					response.end() 
				} else {
					const obj = {
						designacao: designacao,
						superCategoria: superCategoria,
						categoria: categoria,
						subCategoria: subCategoria,
						tipologia: tipologia,
						localizacao: localizacao,
						dimensoes: dimensoes,
						outrasDimensoes: outrasDimensoes,
						conjunto: conjunto,
						elementosConjunto: elementosConjunto,
						elementosAcessorios: elementosAcessorios,
						marcasAutoria: marcasAutoria,
						marcasMontagem: marcasMontagem,
						marcasConstrucao: marcasConstrucao,
						classificacaoPatrimonial: classificacaoPatrimonial,
						estilo: estilo,
						epoca: epoca,
						qualidade: qualidade,
						estruturaMaterial: estruturaMaterial,
						superficieMaterial: superficieMaterial,
						tecnicaEstrutura: tecnicaEstrutura,
						tecnicaSuperficie: tecnicaSuperficie,
						descricao: descricao,
						analogias: analogias,
						conclusoes: conclusoes,
						autoria: autoria,
						datacao: datacao,
						localOrigem: localOrigem, 
						condicoesAmbientais: condicoesAmbientais,
						conclusoesAmbientais: conclusoesAmbientais,
						objetivosExames: objetivosExames,
						resultadosExames: resultadosExames,
						conclusoesExames: conclusoesExames
					}
					sql0 = 'start transaction'
					sql1 = 'insert into objetos set ?'
					sql2 = 'insert into processos (LCRM,CEARC,dataAberturaLCRM,dataAberturaCEARC,dataEntradaLCRM,dataEntradaCEARC,objeto) values(?, ?, ?, ?, ?, ?, (select idObjeto from objetos where designacao = ?))'
					sql3 = 'insert into tecnicoProcesso (tecnico,processo,funcao) values(?, (select idProcesso from processos where objeto = (select idObjeto from objetos where designacao = ?) ), ?)'
					con.query(sql0+';'+sql1+';'+sql2+';'+sql3, [obj,LCRM,CEARC,dataAberturaLCRM,dataAberturaCEARC,dataEntradaLCRM,dataEntradaCEARC,designacao,coordenador,designacao,funcao],
					function(error, results, fields) {
						if(error){
							console.log(error)
							con.query('rollback')
							response.send("Erro ao criar objeto")
							response.end()
						} else {
							let resposta = {
                                message: "Sucesso",
                                id: results[1].insertId 
                            }
                            con.query('commit')
                            response.send(resposta)
                            response.end()
						}
					})
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite adicionar imagens a um objeto
	app.post('/objetos/:id/imagens/new', function(request, response) {
	    //guarda os dados recebidos
	    let imagem = request.body.imagem
	    let tipo = request.body.tipo
	    let formato = request.body.formato
	    let referencia = request.body.referencia
	    let documentacao = request.body.documentacao
	    //foram recebidos dados
	    if (imagem && tipo && formato && referencia && documentacao) {
		    //procura utilizador na db
	        con.query('select * from objetos where idObjeto = ?', [request.params.id],
	        function(error, results, fields) {
	            //utilizador não encontrado
	            if (results.length <= 0) {
	            	response.send('Objeto inválido.')
					response.end() 
				} else {
					const img = {
						imagem: imagem,
						tipo: tipo,
						formato: formato,
						referencia: referencia,
						documentacao: documentacao,
						objeto : request.params.id
					}
					sql1 = 'insert into imagens set ?'
					con.query(sql1, [img],
					function(error, results, fields) {
						if(error){
							console.log(error)
							response.send("Erro ao adicionar imagem")
							response.end()
						} else {
							let resposta = {
                                message: "Sucesso",
                                id: results.insertId 
                            }
                            con.query('commit')
                            response.send(resposta)
                            response.end()
						}
					})
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite adicionar interessados de um objeto
	app.post('/interessados/new', function(request, response) {
	    //guarda os dados recebidos
	    let nome = request.body.nome
	    let NIF = request.body.NIF
	    let enderecoPostal = request.body.enderecoPostal
	    let enderecoEletronico = request.body.enderecoEletronico
	    let contacto = request.body.contacto
	    //foram recebidos dados
	    if (nome && NIF && enderecoPostal && enderecoEletronico && contacto) {
		    //procura utilizador na db
	        con.query('select * from interessados where NIF = ?', [NIF],
	        function(error, results, fields) {
	            //utilizador não encontrado
	            if (results.length > 0) {
	            	response.send('Interessado já registado')
					response.end() 
				} else {
					const int = {
						nome: nome,
						NIF: NIF,
						enderecoPostal: enderecoPostal,
						enderecoEletronico: enderecoEletronico,
						contacto: contacto
					}
					sql1 = 'insert into interessados set ?'
					con.query(sql1, [int],
					function(error, results, fields) {
						if(error){
							console.log(error)
							response.send("Erro ao registar interessado")
							response.end()
						} else {
							let resposta = {
                                message: "Sucesso",
                                id: results.insertId 
                            }
                            con.query('commit')
                            response.send(resposta)
                            response.end()
						}
					})
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite adicionar interessados de um objeto
	app.post('/objetos/:id/interessados/add', function(request, response) {
	    //guarda os dados recebidos
	    let interessado = request.body.interessado
	    let tipo = request.body.tipo
	    //foram recebidos dados
	    if (interessado && tipo) {
		    //procura objeto e interessado na db
		    sql1 = 'select * from objetos where idObjeto = ?'
		    sql2 = 'select * from interessados where idInteressado = ?'
	        con.query(sql1+';'+sql2, [request.params.id, interessado],
	        function(error, results, fields) {
	            //utilizador não encontrado
	            if (results[0].length <= 0) {
	            	response.send('Objeto inválido.')
					response.end() 
				} else if (results[1].length <= 0) {
	            	response.send('Interessado inválido.')
					response.end() 
				} else {
					const int = {
						interessado: interessado,
						objeto: request.params.id,
						tipo: tipo
					}
					sql1 = 'insert into interessadosObjeto set ?'
					con.query(sql1, [int],
					function(error, results, fields) {
						if(error){
							console.log(error)
							response.send("Erro ao adicionar interessado")
							response.end()
						} else {
							response.send("Sucesso")
							response.end()
						}
					})
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})								

	//metodo que permite adicionar ciclos climatericos a um objeto
	app.post('/objetos/:id/ciclosClimatericos/new', function(request, response) {
	    //guarda os dados recebidos
	    let temperatura = request.body.temperatura
	    let humidade = request.body.humidade
	    let periodoAno = request.body.periodoAno
	    //foram recebidos dados
	    if (temperatura && humidade && periodoAno) {
		    //procura utilizador na db
	        con.query('select * from objetos where idObjeto = ?', [request.params.id],
	        function(error, results, fields) {
	            //utilizador não encontrado
	            if (results.length <= 0) {
	            	response.send('Objeto inválido.')
					response.end() 
				} else {
					const ciclo = {
						temperatura: temperatura,
						humidade: humidade,
						periodoAno: periodoAno,
						objeto: request.params.id
					}
					sql1 = 'insert into ciclosClimatericos set ?'
					con.query(sql1, [ciclo],
					function(error, results, fields) {
						if(error){
							console.log(error)
							response.send("Erro ao adicionar ciclo climatérico")
							response.end()
						} else {
							let resposta = {
                                message: "Sucesso",
                                id: results.insertId 
                            }
                            con.query('commit')
                            response.send(resposta)
                            response.end()
						}
					})
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite adicionar um registo da iluminação a um objeto
	app.post('/objetos/:id/iluminacao/new', function(request, response) {
	    //guarda os dados recebidos
	    let fonte = request.body.fonte
	    let iluminancia = request.body.iluminancia
	    let UVmedido = request.body.UVmedido
	    let UVreal = request.body.UVreal
	    let tipo = request.body.tipo
	    //foram recebidos dados
	    if (fonte && iluminancia && UVmedido && UVreal && tipo) {
		    //procura utilizador na db
	        con.query('select * from objetos where idObjeto = ?', [request.params.id],
	        function(error, results, fields) {
	            //utilizador não encontrado
	            if (results.length <= 0) {
	            	response.send('Objeto inválido.')
					response.end() 
				} else {
					const ilum = {
						fonte: fonte,
						iluminancia: iluminancia,
						UVmedido: UVmedido,
						UVreal: UVreal,
						tipo: tipo,
						objeto: request.params.id
					}
					sql1 = 'insert into iluminacao set ?'
					con.query(sql1, [ilum],
					function(error, results, fields) {
						if(error){
							console.log(error)
							response.send("Erro ao adicionar iluminação")
							response.end()
						} else {
							let resposta = {
                                message: "Sucesso",
                                id: results.insertId 
                            }
                            con.query('commit')
                            response.send(resposta)
                            response.end()
						}
					})
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite adicionar um registo de poluição a um objeto
	app.post('/objetos/:id/poluicao/new', function(request, response) {
	    //guarda os dados recebidos
	    let agente = request.body.agente
	    let fonte = request.body.fonte
	    let resultados = request.body.resultados
	    //foram recebidos dados
	    if (agente && fonte && resultados) {
		    //procura utilizador na db
	        con.query('select * from objetos where idObjeto = ?', [request.params.id],
	        function(error, results, fields) {
	            //utilizador não encontrado
	            if (results.length <= 0) {
	            	response.send('Objeto inválido.')
					response.end() 
				} else {
					const pol = {
						agente: agente,
						fonte: fonte,
						resultados: resultados,
						objeto: request.params.id
					}
					sql1 = 'insert into poluicao set ?'
					con.query(sql1, [pol],
					function(error, results, fields) {
						if(error){
							console.log(error)
							response.send("Erro ao adicionar poluição")
							response.end()
						} else {
							let resposta = {
                                message: "Sucesso",
                                id: results.insertId 
                            }
                            con.query('commit')
                            response.send(resposta)
                            response.end()
						}
					})
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite adicionar um teste a um objeto
	app.post('/objetos/:id/testes/new', function(request, response) {
	    //guarda os dados recebidos
	    let referencia = request.body.referencia
	    let localizacao = request.body.localizacao
	    let objetivos = request.body.objetivos
	    let resultados = request.body.resultados
	    let data = request.body.data
	    let tecnico = request.body.tecnico
	    //foram recebidos dados
	    if (referencia && localizacao && objetivos && resultados && data && tecnico) {
		    //procura utilizador na db
		    sql1 = 'select * from objetos where idObjeto = ?'
		    sql2 = 'select * from tecnicos where idTecnico = ?'
	        con.query(sql1+';'+sql2, [request.params.id, tecnico],
	        function(error, results, fields) {
	            //utilizador não encontrado
	            if (results[0].length <= 0) {
	            	response.send('Objeto inválido.')
					response.end() 
				} else if (results[1].length <= 0) {
	            	response.send('Técnico inválido.')
					response.end() 
				} else {
					const pol = {
						referencia: referencia,
						localizacao: localizacao,
						objetivos: objetivos,
						resultados: resultados,
						data: data,
						tecnico: tecnico,
						objeto: request.params.id
					}
					sql3= 'insert into testes set ?'
					con.query(sql3, [pol],
					function(error, results, fields) {
						if(error){
							console.log(error)
							response.send("Erro ao adicionar teste")
							response.end()
						} else {
							let resposta = {
                                message: "Sucesso",
                                id: results.insertId 
                            }
                            con.query('commit')
                            response.send(resposta)
                            response.end()
						}
					})
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite adicionar um estado de conservação de um objeto
	app.post('/objetos/:id/conservacao/new', function(request, response) {
	    //guarda os dados recebidos
	    let tipo = request.body.tipo
	    let estado = request.body.estado
	    let estrutura = request.body.estrutura
	    let superficie = request.body.superficie
	    let elementos = request.body.elementos
	    let observacoes = request.body.observacoes
	    //foram recebidos dados
	    if (tipo && estado && estrutura && superficie && elementos && observacoes) {
		    //procura utilizador na db
	        con.query('select * from objetos where idObjeto = ?', [request.params.id],
	        function(error, results, fields) {
	            //utilizador não encontrado
	            if (results.length <= 0) {
	             	response.send('Objeto inválido.')
					response.end() 
				} else {
					const conserv = {
						tipo: tipo,
						estado: estado,
						estrutura: estrutura,
						superficie: superficie,
						elementos: elementos,
						observacoes: observacoes,
						objeto: request.params.id
					}
					sql1 = 'insert into conservacoes set ?'
					con.query(sql1, [conserv],
					function(error, results, fields) {
						if(error){
							console.log(error)
							response.send("Erro ao adicionar estado de conservação")
							response.end()
						} else {
							let resposta = {
                                message: "Sucesso",
                                id: results.insertId 
                            }
                            con.query('commit')
                            response.send(resposta)
                            response.end()
						}
					})
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite alterar a ficha tecnica de um objeto
	app.post('/objetos/:id/update', function(request, response) {
	    //guarda os dados recebidos
	    let designacao = request.body.designacao
	    let LCRM = request.body.LCRM
	    let CEARC = request.body.CEARC
	    let dataAberturaLCRM = request.body.dataAberturaLCRM
	    let dataAberturaCEARC = request.body.dataAberturaCEARC
	    let dataEntradaLCRM = request.body.dataEntradaLCRM
	    let dataEntradaCEARC = request.body.dataEntradaCEARC
	    let coordenador = request.body.coordenador
	    let funcao = request.body.funcao
	    let superCategoria = request.body.superCategoria
		let categoria = request.body.categoria
		let subCategoria = request.body.subCategoria
		let tipologia = request.body.tipologia
		let dimensoes = request.body.dimensoes
		let outrasDimensoes = request.body.outrasDimensoes
		let localizacao = request.body.localizacao
		let conjunto = request.body.conjunto
		let elementosConjunto = request.body.elementosConjunto
		let elementosAcessorios = request.body.elementosAcessorios
		let marcasAutoria = request.body.marcasAutoria
		let marcasMontagem = request.body.marcasMontagem
		let marcasConstrucao = request.body.marcasConstrucao
		let classificacaoPatrimonial = request.body.classificacaoPatrimonial
		let estilo = request.body.estilo
		let epoca = request.body.epoca
		let qualidade = request.body.qualidade
		let estruturaMaterial = request.body.estruturaMaterial
		let superficieMaterial = request.body.superficieMaterial
		let tecnicaEstrutura = request.body.tecnicaEstrutura
		let tecnicaSuperficie = request.body.tecnicaSuperficie
		let descricao = request.body.descricao
		let analogias = request.body.analogias
		let conclusoes = request.body.conclusoes
		let autoria = request.body.autoria
		let datacao = request.body.datacao
		let localOrigem = request.body.localOrigem
		let condicoesAmbientais = request.body.condicoesAmbientais
		let conclusoesAmbientais = request.body.conclusoesAmbientais
		let objetivosExames = request.body.objetivosExames
		let resultadosExames = request.body.resultadosExames
		let conclusoesExames = request.body.conclusoesExames
		//foram recebidos dados
	    if (designacao && LCRM && CEARC && dataAberturaLCRM && dataAberturaCEARC && dataEntradaLCRM && dataEntradaCEARC &&
	    	coordenador && funcao && superCategoria && categoria && subCategoria && tipologia && dimensoes && outrasDimensoes
	    	&& localizacao && conjunto && elementosConjunto && elementosAcessorios && marcasAutoria && marcasMontagem &&
	    	marcasConstrucao && classificacaoPatrimonial && estilo && epoca && qualidade && estruturaMaterial &&
	    	superficieMaterial && tecnicaEstrutura && tecnicaSuperficie && descricao && analogias && conclusoes &&
	    	autoria && datacao && localOrigem && condicoesAmbientais && conclusoesAmbientais && objetivosExames &&
	    	resultadosExames && conclusoesExames) {
		    //procura utilizador na db
	        con.query('select * from tecnicos where idTecnico = ?', [coordenador],
	        function(error, results, fields) {
	            //utilizador não encontrado
	            if (results.length <= 0) {
	            	response.send('Coordenador inválido.')
					response.end() 
				} else {
					const obj = {
						designacao: designacao,
						superCategoria: superCategoria,
						categoria: categoria,
						subCategoria: subCategoria,
						tipologia: tipologia,
						localizacao: localizacao,
						dimensoes: dimensoes,
						outrasDimensoes: outrasDimensoes,
						conjunto: conjunto,
						elementosConjunto: elementosConjunto,
						elementosAcessorios: elementosAcessorios,
						marcasAutoria: marcasAutoria,
						marcasMontagem: marcasMontagem,
						marcasConstrucao: marcasConstrucao,
						classificacaoPatrimonial: classificacaoPatrimonial,
						estilo: estilo,
						epoca: epoca,
						qualidade: qualidade,
						estruturaMaterial: estruturaMaterial,
						superficieMaterial: superficieMaterial,
						tecnicaEstrutura: tecnicaEstrutura,
						tecnicaSuperficie: tecnicaSuperficie,
						descricao: descricao,
						analogias: analogias,
						conclusoes: conclusoes,
						autoria: autoria,
						datacao: datacao,
						localOrigem: localOrigem, 
						condicoesAmbientais: condicoesAmbientais,
						conclusoesAmbientais: conclusoesAmbientais,
						objetivosExames: objetivosExames,
						resultadosExames: resultadosExames,
						conclusoesExames: conclusoesExames
					}
					const processo = {
						LCRM:LCRM,
						CEARC:CEARC,
						dataAberturaLCRM:dataAberturaLCRM,
						dataAberturaCEARC:dataAberturaCEARC,
						dataEntradaLCRM:dataEntradaLCRM,
						dataEntradaCEARC:dataEntradaCEARC
					}
					sql0 = 'start transaction'
					sql1 = 'update objetos set ? where idObjeto = ?'
					sql2 = 'update processos set ? where objeto = ?'
					sql3 = 'update tecnicoProcesso set tecnico = ?, funcao = ? where processo = (select idProcesso from processos where objeto = ?)'
					con.query(sql0+';'+sql1+';'+sql2+';'+sql3, [obj,request.params.id,processo, request.params.id, coordenador, funcao, request.params.id],
					function(error, results, fields) {
						if(error){
							console.log(error)
							con.query('rollback')
							response.send("Erro ao alterar objeto")
							response.end()
						} else {
							con.query('commit')
							response.send("Sucesso")
							response.end()
						}
					})
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

//metodo que permite alterar uma imagem
	app.post('/imagens/:id/update', function(request, response) {
	    //guarda os dados recebidos
	    let imagem = request.body.imagem
	    let tipo = request.body.tipo
	    let formato = request.body.formato
	    let referencia = request.body.referencia
	    let documentacao = request.body.documentacao
	    //foram recebidos dados
	    if (imagem && tipo && formato && referencia && documentacao) {
			const img = {
				imagem: imagem,
				tipo: tipo,
				formato: formato,
				referencia: referencia,
				documentacao: documentacao
			}
			sql1 = 'update imagens set ? where idImagem = ?'
			con.query(sql1, [img, request.params.id],
			function(error, results, fields) {
				if(error){
					console.log(error)
					response.send("Erro ao alterar imagem")
					response.end()
				} else {
					response.send("Sucesso")
					response.end()
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite alterar um interessado
	app.post('/interessados/:id/update', function(request, response) {
	    //guarda os dados recebidos
	    let nome = request.body.nome
	    let NIF = request.body.NIF
	    let enderecoPostal = request.body.enderecoPostal
	    let enderecoEletronico = request.body.enderecoEletronico
	    let contacto = request.body.contacto
	    //foram recebidos dados
	    if (nome && NIF && enderecoPostal && enderecoEletronico && contacto) {
			const int = {
				nome: nome,
				NIF: NIF,
				enderecoPostal: enderecoPostal,
				enderecoEletronico: enderecoEletronico,
				contacto: contacto
			}
			sql1 = 'update interessados set ? where idInteressado = ?'
			con.query(sql1, [int, request.params.id],
			function(error, results, fields) {
				if(error){
					console.log(error)
					response.send("Erro ao alterar interessado")
					response.end()
				} else {
					response.send("Sucesso")
					response.end()
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite alterar interessados de um objeto
	app.post('/objetos/:id/interessados/:idInteressado/update', function(request, response) {
	    //guarda os dados recebidos
	    let tipo = request.body.tipo
	    //foram recebidos dados
	    if (tipo) {
		    //procura objeto e interessado na db
		    sql1 = 'select * from objetos where idObjeto = ?'
		    sql2 = 'select * from interessados where idInteressado = ?'
	        con.query(sql1+';'+sql2, [request.params.id, request.params.idInteressado],
	        function(error, results, fields) {
	            //utilizador não encontrado
	            if (results[0].length <= 0) {
	            	response.send('Objeto inválido.')
					response.end() 
				} else if (results[1].length <= 0) {
	            	response.send('Interessado inválido.')
					response.end() 
				} else {
					const int = {
						tipo: tipo
					}
					sql1 = 'update interessadosObjeto set ? where objeto = ? and interessado = ?'
					con.query(sql1, [int, request.params.id, request.params.idInteressado],
					function(error, results, fields) {
						if(error){
							console.log(error)
							response.send("Erro ao alterar interessado do objeto")
							response.end()
						} else {
							response.send("Sucesso")
							response.end()
						}
					})
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})								

	//metodo que permite alterar ciclos climatericos
	app.post('/ciclosClimatericos/:id/update', function(request, response) {
	    //guarda os dados recebidos
	    let temperatura = request.body.temperatura
	    let humidade = request.body.humidade
	    let periodoAno = request.body.periodoAno
	    //foram recebidos dados
	    if (temperatura && humidade && periodoAno) {
			const ciclo = {
				temperatura: temperatura,
				humidade: humidade,
				periodoAno: periodoAno
			}
			sql1 = 'update ciclosClimatericos set ? where idCiclo = ?'
			con.query(sql1, [ciclo, request.params.id],
			function(error, results, fields) {
				if(error){
					console.log(error)
					response.send("Erro ao alterar ciclo climatérico")
					response.end()
				} else {
					response.send("Sucesso")
					response.end()
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite alterar um registo da iluminação 
	app.post('/iluminacao/:id/update', function(request, response) {
	    //guarda os dados recebidos
	    let fonte = request.body.fonte
	    let iluminancia = request.body.iluminancia
	    let UVmedido = request.body.UVmedido
	    let UVreal = request.body.UVreal
	    let tipo = request.body.tipo
	    //foram recebidos dados
	    if (fonte && iluminancia && UVmedido && UVreal && tipo) {
			const ilum = {
				fonte: fonte,
				iluminancia: iluminancia,
				UVmedido: UVmedido,
				UVreal: UVreal,
				tipo: tipo
			}
			sql1 = 'update iluminacao set ? where idIluminacao = ?'
			con.query(sql1, [ilum, request.params.id],
			function(error, results, fields) {
				if(error){
					console.log(error)
					response.send("Erro ao alterar iluminação")
					response.end()
				} else {
					response.send("Sucesso")
					response.end()
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite alterar um registo de poluição
	app.post('/poluicao/:id/update', function(request, response) {
	    //guarda os dados recebidos
	    let agente = request.body.agente
	    let fonte = request.body.fonte
	    let resultados = request.body.resultados
	    //foram recebidos dados
	    if (agente && fonte && resultados) {
			const pol = {
				agente: agente,
				fonte: fonte,
				resultados: resultados
			}
			sql1 = 'update poluicao set ? where idPoluicao = ?'
			con.query(sql1, [pol, request.params.id],
			function(error, results, fields) {
				if(error){
					console.log(error)
					response.send("Erro ao alterar poluição")
					response.end()
				} else {
					response.send("Sucesso")
					response.end()
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite alterar um teste a um objeto
	app.post('/testes/:id/update', function(request, response) {
	    //guarda os dados recebidos
	    let referencia = request.body.referencia
	    let localizacao = request.body.localizacao
	    let objetivos = request.body.objetivos
	    let resultados = request.body.resultados
	    let data = request.body.data
	    let tecnico = request.body.tecnico
	    //foram recebidos dados
	    if (referencia && localizacao && objetivos && resultados && data && tecnico) {
		    //procura utilizador na db
		    sql1 = 'select * from tecnicos where idTecnico = ?'
	        con.query(sql1, [tecnico],
	        function(error, results, fields) {
	            //utilizador não encontrado
	            if (results.length <= 0) {
	            	response.send('Técnico inválido.')
					response.end() 
				} else {
					const pol = {
						referencia: referencia,
						localizacao: localizacao,
						objetivos: objetivos,
						resultados: resultados,
						data: data,
						tecnico: tecnico
					}
					sql2= 'update testes set ? where idTeste = ?'
					con.query(sql2, [pol, request.params.id],
					function(error, results, fields) {
						if(error){
							console.log(error)
							response.send("Erro ao alterar teste")
							response.end()
						} else {
							response.send("Sucesso")
							response.end()
						}
					})
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

	//metodo que permite alterar um estado de conservação de um objeto
	app.post('/conservacao/:id/update', function(request, response) {
	    //guarda os dados recebidos
	    let tipo = request.body.tipo
	    let estado = request.body.estado
	    let estrutura = request.body.estrutura
	    let superficie = request.body.superficie
	    let elementos = request.body.elementos
	    let observacoes = request.body.observacoes
	    //foram recebidos dados
	    if (tipo && estado && estrutura && superficie && elementos && observacoes) {
			const conserv = {
				tipo: tipo,
				estado: estado,
				estrutura: estrutura,
				superficie: superficie,
				elementos: elementos,
				observacoes: observacoes
			}
			sql1 = 'update conservacoes set ? where idConservacao = ?'
			con.query(sql1, [conserv, request.params.id],
			function(error, results, fields) {
				if(error){
					console.log(error)
					response.send("Erro ao alterar estado de conservação")
					response.end()
				} else {
					response.send("Sucesso")
					response.end()
				}
			})
		} else {
			response.send("Dados incompletos")
			response.end()
		}
	})

//metodo que permite remover uma ficha tecnica
    app.get("/objetos/:id/remove", (request, response) => {
        con.query('select * from objetos where idObjeto = ?', [request.params.id],
        function(error, results, fields) {
            //utilizador não encontrado
            if (results.length <= 0) {
                response.send('Objeto inválido.')
                response.end() 
            } else {
                let sql0 = 'start transaction'
                let sql1 = 'delete from tecnicoProcesso where processo = (Select idProcesso from processos where objeto = ?)'
                let sql2 = 'delete from interessadosObjeto where objeto = ?'
                let sql3 = 'delete from processos where objeto = ?'
                let sql4 = 'delete from imagens where objeto = ?'
                let sql5 = 'delete from ciclosClimatericos where objeto = ?'
                let sql6 = 'delete from iluminacao where objeto = ?'
                let sql7 = 'delete from poluicao where objeto = ?'
                let sql8 = 'delete from testes where objeto = ?'
                let sql9 = 'delete from conservacoes where objeto = ?'
                let sql10 = 'delete from objetos where idObjeto = ?'
                // request.params.id mapeia o :id que está no URL acima.
                con.query(sql0+';'+sql1+';'+sql2+';'+sql3+';'+sql4+';'+sql5+';'+sql6+';'+sql7+';'+sql8+';'+sql9+';'+sql10, [request.params.id, request.params.id, request.params.id, request.params.id, request.params.id, request.params.id, request.params.id, request.params.id, request.params.id, request.params.id], (err, results) => {
                    if (err) {
                        console.log(err)
                        con.query('rollback')
                        response.status(500).json({ erro: "Erro ao remover Ficha Tecnica" })
                    } else {
                        con.query('commit')
                        response.status(200).json({message: "Ficha Tecnica removida com sucesso"})
                    }
                })
            }
        })
    })
	//metodo que permite remover uma imagem
	app.get("/imagens/:id/remove", (request, response) => {
		let sql1 = 'select * from imagens where idImagem = ?'
		// request.params.id mapeia o :id que está no URL acima.
		con.query(sql1, [request.params.id], (err, results) => {
			console.log(err)
			if(results.length<=0){
				response.status(404).json({ erro: "Imagem não encontrada" })
			}else{
				let sql2 = 'delete from imagens where idImagem = ?'
				// request.params.id mapeia o :id que está no URL acima.
				con.query(sql2, [request.params.id], (err, results) => {
					if (err) {
						response.status(500).json({ erro: "Erro ao remover imagem" })
					} else {
						response.status(200).json({message: "Imagem removida com sucesso"})
					}
				})
			}
		})
	})

	//metodo que permite remover um interessado
	app.get("/interessados/:id/remove", (request, response) => {
		let sql1 = 'select * from interessados where idInteressado = ?'
		// request.params.id mapeia o :id que está no URL acima.
		con.query(sql1, [request.params.id], (err, results) => {
			console.log(err)
			if(results.length<=0){
				response.status(404).json({ erro: "Interessado não encontrado" })
			}else{
				let sql0 = 'start transaction'
				let sql1 = 'delete from interessadosObjeto where interessado = ?'
				let sql2 = 'delete from interessados where idInteressado = ?'
				// request.params.id mapeia o :id que está no URL acima.
				con.query(sql0+';'+sql1+';'+sql2, [request.params.id,request.params.id], (err, results) => {
					if (err) {
						con.query('rollback')
						response.status(500).json({ erro: "Erro ao eliminar interessado" })
					} else {
						con.query('commit')
						response.status(200).json({message: "Interessado removido com sucesso"})
					}
				})
			}
		})
	})

	//metodo que permite remover um interessado de um objeto
	app.get("/objetos/:id/interessados/:id2/remove", (request, response) => {
		let sql1 = 'select * from interessadosObjeto where interessado = ? and objeto = ?'
		// request.params.id mapeia o :id que está no URL acima.
		con.query(sql1, [request.params.id2, request.params.id], (err, results) => {
			console.log(results)
			if(results.length<=0){
				response.status(404).json({ erro: "Interessado do objeto não encontrado" })
			}else{
				let sql = 'delete from interessadosObjeto where objeto = ? and interessado = ?'
				// request.params.id mapeia o :id que está no URL acima.
				con.query(sql, [request.params.id, request.params.id2], (error, results) => {
					if (error) {
						response.status(500).json({ erro: "Erro ao remover interessado" })
					} else {
						response.status(200).json({message: "Interessado de um objeto removido com sucesso"})
					}
				})
			}
		})
	})

	//metodo que permite remover um ciclosClimaterico
	app.get("/ciclosClimatericos/:id/remove", (request, response) => {
		let sql1 = 'select * from ciclosClimatericos where idCiclo = ?'
		// request.params.id mapeia o :id que está no URL acima.
		con.query(sql1, [request.params.id], (err, results) => {
			console.log(err)
			if(results.length<=0){
				response.status(404).json({ erro: "Ciclo climatérico não encontrado" })
			}else{
				let sql = 'delete from ciclosClimatericos where idCiclo = ?'
				// request.params.id mapeia o :id que está no URL acima.
				con.query(sql, [request.params.id], (err, results) => {
					if (err) {
						response.status(500).json({ erro: "Erro ao remover ciclo climatérico" })
					} else {
						response.status(200).json({ message: "Ciclo climatérico removido com sucesso"})
					}
				})
			}
		})
	})

	//metodo que permite remover uma iluminação
	app.get("/iluminacao/:id/remove", (request, response) => {
		let sql1 = 'select * from iluminacao where idIluminacao = ?'
		// request.params.id mapeia o :id que está no URL acima.
		con.query(sql1, [request.params.id], (err, results) => {
			console.log(err)
			if(results.length<=0){
				response.status(404).json({ erro: "Iluminação não encontrada" })
			}else{
				let sql = 'delete from iluminacao where idIluminacao = ?'
				// request.params.id mapeia o :id que está no URL acima.
				con.query(sql, [request.params.id], (err, results) => {
					if (err) {
						response.status(500).json({ erro: "Erro ao remover iluminação" })
					} else {
						response.status(200).json({message: "Iluminação removida com sucesso"})
					}
				})
			}
		})
	})


	//metodo que permite remover uma poluição
	app.get("/poluicao/:id/remove", (request, response) => {
		let sql1 = 'select * from poluicao where idPoluicao = ?'
		// request.params.id mapeia o :id que está no URL acima.
		con.query(sql1, [request.params.id], (err, results) => {
			console.log(err)
			if(results.length<=0){
				response.status(404).json({ erro: "Poluição não encontrada" })
			}else{
				let sql = 'delete from poluicao where idPoluicao = ?'
				// request.params.id mapeia o :id que está no URL acima.
				con.query(sql, [request.params.id], (err, results) => {
					if (err) {
						response.status(500).json({ erro: "Erro ao remover poluição" })
					} else {
						response.status(200).json({message: "Poluição removida com sucesso"})
					}
				})
			}
		})
	})

	//metodo que permite remover um teste
	app.get("/testes/:id/remove", (request, response) => {
		let sql1 = 'select * from testes where idTeste = ?'
		// request.params.id mapeia o :id que está no URL acima.
		con.query(sql1, [request.params.id], (err, results) => {
			console.log(err)
			if(results.length<=0){
				response.status(404).json({ erro: "Teste não encontrado" })
			}else{
				let sql = 'delete from testes where idTeste = ?'
				// request.params.id mapeia o :id que está no URL acima.
				con.query(sql, [request.params.id], (err, results) => {
					if (err) {
						response.status(500).json({ erro: "Erro ao remover teste" });
					} else {
						response.status(200).json({message: "Teste removido com sucesso"});
					}
				});
			}
		})
	});

	//metodo que permite remover uma conservação
	app.get("/conservacoes/:id/remove", (request, response) => {
		let sql1 = 'select * from conservacoes where idConservacao = ?'
		// request.params.id mapeia o :id que está no URL acima.
		con.query(sql1, [request.params.id], (err, results) => {
			console.log(err)
			if(results.length<=0){
				response.status(404).json({ erro: "Conservação não encontrada" })
			}else{
				let sql = 'delete from conservacoes where idConservacao = ?'
				// request.params.id mapeia o :id que está no URL acima.
				con.query(sql, [request.params.id], (err, results) => {
					if (err) {
						response.status(500).json({ erro: "Erro ao remover conservação" })
					} else {
						response.status(200).json({message: "Conservação removida com sucesso"})
					}
				})
			}
		})
	})
}