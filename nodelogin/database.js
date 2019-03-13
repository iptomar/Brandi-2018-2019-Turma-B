//modules
var mysql = require('mysql');
//coneção com db
var con = mysql.createConnection({
  host: "localhost",
  user: "adminb",
  password: "adminB123!",
  database: "brandiBDB"
});
//inicia coneção com db
con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	//eliminar tabela
	var sql = "drop table if exists tblUsers;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table dropped");
	});
	//criar tabela
	sql = "create table if not exists tblUsers(id int UNIQUE not null AUTO_INCREMENT, nome varchar(50) not null, username varchar(16) not null, password varchar(50) not null, email varchar(50) not null, tipo varchar(50) not null, primary key(id))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table created");
	});
	//inserir registos
	sql = "INSERT INTO tblUsers (id, nome, username, password, email, tipo) VALUES (1, 'João Nunes', 'joaon', 'pass123', 'jn@hotmail.com', 'aluno'),(2, 'Edgar Oliveira', 'edgaroli', 'pass123', 'eo@hotmail.com', 'aluno'),(3, 'Hélder Lopes', 'hellopes', 'pass123', 'hl@hotmail.com', 'aluno'),(4, 'Miguel Tomé', 'mtome', 'pass123', 'mt@hotmail.com', 'aluno'),(5, 'David Moreno', 'dmoreno', 'pass123', 'dm@hotmail.com', 'aluno'),(6, 'Diogo Ribeiro', 'dribeiro', 'pass123', 'dr@hotmail.com', 'aluno'),(7, 'André Fronteira', 'afronteira', 'pass123', 'af@hotmail.com', 'aluno')";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
//termina coneção
con.end();

});
