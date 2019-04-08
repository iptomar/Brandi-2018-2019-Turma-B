//modules
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
//coneção com db
var con = mysql.createConnection({
	host     : 'localhost',
	user     : 'adminb',
	password : 'adminB123!',
	database : 'brandiBDB',
    multipleStatements: true
});
//inicia o express
var app = express();
//define sessão
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
//define o bodyparser para trabalhar com json
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//verifica se o utilizador esta autenticado
function verificaLogin(req, res, next) {
	if (req.session.loggedin) { 
	  next();
	} else {
		res.status(500).json({ erro: "Not Loggedin" });
	}
  }
//verifica se o utilizador esta autenticado e se a sua role é admin
  function verificaLoginAdmin(req, res, next) {
	if (req.session.loggedin && req.session.role === "admin") { 
	  next(); 
	} else {
		res.status(500).json({ erro: "Permission denied" });
	}
  }

//method: post | action: auth
//autentica o utilizador através do username e password
app.post('/auth', function(request, response) {
	//guarda o username e password recebidos
	var username = request.body.username;
	var password = request.body.password;
	//foram recebidos dados
	if (username && password) {
		//procura utilizador na db
		con.query('SELECT * FROM tecnicos WHERE username = ? AND password = ?', [username, password],
		function(error, results, fields) {
			//utilizador encontrado
			if (results.length > 0) {
				//guarda a informação do utilizador logged in
				request.session.loggedin = true;
				request.session.username = username;
				request.session.role = results[0].tipo;
				response.status(200).json({ message: "Logged in " });

			//utilizador não encontrado
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	//não foram recebidos dados
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

//method: post | action: logout
//termina a sessão
app.get('/logout', function(request, response) {
	//apaga as variaveis de sessão
	//request.session.loggedin = false;
	//request.session.username = null;
	request.session.destroy();
	console.log("User logged out")
	response.end();
});


//*********************** Ficha Tecnica **************************//


//method: get | action: consultarFT
//metodo que permite consultar uma ficha tecnica
app.get("/objetos/:id/consultarFT", (req, res) => {
	let sql = "Select o.designacao, p.LCRM, p.CEARC, p.dataAberturaLCRM, p.dataAberturaCEARC, p.dataEntradaLCRM, p.dataEntradaCEARC, t.nome, tp.funcao  from processos p, tecnicos t, tecnicoProcesso tp, objetos o where t.idTecnico=tp.tecnico and p.idProcesso=tp.processo and p.objeto=o.idObjeto and p.objeto = ?";

	// req.params.id mapeia o :id que está no URL acima.
	con.query(sql, [req.params.id], (err, results) => {
		if (err) {
			res.status(500).json({ erro: "Erro na query" });
		} else {
			if (results.length ==0) {
				res.status(404).json({ erro: "Ficha Tecnica não encontrada" });
			} else {
				res.status(200).json(results);
			}
		}
	});
});

//method: post | action: inserirFT
//metodo que permite inserir a ficha tecnica
app.post('/inserirFT', function(request, response) {
    //guarda os dados recebidos
    let LCRM = request.body.LCRM;
    let CEARC = request.body.CEARC;
    let dataAberturaLCRM = request.body.dataAberturaLCRM;
    let dataAberturaCEARC = request.body.dataAberturaCEARC;
    let dataEntradaLCRM = request.body.dataEntradaLCRM;
    let dataEntradaCEARC = request.body.dataEntradaCEARC;
    let coordenador = request.body.coordenador;
    let funcao = request.body.funcao;
    let objeto = request.body.objeto;

    //guardar o id do tecnico, id do processo e id do objetos
    let idTecnico;
    let idProcesso;
    let idObjeto;

    //foram recebidos dados
    if (LCRM && CEARC && dataAberturaLCRM && dataAberturaCEARC && dataEntradaLCRM && dataEntradaCEARC && coordenador && funcao && objeto) {
	
        //procura utilizador na db
        con.query('SELECT idTecnico FROM tecnicos WHERE nome = ?', [coordenador],
        function(error, results, fields) {
            //utilizador encontrado
            if (results.length > 0) {
                idTecnico=results[0].idTecnico;
				
				con.query('SELECT * FROM objetos WHERE designacao = ?', [objeto],
				function(error, results, fields) {
					//objeto encontrado
					if (results.length > 0) {
						idObjeto=results[0].idObjeto;
						con.query('SELECT * FROM processos WHERE objeto=?', [idObjeto],
						function(error, results, fields) {
							if (results.length == 0) {
								//insere na tabela processo os dados
								const processo= {LCRM:LCRM, CEARC:CEARC, dataAberturaLCRM:dataAberturaLCRM, dataAberturaCEARC:dataAberturaCEARC, dataEntradaLCRM:dataEntradaLCRM, dataEntradaCEARC:dataEntradaCEARC, objeto:idObjeto};
								con.query('INSERT INTO processos SET ?', [processo],
								function(error, results, fields) {
									if(error){
										response.send("Erro ao inserir na tabela processos");
										response.end();
									}else{
										idProcesso=results.insertId;
										//insere na tabela tecnicoProcesso os dados
										const tecnicoProcesso = {tecnico:idTecnico, processo:idProcesso, funcao:funcao };
										con.query('INSERT INTO tecnicoProcesso SET ?', [tecnicoProcesso],
										function(error, results, fields) {
											if(error){
												con.query('delete from processos where objeto = ?', [idObjeto],
													function(error, results, fields) {
														if(error){
															response.send("Erro inesperado");
															response.end();
														}else{
															response.send("Erro ao inserir na tabela tecnicosProcesso");
															response.end();
														}
												});
											}else{
												response.send("Ficha Tecnica inserida com sucesso")
												response.end();
											}
	
										});
									}
								});
							}
							else{
								response.send('Ficha tecnica já existe.');
								response.end();
							}
						});	
					//objeto não encontrado
					} else {
						//response.send('Objeto inválido.');
						//response.end();
						const obj = {designacao : objeto, superCategoria:"", categoria:"", subCategoria:"", tipologia:"", localizacao:"", dimensoes:"", outrasDimensoes:"", conjunto:false, elementosConjunto:"", elementosAcessorios:"", marcasAutoria:"", marcasMontagem:"",marcasConstrucao:"", classificacaoPatrimonial:"", estilo:"", epoca:"", qualidade:"", estruturaMaterial:"", superficieMaterial:"", tecnicaEstrutura:"", tecnicaSuperficie:"", descricao:"", analogias:"", conclusoes:"", autoria:"", datacao:"", localOrigem:"", condicoesAmbientais:""};
						con.query('INSERT INTO objetos SET ?', [obj],
						function(error, results, fields) {
							if(error){
								console.log(error);
								 response.send("Erro ao inserir novo objeto");
							}else{
								idObjeto=results.insertId;
								con.query('SELECT * FROM processos WHERE objeto=?', [idObjeto],
								function(error, results, fields) {
									if (results.length == 0) {
										//insere na tabela processo os dados
										const processo= {LCRM:LCRM, CEARC:CEARC, dataAberturaLCRM:dataAberturaLCRM, dataAberturaCEARC:dataAberturaCEARC, dataEntradaLCRM:dataEntradaLCRM, dataEntradaCEARC:dataEntradaCEARC, objeto:idObjeto};
										con.query('INSERT INTO processos SET ?', [processo],
										function(error, results, fields) {
											if(error){
												response.send("Erro ao inserir na tabela processos");
												response.end();
											}else{
												idProcesso=results.insertId;
												//insere na tabela tecnicoProcesso os dados
												const tecnicoProcesso = {tecnico:idTecnico, processo:idProcesso, funcao:funcao };
												con.query('INSERT INTO tecnicoProcesso SET ?', [tecnicoProcesso],
												function(error, results, fields) {
													if(error){
														con.query('delete from processos where idProcesso = ?', [idProcesso],
														function(error, results, fields) {
															if(error){
																console.log(error);
																response.send("Erro inesperado");
																response.end();
															}else{
																response.send("Erro ao inserir na tabela tecnicosProcesso");
																response.end();
															}
														});
														
													}else{
														response.send("Ficha Tecnica inserida com sucesso")
														response.end();
													}
			
												});
											}
										});
									}
									else{
										response.send('Ficha tecnica já existe.');
										response.end();
									}
								});	
							}

						});
					}
				});


            //utilizador não encontrado
            } else {
                response.send('Coordenador inválido.');
 		response.end();
            }
        });
    //não foram recebidos dados
    } else {
        response.send('Por favor peencha todos os campos.');
        response.end();
    }
});


//method: post | action: updateFT
//metodo que permite dar update a uma ficha tecnica
app.post('/objetos/:id/updateFT', function(request, response) {
	//guarda os dados recebidos
	var LCRM = request.body.LCRM;
	var CEARC = request.body.CEARC;
	var dataAberturaLCRM = request.body.dataAberturaLCRM;
	var dataAberturaCEARC = request.body.dataAberturaCEARC;
	var dataEntradaLCRM = request.body.dataEntradaLCRM;
	var dataEntradaCEARC = request.body.dataEntradaCEARC;
	var coordenador = request.body.coordenador;
	var funcao = request.body.funcao;
	
	
	//guardar o id do tecnico, id do processo e id do objetos
	var idTecnico;
	var idProcesso;
	
	
	//foram recebidos dados
	if (LCRM && CEARC && dataAberturaLCRM && dataAberturaCEARC && dataEntradaLCRM && dataEntradaCEARC && coordenador && funcao) {
		//procura utilizador na db
		con.query('SELECT idTecnico FROM tecnicos WHERE nome = ?', [coordenador],
		function(error, results, fields) {
			//utilizador encontrado
			if (results.length > 0) {
				idTecnico=results[0].idTecnico;
				//verifica se existe a ficha tecnica
				const tecnicoProcesso = {tecnico:idTecnico, funcao:funcao }
				con.query('select * from processos WHERE objeto = ?', [request.params.id],
				function(error, results, fields) {
					if (error) {
						response.send( "Erro ao procurar o objeto" );
						response.end();
					} else {
						if(results.length>0){
							//update na tabela processo dos dados
							const processo= {LCRM:LCRM, CEARC:CEARC, dataAberturaLCRM:dataAberturaLCRM, dataAberturaCEARC:dataAberturaCEARC, dataEntradaLCRM:dataEntradaLCRM, dataEntradaCEARC:dataEntradaCEARC}
							con.query('UPDATE processos SET  ? WHERE objeto = ?', [processo, request.params.id],
							function(error, results, fields) {
								if (error) {
									response.send( "Erro ao atualizar os dados na tabela processos" );
									response.end();
								} else {
									//update na tabela tecnicoProcesso dos dados
									const tecnicoProcesso = {tecnico:idTecnico, funcao:funcao }
									con.query('update tecnicoProcesso SET ? WHERE processo=(SELECT idProcesso FROM processos WHERE objeto = ?)', [tecnicoProcesso,request.params.id],
									function(error, results, fields) {
										if (error) {
											response.send( "Erro ao atualizar os dados na tabela tecnicoProcesso" );
											response.end();
										} else {
											response.send("Ficha Tecnica alterada com sucesso");
											response.end();
										}	
									});
								}
							});
						}else{
						response.send("Ficha Tecnica não encontrada");
						response.end();
						
						}
					}	
				});

				
			//utilizador não encontrado
			} else {
				response.send('Coordenador inválido.');
				response.end();
			}		
		});
	//não foram recebidos dados
	} else {
		response.send('Por favor peencha todos os campos.');
		response.end();
	}
});

//method: get | action: removeFT
//metodo que permite remover uma ficha tecnica
app.get("/objetos/:id/removeFT", (req, res) => {
    
	con.query('SELECT * FROM processos WHERE objeto = ?', [req.params.id],
        function(error, results, fields) {
			if(results.length>0){
				let sql = "Delete from tecnicoProcesso where processo = (Select idProcesso from processos where objeto = ?); Delete from processos where objeto = ?;";
				// req.params.id mapeia o :id que está no URL acima.
				con.query(sql, [req.params.id, req.params.id], (err, results) => {
					if (err) {
						res.status(500).json({ erro: "Erro ao remover Ficha Tecnica" });
					} else {
						res.status(200).json({message: "Ficha Tecnica removida com sucesso"});
					}
				});
			}else{
				res.status(404).json({ erro: "Ficha Tecnica não encontrada" });
			}
	});
});

//method: get | action: remove
//metodo que permite remover um objeto
app.get("/objetos/:id/remove", (req, res) => {
	let sql = "Delete from objetos where idObjeto = ?";
	// req.params.id mapeia o :id que está no URL acima.
	con.query(sql, [req.params.id], (err, results) => {
		if (err) {
			res.status(500).json({ erro: "Erro ao remover Objeto" });
		} else {
			res.status(200).json({message: "Objeto removido com sucesso"});
		}
	});
});


//*********************** Ficha Tecnica **************************//
//*********************** Register *******************************//

app.post('/register',verificaLoginAdmin,function(request,response){
	  let Nome = request.body.Nome;
    let username = request.body.username;
    let password = request.body.password;
    let email = request.body.email;
    let tipo = request.body.tipo;
    let Habilitacoes = request.body.Habilitacoes;
    let NivProfissional = request.body.NivProfissional;
    if(Nome && username && password && email && tipo && Habilitacoes && NivProfissional){
    const tecnico = {nome:Nome, username:username, password:password, email:email, tipo:tipo, habilitacoes:Habilitacoes, nivelProfissional:NivProfissional}
    con.query('INSERT INTO tecnicos SET ?', [tecnico],
    		function(error, results, fields) {
				if(error){
				response.send("Erro ao inserir na tabela tecnicos");
				response.end();
    			}else{
    			response.send("feito");
				response.end();
    			}
    		}
    	)}
    else {
        response.send('Por favor peencha todos os campos.');
        response.end();
    }
});

//*********************** Register *******************************//

//*********************** API **************************//

//lista de tecnicos
app.get("/tecnicos", verificaLogin, (req,res) =>{
	let sql = "SELECT * FROM tecnicos";

		con.query(sql, (err, results) => {
			if (err) {
				console.error("Erro get tecnicos", err);
				res.status(500).json({ erro: "Erro na query" });
			} else {
				res.status(200).json(results);
			}
		});
});

//tecnico (pelo ID)
app.get("/tecnicos/id/:id", verificaLogin, (req, res) => {
	
		let sql = "SELECT * FROM tecnicos WHERE idTecnico = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				console.error("Erro get tecnico", err);
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Tecnico not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//tecnico (pelo username)
app.get("/tecnicos/username/:username", verificaLogin, (req, res) => {

		if(req.session.username == req.params.username){
			let sql = "SELECT * FROM tecnicos WHERE username = ?";

			// req.params.id mapeia o :username que está no URL acima.
			con.query(sql, [req.params.username], (err, results) => {
				if (err) {
					console.error("Erro get tecnico", err);
					res.status(500).json({ erro: "Erro na query" });
				} else {
					if (results.length ==0) {
						res.status(404).json({ erro: "Tecnico not found" });
					} else {
						res.status(200).json(results);
					}
				}
			});
		}
		else{
			res.status(500).json({ erro: "Permission denied" });
		}
	
});

//lista de materiais
app.get("/materiais", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM materiais";

		con.query(sql, (err, results) => {
			if (err) {
				console.error("Erro get materiais", err);
				res.status(500).json({ erro: "Erro na query" });
			} else {
				res.status(200).json(results);
			}
		});	
});

//material (pelo ID)
app.get("/materiais/id/:id", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM materiais WHERE idMaterial = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Material not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});	
});



//lista de procedimentos
app.get("/procedimentos", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM procedimentos";

		con.query(sql, (err, results) => {
			if (err) {
				console.error("Erro get procedimentos", err);
				res.status(500).json({ erro: "Erro na query" });
			} else {
				res.status(200).json(results);
			}
		});
});

//procedimento (pelo ID)
app.get("/procedimentos/id/:id", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM procedimentos WHERE idProcedimento = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Procedimento not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//lista de processosObra
app.get("/processosObra", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM processosObra";

		con.query(sql, (err, results) => {
			if (err) {
				console.error("Erro get processosObra", err);
				res.status(500).json({ erro: "Erro na query" });
			} else {
				res.status(200).json(results);
			}
		});
});

//processosObra (pelo ID)
app.get("/processosObra/id/:id", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM processosObra WHERE numProcesso = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "ProcessoObra not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//lista de processos
app.get("/processos", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM processos";

		con.query(sql, (err, results) => {
			if (err) {
				console.error("Erro get processos", err);
				res.status(500).json({ erro: "Erro na query" });
			} else {
				res.status(200).json(results);
			}
		});
});

//processo (pelo ID)
app.get("/processos/id/:id", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM processos WHERE idProcesso = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Processo not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//tecnicos de um processo
app.get("/processos/:id/tecnicos", verificaLogin, (req, res) => {

		let sql = "SELECT tec.* FROM tecnicoProcesso, tecnicos tec WHERE tecnico = idTecnico and processo = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				console.error("Erro get tecnicos do processo", err);
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Tecnicos not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//lista de objetos
app.get("/objetos", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM objetos";

		con.query(sql, (err, results) => {
			if (err) {
				console.error("Erro get objetos", err);
				res.status(500).json({ erro: "Erro na query" });
			} else {
				res.status(200).json(results);
			}
		});
});

//objeto (pelo ID)
app.get("/objetos/id/:id", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM objetos WHERE idObjeto = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Objeto not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//Todas as imagens
app.get("/imagens", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM imagens";

		con.query(sql, (err, results) => {
			if (err) {
				console.error("Erro get Imagens", err);
				res.status(500).json({ erro: "Erro na query" });
			} else {
				res.status(200).json(results);
			}
		});
});

//Imagens de um objeto (pelo ID do objeto)
app.get("/objetos/:id/imagens", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM imagens WHERE objeto = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Imagens not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//Interessados de um objeto (pelo ID do objeto)
app.get("/objetos/:id/interessados", verificaLogin, (req, res) => {

		let sql = "Select interessados.* from interessados,interessadosObjeto where interessadosObjeto.objeto = ? and interessados.idInteressado = interessadosObjeto.interessado";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Interessados not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//Ciclos climatéricos de um objeto (pelo ID do objeto)
app.get("/objetos/:id/ciclosclimatericos", verificaLogin, (req, res) => {

		let sql = "Select * from ciclosClimatericos where objeto = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Ciclos climatéricos not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//fontes de um objeto (pelo ID do objeto)
app.get("/objetos/:id/fontes", verificaLogin, (req, res) => {

		let sql = "Select * from fontes where objeto = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Fontes not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//poluição de um objeto (pelo ID do objeto)
app.get("/objetos/:id/poluicao", verificaLogin, (req, res) => {

		let sql = "Select * from poluicao where objeto = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Poluição not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//iluminação de um objeto (pelo ID do objeto)
app.get("/objetos/:id/iluminacao", verificaLogin, (req, res) => {

		let sql = "Select * from iluminacao where objeto = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Iluminação not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//pedidos de intervenção de um objeto (pelo ID do objeto)
app.get("/objetos/:id/pedidosintervencao", verificaLogin, (req, res) => {

		let sql = "Select * from pedidosIntervencao where objeto = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Pedidos de intervenção not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
	
});

//conservações de um objeto (pelo ID do objeto)
app.get("/objetos/:id/conservacoes", verificaLogin, (req, res) => {

		let sql = "Select * from conservacoes where objeto = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Conservacoes not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});


//lista de propostasIntervencao
app.get("/propostasIntervencao", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM propostasIntervencao";

		con.query(sql, (err, results) => {
			if (err) {
				console.error("Erro get PropostasIntervencao", err);
				res.status(500).json({ erro: "Erro na query" });
			} else {
				res.status(200).json(results);
			}
		});
});

//propostasIntervencao (pelo ID do objeto)
app.get("/objetos/:id/propostasIntervencao", verificaLogin, (req, res) => {

		let sql = "Select * from propostasIntervencao where objeto = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "PropostasIntervencao not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//lista de intervencoes
app.get("/intervencoes", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM intervencoes";

		con.query(sql, (err, results) => {
			if (err) {
				console.error("Erro get intervencoes", err);
				res.status(500).json({ erro: "Erro na query" });
			} else {
				res.status(200).json(results);
			}
		});
});

//intervencoes (pelo ID do objeto)
app.get("/objetos/:id/intervencoes", verificaLogin, (req, res) => {

		let sql = "Select intervencoes.* from intervencoes,propostasIntervencao  where propostasIntervencao.objeto = ? and intervencoes.proposta = propostasIntervencao.idProposta" ;

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "intervencoes not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});
//exames de um objeto (pelo ID do objeto)
app.get("/objetos/:id/exames", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM exames WHERE objeto = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Objeto not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//testes feitos num exame (pelo ID do exame)
app.get("/exames/:id/testes", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM testes WHERE exame = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Objeto not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//testes feitos por um tecnico (pelo ID do tecnico)
app.get("/tecnicos/:id/testes", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM testes WHERE tecnico = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Objeto not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//Documentação de um objeto (pelo ID do objeto)
app.get("/objetos/:id/documentacao", verificaLogin, (req, res) => {

		let sql = "Select * from documentacao where objeto = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Documentacao not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//Testes de uma análise (pelo ID da análise)
app.get("/analisesSolventes/:id/testesSolvente", verificaLogin, (req, res) => {

		let sql = "Select * from testesSolvente where analise = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Testes not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//lista de analisesSolventes
app.get("/analisesSolventes", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM analisesSolventes";

		con.query(sql, (err, results) => {
			if (err) {
				console.error("Erro get analisesSolventes", err);
				res.status(500).json({ erro: "Erro na query" });
			} else {
				res.status(200).json(results);
			}
		});
});

//analisesSolventes (pelo ID)
app.get("/analisesSolventes/id/:id", verificaLogin, (req, res) => {

		let sql = "SELECT * FROM analisesSolventes WHERE idObjeto = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "analisesSolventes not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//analisesSolventes de um objeto (pelo ID do objeto)
app.get("/objetos/:id/analisesSolventes", verificaLogin, (req, res) => {

		let sql = "Select * from analisesSolventes where objeto = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "analisesSolventes not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
	
});

//analisesSolventes de um tecnico (pelo ID do tecnico)
app.get("/tecnicos/:id/analisesSolventes", verificaLogin, (req, res) => {

		let sql = "Select * from analisesSolventes where tecnico = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "analisesSolventes not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

//Intervencoes Anteriores de um objeto (pelo ID do objeto)
app.get("/objetos/:id/intervencoesanteriores", verificaLogin, (req, res) => {

		let sql = "Select * from intervencoesAnteriores where objeto = ?";

		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql, [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Testes not found" });
				} else {
					res.status(200).json(results);
				}
			}
		});
});

app.listen(8080);
