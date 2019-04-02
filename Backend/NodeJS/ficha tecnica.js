
//method: post | action: inserirFT
//metodo que permite inserir a ficha tecnica
app.post('/inserirFT', function(request, response) {
	//guarda os dados recebidos
	var LCRM = request.body.LCRM;
	var CEARC = request.body.CEARC;
	var dataAberturaLCRM = request.body.dataAberturaLCRM;
	var dataAberturaCEARC = request.body.dataAberturaCEARC;
	var dataEntregaLCRM = request.body.dataEntregaLCRM;
	var dataEntregaCEARC = request.body.dataEntregaCEARC;
	var coordenador = request.body.coordenador;
	var funcao = request.body.funcao;
	var objeto = request.body.objeto;
	
	//guardar o id do tecnico, id do processo e id do objetos
	var idTecnico;
	var idProcesso;
	var idObjeto;
	
	//foram recebidos dados
	if (LCRM && CEARC && dataAberturaLCRM && dataAberturaCEARC && dataEntregaLCRM && dataEntregaCEARC && coordenador && funcao && objeto) {
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
		
		con.query('SELECT * FROM objetos WHERE designacao = ?', [objeto],
		function(error, results, fields) {
			//objeto encontrado
			if (results.length > 0) {
				idObjeto=results[0].idObjeto;
			//objeto não encontrado
			} else {
				response.send('Coordenador inválido.');
			}		
		});
		
		//insere na tabela processo os dados
		const processo= {LCRM:LCRM, CEARC:CEARC, dataAberturaLCRM:dataAberturaLCRM, dataAberturaCEARC:dataAberturaCEARC, dataEntregaLCRM:dataEntregaLCRM, dataEntregaCEARC:dataEntregaCEARC, objeto:idObjeto}
		con.query('INSERT INTO processos SET = ?', [processo],
		function(error, results, fields) {
			if(error) throw error;
			idProcesso=results.insertId;
		});
		
		//insere na tabela tecnicoProcesso os dados
		const tecnicoProcesso = {tecnico:idTecnico, processo:idProcesso, funcao:funcao }
		con.query('INSERT INTO tecnicoProcesso SET = ?', [tecnicoProcesso],
		function(error, results, fields) {
			if(error) throw error;	
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
	var dataEntregaLCRM = request.body.dataEntregaLCRM;
	var dataEntregaCEARC = request.body.dataEntregaCEARC;
	var coordenador = request.body.coordenador;
	var funcao = request.body.funcao;
	
	
	//guardar o id do tecnico, id do processo e id do objetos
	var idTecnico;
	var idProcesso;
	
	
	//foram recebidos dados
	if (LCRM && CEARC && dataAberturaLCRM && dataAberturaCEARC && dataEntregaLCRM && dataEntregaCEARC && coordenador && funcao) {
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
		const processo= {LCRM:LCRM, CEARC:CEARC, dataAberturaLCRM:dataAberturaLCRM, dataAberturaCEARC:dataAberturaCEARC, dataEntregaLCRM:dataEntregaLCRM, dataEntregaCEARC:dataEntregaCEARC}
		con.query('UPDATE processos SET  ? WHERE objeto = ?', [processo, req.params.id],
		function(error, results, fields) {
			if(error) throw error;
		});
		
		//procura o id do processo na db 
		con.query('SELECT idProcesso FROM processos WHERE objeto = ?', [req.params.id],
		function(error, results, fields) {
			//processo encontrado
			if (results.length > 0) {
				idProcesso=results[0].idProcesso;
			//processo não encontrado
			} else {
				response.send('erro');
			}		
		});
		
		//insere na tabela tecnicoProcesso os dados
		const tecnicoProcesso = {tecnico:idTecnico, funcao:funcao }
		con.query('update tecnicoProcesso SET = ? WHERE processo', [idProcesso],
		function(error, results, fields) {
			if(error) throw error;	
		});
		response.end();
	//não foram recebidos dados
	} else {
		response.send('Por favor peencha todos os campos.');
		response.end();
	}
});

app.get("/objeto/:id/consultarFT", (req, res) => {
	let sql = "Select o.designacao, p.LCRM, p.CEARC, p.dataAberturaLCRM, p.dataAberturaCEARC, p.dataEntregaLCRM, p.dataEntregaCEARC, t.nome, tp.funcao,  from processos p, tecnicos t, tecnicoProcesso tp, objetos o where t.idTecnico=tp.tecnico and p.idProcesso=tp.processo and p.objeto=o.idObjeto and processos.objeto = ?";

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
	let sql = "Delelte from processos, tecnicoProcesso tp where processos.idProcesso=tecnicoProcesso.processo and processos.objeto = ?";

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