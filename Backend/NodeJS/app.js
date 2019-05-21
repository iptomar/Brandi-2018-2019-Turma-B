//modules
var mysql = require('mysql')
var express = require('express')
var session = require('express-session')
var bodyParser = require('body-parser')
//var path = require('path')
var api = require('./modules/api')
var auth = require('./modules/auth')
var ft = require('./modules/ficha_tecnica')
var edit = require('./modules/edit')
var fo = require('./modules/folha_obra')
var analisesSolventes = require('./modules/analisesSolventes')
//coneção com db
var con = mysql.createConnection({
	host     : 'localhost',
	user     : 'adminb',
	password : 'adminB123!',
	database : 'brandiBDB',
    multipleStatements: true
})
//inicia o express
var app = express()
//define sessão
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))
//define o bodyparser para trabalhar com json
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

function verificaLogin(req, res, next) { next()}
function verificaLoginAdmin(req, res, next) { next()}

//verifica se o utilizador esta autenticado
/*function verificaLogin(req, res, next) {
	if (req.session.loggedin) { 
	  next()
	} else {
		res.status(500).json({ erro: "Not Loggedin" })
	}
  }
//verifica se o utilizador esta autenticado e se a sua role é admin
  function verificaLoginAdmin(req, res, next) {
	if (req.session.loggedin && req.session.role === "admin") { 
	  next()
	} else {
		res.status(500).json({ erro: "Permission denied" })
	}
  }*/

api(app, con, verificaLogin, verificaLoginAdmin)
auth(app, con, verificaLogin, verificaLoginAdmin)
ft(app, con, verificaLogin, verificaLoginAdmin)
edit(app, con, verificaLogin, verificaLoginAdmin)
fo(app, con, verificaLogin, verificaLoginAdmin)
analisesSolventes(app, con, verificaLogin, verificaLoginAdmin)

app.listen(8080)
