var bcrypt = require('bcryptjs');
var path = require('path')

//export
module.exports = function(app, con, verificaLogin, verificaLoginAdmin) {


//Update Nome
app.post('/tecnicos/username/:username/updateNome', function (request, response) {
	let Nome = request.body.Nome;

	if (Nome) {
		const tecnico = { nome: Nome };
		con.query('UPDATE tecnicos SET ? WHERE username = ? ', [tecnico, request.params.username],
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
		const tecnico = { username: username };
		con.query('UPDATE tecnicos SET  ? WHERE username = ? ', [tecnico, request.params.username],
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
		const tecnico = { email: email };
		con.query('UPDATE tecnicos SET  ? WHERE username = ? ', [tecnico, request.params.username],
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
				const tecnico = { password: hash };
				con.query('UPDATE tecnicos SET  ? WHERE username = ? ', [tecnico, request.params.username],
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

		const tecnico = { tipo: tipo };
		con.query('UPDATE tecnicos SET  ? WHERE username = ? ', [tecnico, request.params.username],
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
		con.query('UPDATE tecnicos SET  ? WHERE username = ? ', [tecnico, request.params.username],
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
		con.query('UPDATE tecnicos SET  ? WHERE username = ? ', [tecnico, request.params.username],
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

app.post('/tecnicos/username/:username/updateimage',verificaLogin, function (request, response) {
	if(request.session.username == request.params.username || request.session.role === "admin"){
		if(!request.files){
			response.send("Não foram enviadas imagens.")
		}else{
			let file=request.files.Img
			let extension = path.extname(file.name)
			if(extension!=".png" && extension != ".jpg"){
				response.send("Só são permitidas imagens")
			}else{
				file.name=request.params.username+".png"
				let caminho=__dirname+"/../imagens/"+file.name
				file.mv(caminho, function(err){
					if(err){
						console.log(err)
						response.status(500).send("Ocorreu um erro inesperado.")
					}else{
						con.query('UPDATE tecnicos SET  fotografia=? WHERE username = ? ', [caminho, request.params.username],
							function (error, results, fields) {
								if (error) {
									response.send("Erro ao guardar imagem");
									response.end();
								} else {
									response.send("Imagem guardada com sucesso")
									response.end();
								}
							}
						)
					}
				})
			}
		}
	}else{
		response.status(500).json({ erro: "Permission denied" })
	}
})


}




