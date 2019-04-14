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
	
	//inserir registos dos tecnicos
	sql = "INSERT INTO tecnicos (idTecnico, nome, username, password, email, tipo, habilitacoes, nivelProfissional,fotografia) VALUES (8, 'Fernando dos Santos Antunes,', 'admin', 'admin', 'fsa@hotmail.com', 'admin', 'Mestrado', 7,'');";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	
	//inserir registos dos objetos
	sql = "INSERT into objetos(idObjeto, designacao, superCategoria, categoria, subCategoria, tipologia, localizacao, dimensoes, outrasDimensoes, conjunto, elementosConjunto, elementosAcessorios, marcasAutoria, marcasMontagem,marcasConstrucao, classificacaoPatrimonial, estilo, epoca, qualidade, estruturaMaterial, superficieMaterial, tecnicaEstrutura, tecnicaSuperficie, descricao, analogias, conclusoes, autoria, datacao, localOrigem, condicoesAmbientais, conclusoesAmbientais, objetivosExames, resultadosExames, conclusoesExames) values (2, 'Piano de Brincar em Madeira', '', '', '','', '', '','', false,'','','','','', '','','','','','','','','','','','', '','','','', '', '',''),(3, 'Estante de missal', '', '', '','', '', '','', false,'','','','','', '','','','','','','','','','','','', '','','','', '', '',''),	(4, 'Gaiola', '', '', '','', '', '','', false,'','','','','', '','','','','','','','','','','','', '','','','', '', '',''),(5, 'Guarda Joias Império', '', '', '','', '', '','', false,'','','','','', '','','','','','','','','','','','', '','','','', '', '',''),(6, 'Oratório Policromado', '', '', '','', '', '','', false,'','','','','', '','','','','','','','','','','','', '','','','', '', '',''),(7, 'Sacrário de madeira policromada com resplendor entalhado na porta', '', '', '','', '', '','', false,'','','','','', '','','','','','','','','','','','', '','','','', '', '',''),	(8, 'Urna Santissimo', '', '', '','', '', '','', false,'','','','','', '','','','','','','','','','','','', '','','','', '', '','');";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	
	//inserir registos dos imagens
	sql = "INSERT into imagens(idImagem, imagem,tipo,formato,referencia,documentacao,objeto) values (3,'PianoBrincar.png','Fotografia','PNG','','',2),(4,'EstanteMissal.png','Fotografia','PNG','','',3),(5,'Gaiola.png','Fotografia','PNG','','',4),(6,'GuardaJoias.png','Fotografia','PNG','','',5),(7,'OratorioPolicromado.png','Fotografia','PNG','','',6),(8,'SacrarioDouradoPolicromado.png','Fotografia','PNG','','',7),(9,'UrnaSantissimo.png','Fotografia','PNG','','',8);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});	
		
	//inserir registos dos processos
	sql = "INSERT INTO processos(idProcesso, LCRM,CEARC,dataAberturaLCRM,dataAberturaCEARC,dataEntradaLCRM,dataEntradaCEARC,objeto) VALUES (2,'001/01/07/2016/MOB','2016-12-12','2016-07-02','2016-07-04','2016-07-02','2016-09-04',2),(3,'06-006-011-2013-40B','2013-01-04','2013-11-28','2013-02-21','2013-11-28','2013-02-21',3),(4,'001-01-05-2015-MOB','16-10-2015-2','2015-05-02','2015-05-27','2015-02-02','2015-05-20',4),(5,'0004-04-2006-MOB','1119/19/06','2006-04-18','2006-04-18','2006-04-18','2006-04-18',5),(6,'','861/03/02','2002-03-05','2002-03-05','2002-03-05','2002-03-05',6),(7,'0009-01-2005-TAL','1032/59/04','2005-01-17','2004-11-17','2004-11-17','2004-11-17',7),(8,'080-08-11-2013-mob','1266/02/2013','2013-11-28','2012-02-02','2012-02-02','2012-02-02',8);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	
	//inserir registos dos tecnicoProcesso
	sql = "INSERT INTO tecnicoProcesso(tecnico,processo,funcao) VALUES (1,2,'Professor Adjunto / Conservador-Restaurador'),(1,3,'Professor Adjunto / Conservador-Restaurador'),(1,4,'Professor Adjunto / Conservador-Restaurador'),(1,5,'Professor Adjunto / Conservador-Restaurador'),(1,6,'Professor Adjunto / Conservador-Restaurador'),(1,7,'Professor Adjunto / Conservador-Restaurador'),(1,8,'Professor Adjunto / Conservador-Restaurador');";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	
//termina coneção
con.end();

});