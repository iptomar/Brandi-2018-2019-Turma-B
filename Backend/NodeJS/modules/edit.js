var session = require('express-session')
var bcrypt = require('bcryptjs');
//export
module.exports = function(app, con, verificaLogin, verificaLoginAdmin) {


//Update Nome
app.post('/tecnicos/username/:username/updateNome', function (request, response) {
	let Nome = request.body.Nome;

	if (Nome) {
		con.query('UPDATE tecnicos SET nome = ? WHERE username = ? ', [Nome, request.params.username],
			function (error, results, fields) {
				if (error) {
					response.send("Erro ao inserir na tabela tecnicos");
					response.end();
				} else {
					response.send("feito");
					response.end();
				}
			}
		)
	}
	else {
		response.send('Por favor peencha o campo.');
		response.end();
	}

});
//username
app.post('/tecnicos/username/:username/updateUsername', function (request, response) {
	let username = request.body.username;

	if (username) {
		con.query('UPDATE tecnicos SET username = ? WHERE username = ? ', [username, request.params.username],
			function (error, results, fields) {
				if (error) {
					response.send("Erro ao inserir na tabela tecnicos");
					response.end();
				} else {
					response.send("feito");
					response.end();
				}
			}
		)
	}
	else {
		response.send('Por favor peencha o campo.');
		response.end();
	}

});

//email

app.post('/tecnicos/username/:username/updateEmail', function (request, response) {
	let email = request.body.email;

	if (email) {
		con.query('UPDATE tecnicos SET email =  ? WHERE username = ? ', [email, request.params.username],
			function (error, results, fields) {
				if (error) {
					response.send("Erro ao inserir na tabela tecnicos");
					response.end();
				} else {
					response.send("feito");
					response.end();
				}
			}
		)
	}
	else {
		response.send('Por favor peencha o campo.');
		response.end();
	}

});

//password

app.post('/tecnicos/username/:username/updatePassword', function (request, response) {
	let password = request.body.password;

	if (password) {
		bcrypt.genSalt(10, function (err, salt) {
			bcrypt.hash(password, salt, function (err, hash) {
				con.query('UPDATE tecnicos SET password = WHERE username = ? ', [hash, request.params.username],
					function (error, results, fields) {
						if (error) {
							response.send("Erro ao inserir na tabela tecnicos");
							response.end();
						} else {
							response.send("feito");
							response.end();
						}
					}
				)
			}
			)
		}
		)
	}
	else {
		response.send('Por favor peencha o campo.');
		response.end();
	}

});

//tipo

app.post('/tecnicos/username/:username/updateTipo', function (request, response) {
	let tipo = request.body.tipo;

	if (tipo) {
		con.query('UPDATE tecnicos SET tipo = WHERE username = ? ', [tipo, request.params.username],
			function (error, results, fields) {
				if (error) {
					response.send("Erro ao inserir na tabela tecnicos");
					response.end();
				} else {
					response.send("feito");
					response.end();
				}
			}
		)
	}
	else {
		response.send('Por favor peencha o campo.');
		response.end();
	}

});

//habilitacoes

app.post('/tecnicos/username/:username/updateHabilitacoes', function (request, response) {
	let habilitacoes = request.body.habilitacoes;

	if (habilitacoes) {
		const tecnico = { habilitacoes: habilitacoes };
		con.query('UPDATE tecnicos SET habilitacoes = ? WHERE username = ? ', [habilitacoes, request.params.username],
			function (error, results, fields) {
				if (error) {
					response.send("Erro ao inserir na tabela tecnicos");
					response.end();
				} else {
					response.send("feito");
					response.end();
				}
			}
		)
	}
	else {
		response.send('Por favor peencha o campo.');
		response.end();
	}

});

//nivelProfissional

app.post('/tecnicos/username/:username/updatenivelProfissional', function (request, response) {
	let nivelProfissional = request.body.nivelProfissional;

	if (nivelProfissional) {
		const tecnico = { nivelProfissional: nivelProfissional };
		con.query('UPDATE tecnicos SET nivelProfissional = ? WHERE username = ? ', [nivelProfissional, request.params.username],
			function (error, results, fields) {
				if (error) {
					response.send("Erro ao inserir na tabela tecnicos");
					response.end();
				} else {
					response.send("feito");
					response.end();
				}
			}
		)
	}
	else {
		response.send('Por favor peencha o campo.');
		response.end();
	}

});
}
