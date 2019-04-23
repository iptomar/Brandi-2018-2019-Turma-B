//modules
var session = require('express-session')
const bcrypt = require('bcrypt');
const saltRounds = 10;
//export
module.exports = function(app, con, verificaLogin, verificaLoginAdmin) {

	//method: post | action: auth
	//autentica o utilizador através do username e password
	app.post('/auth', function(request, response) {
		//guarda o username e password recebidos
		var username = request.body.username
		var password = request.body.password
		//foram recebidos dados
		if (username && password) {
			//procura utilizador na db
			con.query('SELECT * FROM tecnicos WHERE username = ? AND password = ?', [username, password],
			function(error, results, fields) {
				//utilizador encontrado
				if (results.length > 0) {
					//guarda a informação do utilizador logged in
					request.session.loggedin = true
					request.session.username = username
					request.session.role = results[0].tipo
					response.send(request.session.role)

				//utilizador não encontrado
				} else {
					response.send('Incorrect Username and/or Password!')
				}			
				response.end()
			})
		//não foram recebidos dados
		} else {
			response.send('Please enter Username and Password!')
			response.end()
		}
	})

	//method: post | action: logout
	//termina a sessão
	app.get('/logout', function(request, response) {
		//apaga as variaveis de sessão
		request.session.destroy()
		response.end()
	})

	app.post('/register',verificaLoginAdmin,function(request,response){
	  	let Nome = request.body.Nome
	    let username = request.body.username
	    let password = request.body.password
	    let email = request.body.email
	    let tipo = request.body.tipo
	    let Habilitacoes = request.body.Habilitacoes
	    let NivProfissional = request.body.NivProfissional
	    let fotografia = request.body.fotografia
	    if(Nome && username && password && email && tipo && Habilitacoes && NivProfissional && fotografia){
	    const tecnico = {nome:Nome, username:username, password:password, email:email, tipo:tipo, habilitacoes:Habilitacoes, nivelProfissional:NivProfissional, fotografia:fotografia}
	    con.query('INSERT INTO tecnicos SET ?', [tecnico],
	    		function(error, results, fields) {
					if(error){
						response.send("Erro ao inserir na tabela tecnicos")
						response.end()
	    			}else{
	    				response.send("Sucesso")
						response.end()
	    			}
	    		}
	    	)}
	    else {
	        response.send('Por favor peencha todos os campos.')
	        response.end()
	    }
	})
}