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
				function(error, results, fields) {;
					//objeto encontrado
					idObjeto=results[0].idObjeto;
					if (results.length > 0) {
						con.query('SELECT * FROM processos WHERE objeto=?', [idObjeto],
						function(error, results, fields) {
							if (results.length == 0) {
								//insere na tabela processo os dados
								const processo= {LCRM:LCRM, CEARC:CEARC, dataAberturaLCRM:dataAberturaLCRM, dataAberturaCEARC:dataAberturaCEARC, dataEntradaLCRM:dataEntradaLCRM, dataEntradaCEARC:dataEntradaCEARC, objeto:idObjeto};
								con.query('INSERT INTO processos SET ?', [processo],
								function(error, results, fields) {
									if(error){
										response.send("erro1");
										response.end();
									}else{
										idProcesso=results.insertId;
										//insere na tabela tecnicoProcesso os dados
										const tecnicoProcesso = {tecnico:idTecnico, processo:idProcesso, funcao:funcao };
										con.query('INSERT INTO tecnicoProcesso SET ?', [tecnicoProcesso],
										function(error, results, fields) {
											if(error){
												 response.send("erro2");
											}else{
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
						response.send('Objeto inválido.');
						 response.end();
					}
				});


            //utilizador não encontrado
            } else {
               response.send('Coordenador inválido.');
 		response.end();
            }
        });
        response.end();
    //não foram recebidos dados
    } else {
	
        response.send('Por favor peencha todos os campos.');
        response.end();
    }
});



//method: post | action: updateFT
//metodo que permite dar update a uma ficha tecnica
app.post('/objeto/:id/updateFT', function(request, response) {
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
			//utilizador não encontrado
			} else {
				response.send('Coordenador inválido.');
			}		
		});
		
		//update na tabela processo dos dados
		const processo= {LCRM:LCRM, CEARC:CEARC, dataAberturaLCRM:dataAberturaLCRM, dataAberturaCEARC:dataAberturaCEARC, dataEntradaLCRM:dataEntradaLCRM, dataEntradaCEARC:dataEntradaCEARC}
		con.query('UPDATE processos SET  ? WHERE objeto = ?', [processo, req.params.id],
		function(error, results, fields) {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Ficha Tecnica not found" });
				}
			}
		});
		
		
		//update na tabela tecnicoProcesso dos dados
		const tecnicoProcesso = {tecnico:idTecnico, funcao:funcao }
		con.query('update tecnicoProcesso SET = ? WHERE processo=(SELECT idProcesso FROM processos WHERE objeto = ?)', [tecnicoProcesso,req.params.id],
		function(error, results, fields) {
			if (err) {
				res.status(500).json({ erro: "Erro na query" });
			} else {
				if (results.length ==0) {
					res.status(404).json({ erro: "Ficha Tecnica not found" });
				} else {
					res.status(200).json(results);
				}
			}	
		});
		response.end();
	//não foram recebidos dados
	} else {
		response.send('Por favor peencha todos os campos.');
		response.end();
	}
});

app.get("/objeto/:id/consultarFT", (req, res) => {
	let sql = "Select o.designacao, p.LCRM, p.CEARC, p.dataAberturaLCRM, p.dataAberturaCEARC, p.dataEntradaLCRM, p.dataEntradaCEARC, t.nome, tp.funcao  from processos p, tecnicos t, tecnicoProcesso tp, objetos o where t.idTecnico=tp.tecnico and p.idProcesso=tp.processo and p.objeto=o.idObjeto and p.objeto = ?";

	// req.params.id mapeia o :id que está no URL acima.
	con.query(sql, [req.params.id], (err, results) => {
		if (err) {
			res.status(500).json({ erro: "Erro na query" });
		} else {
			if (results.length ==0) {
				res.status(404).json({ erro: "Ficha Tecnica not found" });
			} else {
				res.status(200).json(results);
			}
		}
	});
});


//method: get | action: removeFT
//metodo que permite remover uma ficha tecnica
app.get("/objeto/:id/removeFT", (req, res) => {
    let sql = "Delete from tecnicoProcesso where processo = (Select idProcesso from processos where objeto = ?); Delete from processos where objeto = ?;";

    // req.params.id mapeia o :id que está no URL acima.
    con.query(sql, [req.params.id, req.params.id], (err, results) => {
        if (err) {
        console.log(err);
            res.status(500).json({ erro: "Erro na query" });
        } else {
            if (results.length ==0) {
                res.status(404).json({ erro: "Ficha Tecnica not found" });
            } else {
                res.status(200).json(results);
            }
        }
    });

});