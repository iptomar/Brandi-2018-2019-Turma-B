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
	database : 'brandiBDB'
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
				//redireciona para a página home
				//response.redirect('/home');
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
app.post('/logout', function(request, response) {
	//apaga as variaveis de sessão
	request.session.loggedin = false;
	request.session.username = null;
	console.log("User logged out")
	//redireciona para a página de login
	//response.redirect('/');
	response.end();
});

//method: get | action: consultarFT
//metodo que permite consultar uma ficha tecnica
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

//*********************** API **************************//

//lista de tecnicos
app.get("/tecnicos", (req, res) => {
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
app.get("/tecnicos/id/:id", (req, res) => {
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
app.get("/tecnicos/username/:username", (req, res) => {
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
});

//lista de materiais
app.get("/materiais", (req, res) => {
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
app.get("/materiais/id/:id", (req, res) => {
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
app.get("/procedimentos", (req, res) => {
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
app.get("/procedimento/id/:id", (req, res) => {
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
app.get("/processosObra", (req, res) => {
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
app.get("/processosObra/id/:id", (req, res) => {
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
app.get("/processos", (req, res) => {
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
app.get("/processos/id/:id", (req, res) => {
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
app.get("/processos/:id/tecnicos", (req, res) => {
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
app.get("/objetos", (req, res) => {
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
app.get("/objetos/id/:id", (req, res) => {
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
app.get("/imagens", (req, res) => {
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
app.get("/objetos/:id/imagens", (req, res) => {
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
app.get("/objetos/:id/interessados", (req, res) => {
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
app.get("/objetos/:id/ciclosclimatericos", (req, res) => {
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
app.get("/objetos/:id/fontes", (req, res) => {
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
app.get("/objetos/:id/poluicao", (req, res) => {
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
app.get("/objetos/:id/iluminacao", (req, res) => {
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
app.get("/objetos/:id/pedidosintervencao", (req, res) => {
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
app.get("/objetos/:id/conservacoes", (req, res) => {
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
app.get("/propostasIntervencao", (req, res) => {
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
app.get("/objetos/:id/propostasIntervencao", (req, res) => {
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
app.get("/intervencoes", (req, res) => {
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
app.get("/objetos/:id/intervencoes", (req, res) => {
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
app.get("/objetos/:id/exames", (req, res) => {
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
app.get("/exames/:id/testes", (req, res) => {
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
app.get("/tecnicos/:id/testes", (req, res) => {
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
app.get("/objetos/:id/documentacao", (req, res) => {
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
app.get("/analise/:id/testesSolvente", (req, res) => {
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
app.get("/analisesSolventes", (req, res) => {
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
app.get("/analisesSolventes/id/:id", (req, res) => {
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
app.get("/objetos/:id/analisesSolventes", (req, res) => {
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
app.get("/tecnicos/:id/analisesSolventes", (req, res) => {
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
app.get("/objetos/:id/intervencoesanteriores", (req, res) => {
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
