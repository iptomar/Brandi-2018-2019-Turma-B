//modules
var mysql = require('mysql')
//coneção com db
var con = mysql.createConnection({
	host: "localhost",
	user: "adminb",
	password: "adminB123!",
	database: "brandiBDB"
})
//inicia coneção com db
con.connect(function(err) {
	if (err) throw err
	console.log("Connected!")	
	//criar tabela obras
	sql = "create table if not exists obras(idObra int UNIQUE not null AUTO_INCREMENT, designacao varchar(255) not null, LCRM varchar(25) not null,CEARC varchar(25) not null,dataAberturaLCRM date not null,dataAberturaCEARC date not null,dataEntradaLCRM date not null,dataEntradaCEARC date not null,primary key(idObra))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table obras created")
	})
	//criar tabela interessados
	sql = "create table if not exists interessados(idInteressado int UNIQUE not null AUTO_INCREMENT, nome varchar(255), NIF varchar(9), enderecoPostal varchar(255),enderecoEletronico varchar(150),contacto varchar(50),primary key(idInteressado))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table interessados created")
	})
	//criar tabela interessadosObra
	sql = "create table if not exists interessadosObra(interessado int not null,obra int not null, tipo varchar(150) ,primary key(interessado,obra),constraint iO1 foreign key (interessado) references interessados(idInteressado),constraint iO2 foreign key (obra) references obras(idObra))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table interessadosObra created")
	})
	//criar tabela pecas
	sql = "create table if not exists pecas(idPeca int UNIQUE not null AUTO_INCREMENT, designacao varchar(100) not null, superCategoria varchar(100), categoria varchar(100) not null, subCategoria varchar(100), tipologia varchar(100) not null,localizacao varchar(255) not null,dimensoes varchar(120) not null,outrasDimensoes varchar(255),elementosConjunto text,elementosAcessorios varchar(255),marcasAutoria varchar(255),marcasMontagem varchar(255),marcasConstrucao varchar(255),classificacaoPatrimonial varchar(100),estilo varchar(150),epoca varchar(100),qualidade varchar(100),estruturaMaterial varchar(255),superficieMaterial varchar(255),tecnicaEstrutura varchar(255),tecnicaSuperficie varchar(255),descricao text,analogias text,conclusoes text,autoria varchar(150),datacao varchar(150),localOrigem varchar(150),condicoesAmbientais text,conclusoesAmbientais text,objetivosExames text,resultadosExames text,conclusoesExames text,obra int not null,primary key(idPeca),constraint pe1 foreign key (obra) references obras(idObra))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table pecas created")
	})
	//criar tabela imagens
	sql = "create table if not exists imagens(idImagem int UNIQUE not null AUTO_INCREMENT, imagem varchar(255) not null,tipo set('fotografia','grafico') not null,formato varchar(20),referencia varchar(100),documentacao text,peca int not null,primary key(idImagem),constraint im1 foreign key (peca) references pecas(idPeca))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table imagens created")
	})
	//criar tabela tecnicos
	sql = "create table if not exists tecnicos(idTecnico int UNIQUE not null AUTO_INCREMENT, nome varchar(255),username varchar(16) UNIQUE not null, password varchar(255) not null, email varchar(100) not null, tipo varchar(50) not null,habilitacoes varchar(150),nivelProfissional int,fotografia varchar(255),primary key(idTecnico))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table tecnicos created")
	})
	//criar tabela tecnicoPeca
	sql = "create table if not exists tecnicoPeca(tecnico int not null,peca int not null,funcao varchar(255),primary key(tecnico,peca),constraint tP1 foreign key(tecnico) references tecnicos(idTecnico),constraint tP2 foreign key(peca) references pecas(idPeca))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table tecnicoPeca created")
	})
	//criar tabela procedimentos
	sql = "create table if not exists procedimentos(idProcedimento int UNIQUE not null AUTO_INCREMENT,data date not null,designacao varchar(255),duracao varchar(20),observacoes varchar(255),peca int not null,tecnico int not null,primary key(idProcedimento),constraint pc1 foreign key(peca) references pecas(idPeca),constraint pc2 foreign key(tecnico) references tecnicos(idTecnico))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table procedimentos created")
	})
	//criar tabela materiais
	sql = "create table if not exists materiais(idMaterial int UNIQUE not null AUTO_INCREMENT,material varchar(120),quantidade varchar(20),procedimento int not null,primary key(idMaterial),constraint mt1 foreign key(procedimento) references procedimentos(idProcedimento))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table materiais created")
	})
	//criar tabela analisesSolventes
	sql = "create table if not exists analisesSolventes(idAnalise int UNIQUE not null AUTO_INCREMENT,sujidade varchar(255),data date not null,caracteristicas varchar(255),tecnico int not null,peca int not null,primary key(idAnalise),constraint an1 foreign key(tecnico) references tecnicos(idTecnico),constraint an2 foreign key(peca) references pecas(idPeca))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table analisesSolventes created")
	})
	//criar tabela testesSolvente
	sql = "create table if not exists testesSolvente(idTeste int UNIQUE not null AUTO_INCREMENT,solvente varchar(150)not null,eficacia int not null,observacao TEXT,analise int not null, primary key(idTeste),constraint tS1 foreign key(analise) references analisesSolventes(idAnalise))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table testesSolvente created")
	})
	//criar tabela ciclosClimatericos
	sql = "create table if not exists ciclosClimatericos(idCiclo int UNIQUE not null AUTO_INCREMENT,temperatura varchar(255),humidade varchar(255),periodoAno varchar(50),peca int not null,primary key(idCiclo),constraint cC1 foreign key(peca) references pecas(idPeca))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table ciclosClimatericos created")
	})
	//criar tabela iluminacao
	sql = "create table if not exists iluminacao(idIluminacao int UNIQUE not null AUTO_INCREMENT,fonte varchar(255),iluminancia varchar(50),UVmedido varchar(50),UVreal varchar(50),tipo set('artificial','natural'),peca int not null,primary key(idIluminacao),constraint il1 foreign key(peca) references pecas(idPeca))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table iluminacao created")
	})
	//criar tabela poluicao
	sql = "create table if not exists poluicao(idPoluicao int UNIQUE not null AUTO_INCREMENT,agente TEXT,fonte varchar(255),resultados TEXT,peca int not null,primary key(idPoluicao),constraint pl1 foreign key(peca) references pecas(idPeca))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table poluicao created")
	})
	//criar tabela conservacoes
	sql = "create table if not exists conservacoes(idConservacao int UNIQUE not null AUTO_INCREMENT,tipo varchar(150),estado varchar(255),estrutura text,superficie text,elementos text,observacoes text,peca int not null,primary key(idConservacao),constraint cs1 foreign key(peca) references pecas(idPeca))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table conservacoes created")
	})
	//criar tabela fontes
	sql = "create table if not exists fontes(idFonte int UNIQUE not null AUTO_INCREMENT,fonte text,tipo varchar(255),localizacao varchar(255),cota varchar(120),dataConsulta date,area varchar(120),peca int not null,primary key(idFonte),constraint ft1 foreign key(peca) references pecas(idPeca))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table fontes created")
	})
	//criar tabela documentacao
	sql = "create table if not exists documentacao(idDocumentacao int UNIQUE not null AUTO_INCREMENT,designacao text,referencias text,autor varchar(255),tipo varchar(50),peca int not null,primary key(idDocumentacao),constraint dc1 foreign key(peca) references pecas(idPeca))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table documentacao created")
	})
	//criar tabela testes
	sql = "create table if not exists testes(idTeste int UNIQUE not null AUTO_INCREMENT,referencia varchar(255),localizacao varchar(255),objetivos varchar(255),resultados varchar(255),data date,peca int not null,tecnico int not null,primary key(idTeste), constraint te1 foreign key(peca) references pecas(idPeca),constraint te2 foreign key(tecnico) references tecnicos(idTecnico))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table testes created")
	})
	//criar tabela pedidosIntervencao
	sql = "create table if not exists pedidosIntervencao(idPedido int UNIQUE not null AUTO_INCREMENT,tipo varchar(150),aspetos text,peca int not null,primary key(idPedido), constraint pd1 foreign key(peca) references pecas(idPeca))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table pedidosIntervencao created")
	})
	//criar tabela intervencoesAnteriores
	sql = "create table if not exists intervencoesAnteriores(idIntervencao int UNIQUE not null AUTO_INCREMENT,estrutura text,superficie text,elementos text,observacoes text,peca int not null,primary key(idIntervencao), constraint iA1 foreign key(peca) references pecas(idPeca))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table intervencoesAnteriores created")
	})
	//criar tabela propostasIntervencao
	sql = "create table if not exists propostasIntervencao(idProposta int UNIQUE not null AUTO_INCREMENT,tipo varchar(150),dataProposto date,dataAceite date,interlecutoresIPT text,interlecutoresCliente text,peca int not null,primary key(idProposta), constraint pI1 foreign key(peca) references pecas(idPeca))ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table propostasIntervencao created")
	})
	//criar tabela intervencoes
	sql = "create table if not exists intervencoes(idIntervencao int UNIQUE not null AUTO_INCREMENT,tipo varchar(150),intervencao text,recursos text,estado set('proposto','realizado'),proposta int not null,primary key(idIntervencao), constraint it1 foreign key(proposta) references propostasIntervencao(idProposta) )ENGINE = InnoDB;"
	con.query(sql, function (err, result) {
		if (err) throw err
		console.log("Table intervencoes created")
	})
//termina coneção
con.end();
});