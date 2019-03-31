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
	//criar tabela objetos
	sql = "create table if not exists objetos(idObjeto int UNIQUE not null AUTO_INCREMENT, designacao varchar(100) not null, superCategoria varchar(100), categoria varchar(100) not null, subCategoria varchar(100), tipologia varchar(100) not null,localizacao varchar(255) not null,dimensoes varchar(120) not null,outrasDimensoes varchar(255),conjunto boolean not null,elementosConjunto text,elementosAcessorios varchar(255),marcasAutoria varchar(255),marcasMontagem varchar(255),marcasConstrucao varchar(255),classificacaoPatrimonial varchar(100),estilo varchar(150),epoca varchar(100),qualidade varchar(100),estruturaMaterial varchar(255),superficieMaterial varchar(255),tecnicaEstrutura varchar(255),tecnicaSuperficie varchar(255),descricao text,analogias text,conclusoes text,autoria varchar(150),datacao varchar(150),localOrigem varchar(150),condicoesAmbientais text,primary key(idObjeto))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table objetos created");
	});
	//inserir registos dos tecnicos
	sql = "INSERT INTO tecnicos (idTecnico, nome, username, password, email, tipo, habilitacoes, nivelProfissional) VALUES (1, 'João Nunes', 'joaon', 'pass123', 'jn@hotmail.com', 'aluno', '', 0),     (2, 'Edgar Oliveira', 'edgaroli', 'pass123', 'eo@hotmail.com', 'aluno', '', 0),     (3, 'Hélder Lopes', 'hellopes', 'pass123', 'hl@hotmail.com', 'aluno', '', 0),     (4, 'Miguel Tomé', 'mtome', 'pass123', 'mt@hotmail.com', 'aluno', '', 0),     (5, 'David Moreno', 'dmoreno', 'pass123', 'dm@hotmail.com', 'aluno', '', 0),     (6, 'Diogo Ribeiro', 'dribeiro', 'pass123', 'dr@hotmail.com', 'aluno', '', 0),     (7, 'André Fronteira', 'afronteira', 'pass123', 'af@hotmail.com', 'aluno', '', 0);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//criar tabela imagens
	sql = "create table if not exists imagens(idImagem int UNIQUE not null AUTO_INCREMENT, imagem varchar(255) not null,tipo set('fotografia','grafico') not null,formato varchar(20),referencia varchar(100),documentacao text,objeto int not null,primary key(idImagem),constraint im1 foreign key (objeto) references objetos(idObjeto))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table imagens created");
	});
	//criar tabela interessados
	sql = "create table if not exists interessados(idInteressado int UNIQUE not null AUTO_INCREMENT, enderecoPostal varchar(255),enderecoEletronico varchar(150),contacto varchar(50),tipo varchar(150),primary key(idInteressado))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table interessados created");
	});
	//criar tabela interessadosObjeto
	sql = "create table if not exists interessadosObjeto(interessado int not null,objeto int not null,primary key(interessado,objeto),constraint iO1 foreign key (interessado) references interessados(idInteressado),constraint iO2 foreign key (objeto) references objetos(idObjeto)    )ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table interessadosObjeto created");
	});
	//criar tabela processos
	sql = "create table if not exists processos(idProcesso int UNIQUE not null AUTO_INCREMENT, LCRM varchar(25) not null,CEARC varchar(25) not null,dataAberturaLCRM date not null,dataAberturaCEARC date not null,dataEntradaLCRM date not null,dataEntradaCEARC date not null,objeto int not null,primary key(idProcesso),constraint pc1 foreign key(objeto) references objetos(idObjeto))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table processos created");
	});
	//criar tabela tecnicos
	sql = "create table if not exists tecnicos(idTecnico int UNIQUE not null AUTO_INCREMENT, nome varchar(255),username varchar(16) not null, password varchar(255) not null, email varchar(100) not null, tipo varchar(50) not null,habilitacoes varchar(150),nivelProfissional int,primary key(idTecnico))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table tecnicos created");
	});
	//criar tabela tecnicoProcesso
	sql = "create table if not exists tecnicoProcesso(tecnico int not null,processo int not null,funcao varchar(255),primary key(tecnico,processo),constraint tP1 foreign key(tecnico) references tecnicos(idTecnico),constraint tP2 foreign key(processo) references processos(idProcesso))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table tecnicoProcesso created");
	});
	//criar tabela analisesSolventes
	sql = "create table if not exists analisesSolventes(idAnalise int UNIQUE not null AUTO_INCREMENT,sujidade varchar(255),data date not null,caracteristicas varchar(255),tecnico int not null,objeto int not null,primary key(idAnalise),constraint an1 foreign key(tecnico) references tecnicos(idTecnico),constraint an2 foreign key(objeto) references objetos(idObjeto))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table analisesSolventes created");
	});
	//criar tabela testesSolvente
	sql = "create table if not exists testesSolvente(idTeste int UNIQUE not null AUTO_INCREMENT,solvente varchar(150)not null,eficacia int not null,observacao TEXT,analise int not null, primary key(idTeste),constraint tS1 foreign key(analise) references analisesSolventes(idAnalise))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table testesSolvente created");
	});
	//criar tabela ciclosClimatericos
	sql = "create table if not exists ciclosClimatericos(idCiclo int UNIQUE not null AUTO_INCREMENT,temperatura varchar(255),humidade varchar(255),periodoAno varchar(50),objeto int,primary key(idCiclo),constraint cC1 foreign key(objeto) references objetos(idObjeto))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table ciclosClimatericos created");
	});
	//criar tabela iluminacao
	sql = "create table if not exists iluminacao(idIlumicao int UNIQUE not null AUTO_INCREMENT,fonte varchar(255),iluminancia varchar(50),UVmedido varchar(50),UVreal varchar(50),tipo set('artificial','natural'),objeto int,primary key(idIlumicao),constraint il1 foreign key(objeto) references objetos(idObjeto))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table iluminacao created");
	});
	//criar tabela poluicao
	sql = "create table if not exists poluicao(idPoluicao int UNIQUE not null AUTO_INCREMENT,agente TEXT,fonte varchar(255),resultados TEXT,observacoes TEXT,objeto int not null,primary key(idPoluicao),constraint pl1 foreign key(objeto) references objetos(idObjeto))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table poluicao created");
	});
	//criar tabela processosObra
	sql = "create table if not exists processosObra(numProcesso int UNIQUE not null AUTO_INCREMENT,designacao varchar(255),objeto int not null,primary key(numProcesso),constraint pO1 foreign key(objeto) references objetos(idObjeto))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table processosObra created");
	});
	//criar tabela procedimentos
	sql = "create table if not exists procedimentos(idProcedimento int UNIQUE not null AUTO_INCREMENT,data date not null,designacao varchar(255),duracao varchar(20),observacoes varchar(255),processoObra int not null,tecnicoObra int not null,primary key(idProcedimento),constraint pr1 foreign key(processoObra) references processosObra(numProcesso))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table procedimentos created");
	});
	//criar tabela materiais
	sql = "create table if not exists materiais(idMaterial int UNIQUE not null AUTO_INCREMENT,material varchar(120),quantidade varchar(20),procedimento int not null,primary key(idMaterial),constraint mt1 foreign key(procedimento) references procedimentos(idProcedimento))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table materiais created");
	});
	//criar tabela conservacoes
	sql = "create table if not exists conservacoes(idConservacao int UNIQUE not null AUTO_INCREMENT,tipo varchar(150),estado varchar(255),estrutura text,superficie text,elementos text,observacoes text,objeto int not null,primary key(idConservacao),constraint cs1 foreign key(objeto) references objetos(idObjeto)  )ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table conservacoes created");
	});
	//criar tabela fontes
	sql = "create table if not exists fontes(idFonte int UNIQUE not null AUTO_INCREMENT,fonte text,tipo varchar(255),localizacao varchar(255),cota varchar(120),dataConsulta date,area varchar(120),objeto int not null,primary key(idFonte),constraint ft1 foreign key(objeto) references objetos(idObjeto)  )ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table fontes created");
	});
	//criar tabela documentacao
	sql = "create table if not exists documentacao(idDocumentacao int UNIQUE not null AUTO_INCREMENT,designacao text,referencias text,autor varchar(255),tipo varchar(50),objeto int not null,primary key(idDocumentacao),constraint dc1 foreign key(objeto) references objetos(idObjeto)  )ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table documentacao created");
	});
	//criar tabela exames
	sql = "create table if not exists exames(idExame int UNIQUE not null AUTO_INCREMENT,objetivos text,interpretacaoResultados text,conclusoes text,objeto int not null,primary key(idExame),constraint ex1 foreign key(objeto) references objetos(idObjeto) )ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table exames created");
	});
	//criar tabela testes
	sql = "create table if not exists testes(idTeste int UNIQUE not null AUTO_INCREMENT,referecia varchar(255),localizacao varchar(255),objetivosEspecificos varchar(255),resultados varchar(255),data date,exame int not null,tecnico int not null,primary key(idTeste), constraint te1 foreign key(exame) references exames(idExame),constraint te2 foreign key(tecnico) references tecnicos(idTecnico))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table testes created");
	});
	//criar tabela pedidosIntervencao
	sql = "create table if not exists pedidosIntervencao(idPedido int UNIQUE not null AUTO_INCREMENT,tipo varchar(150),aspetos text,objeto int not null,primary key(idPedido), constraint pd1 foreign key(objeto) references objetos(idObjeto) )ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table pedidosIntervencao created");
	});
	//criar tabela intervencoesAnteriores
	sql = "create table if not exists intervencoesAnteriores(idIntervencao int UNIQUE not null AUTO_INCREMENT,estrutura text,superficie text,elementos text,observacoes text,objeto int not null,primary key(idIntervencao), constraint iA1 foreign key(objeto) references objetos(idObjeto) )ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table intervencoesAnteriores created");
	});
	//criar tabela propostasIntervencao
	sql = "create table if not exists propostasIntervencao(idProposta int UNIQUE not null AUTO_INCREMENT,tipo varchar(150),dataProposto date,dataAceite date,interlecutoresIPT text,interlecutoresCliente text,objeto int not null,primary key(idProposta), constraint pI1 foreign key(objeto) references objetos(idObjeto) )ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table propostasIntervencao created");
	});
	//criar tabela intervencoes
	sql = "create table if not exists intervencoes(idIntervencao int UNIQUE not null AUTO_INCREMENT,tipo varchar(150),intervencao text,recursos text,estado set('proposto','realizado'),proposta int not null,primary key(idIntervencao), constraint it1 foreign key(proposta) references propostasIntervencao(idProposta) )ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table intervencoes created");
	});

	//inserir registos dos objetos
	sql = "INSERT into objetos(idObjeto, designacao, superCategoria, categoria, subCategoria, tipologia, localizacao, dimensoes, outrasDimensoes, conjunto, elementosConjunto, elementosAcessorios, marcasAutoria, marcasMontagem,marcasConstrucao, classificacaoPatrimonial, estilo, epoca, qualidade, estruturaMaterial, superficieMaterial, tecnicaEstrutura, tecnicaSuperficie, descricao, analogias, conclusoes, autoria, datacao, localOrigem, condicoesAmbientais) values (1, 'Coluna neoclássica com policromia', 'Bens Culturais', 'Móvel Integrado', 'Coluna pertence a um retábulo','Arte Sacra', 'Lisboa', 'Comp x Prof. x Alt. - 131,5 cm | Diâmetro 13 cm','Lado - 19 x 19 cm | Diagonal - 25 cm', true,'Bens do Conjunto - Retábulos e outras alfaias religiosas |Elementos Constituintes do Bem Cultural - Desconhecido','O tronco da coluna é constituído por madeira de nogueira e o capitel será provavelmente de marupa, existindo a hipótese de ser de choupo ou afusélia. Os frisos aparentam ser do mesmo material que o corpo da coluna.','Não foram identificadas quaisquer marcas deste género','Riscador; marcas geométricas quadradas incisas na madeira; marcas de entalhe.','Riscador.', 'Nacional/Regional','Neo-clássico','Coevo','Boa','Suporte: Madeira de nogueira. Intervenções diferenciadas em madeiras de cerejeira.','Preparação branca de cré ou gesso, cola de coelho, bollus (argila da arménia), folha de ouro, policromia, purpurina, elementos metálicos, massa de vidreiro','Suporte: Entalhamento; Ligação entre a coluna e capitel simples (macho-fêmea) colada; frisos pregados com elementos metálicos;','Policromias, repolicromias e repintes. As policromias originais poderiam ser marmoreados/imitação de lápis lazúli.','Coluna neoclássica, com policromia, repolicromias e repintes, tendo sido por isso, alvo de intervenções posteriores. Formada por vários blocos: corpo da coluna, capitel e frisos. Decoração do capitel com volutas; apliques metálicos; bute; perfil decorativo.','Desconhecidas','A coluna pertence a um retábulo que é desconhecido, uma vez que este foi desmantelado e, provavelmente, todas as suas parte constituintes foram vendidas em separado, desconhecendo-se a sua proveniência.','Desconhecida', 'Século XVIII/XIX','Desconhecida','Não é conhecida a sua proveniência, nem o seu percurso até chegar ao proprietário atual, não se conhecendo assim as condições ambientais do local em que esteve preservado. Prevê-se que a possível localização futura será a casa do proprietário, podendo por isso, haver um maior controlo das condições atmosféricas.');";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos imagens
	sql = "INSERT into imagens(idImagem, imagem,tipo,formato,referencia,documentacao,objeto) values (1,'imgColuna1.jpg','Fotografia','JPEG','Nikon 3300','Capitel e pormenores (CD) | Análises estratigráficas (CD)',1),(2,'grafColuna1.jpg','Gráfico','JPEG','Nikon 3300','FTIR',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});	
	//inserir registos dos interessados
	sql = "INSERT INTO interessados(idInteressado, enderecoPostal,enderecoEletronico,contacto,tipo) values (1, 'Coimbra','Sem informação','Sem informação','Proprietário'),(2, 'Lisboa','Sem informação','Sem informação','Salvador Sanchez'),(3, 'Não se aplica','Não se aplica','Não se aplica','Mecenas');";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});	
	//inserir registos dos interessadosObjeto
	sql = "INSERT INTO interessadosObjeto(interessado,objeto) VALUES (1,1),(2,1),(3,1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos processos
	sql = "INSERT INTO processos(idProcesso, LCRM,CEARC,dataAberturaLCRM,dataAberturaCEARC,dataEntradaLCRM,dataEntradaCEARC,objeto) VALUES (1,'0005-04-2006-MOB','1221/21/06','2006-04-28','2006-04-28','2006-04-28','2006-04-28',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos tecnicoProcesso
	sql = "INSERT INTO tecnicoProcesso(tecnico,processo,funcao) VALUES (1,1,'Professor Adjunto / Conservador-Restaurador');";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos analisesSolventes
	sql = "INSERT INTO analisesSolventes(idAnalise,sujidade,data,caracteristicas,tecnico,objeto) VALUES (1,'Repintes','1970-1-1','Devido à dificuldade na remoção de repintes de forma mecânica, foi testado o decapante para facilitar a sua extração',1,1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos testesSolvente
	sql = "testesSolvente(idTeste,solvente,eficacia,observacao,analise) VALUES (1,'Decapante lavável E-013-0070',2,'Marca: Robbialac | Descrição química: Diclorometano Metanol | Optou-se por um decapante em gel para apenas atuar a superfície, não chegando aos substratos inferiores.Deixou-se a atuar durante dez minutos, sendo removido com água/alcool embebidos num cotonete.',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});	
	//inserir registos dos ciclosClimatericos
	sql = "INSERT INTO ciclosClimatericos(idCiclo,temperatura,humidade,periodoAno,objeto) VALUES (1,'Frio / Húmido: Desconhecido | Quente / Seco: Desconhecido','Frio / Húmido: Desconhecido  | Quente / Seco: Desconhecido','NA',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos iluminacao
	sql = "INSERT INTO iluminacao(idIlumicao,fonte,iluminancia,UVmedido,UVreal,tipo,objeto) VALUES (1,'Desconhecido','Desconhecido','Desconhecido','Desconhecido','Natural',1),(2,'Desconhecido','Desconhecido','Desconhecido','Desconhecido','Artificial',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos poluicao
	sql = "INSERT INTO poluicao(idPoluicao,agente,fonte,resultados,observacoes,objeto) VALUES (1,'Sendo uma coluna pertencente a um restauro, é possível que estivesse inserida num espaço litúrgico, estando exposta a poeiras e fumos. Pertence possivelmente a um retábulo desmantelado, tendo percorrido um longo caminho até ao local atual, devendo por isso ter passado por alterações bruscas de temperatura e humidade relativa.','Em relação às poeiras e fumos, provavelmente, teriam origem em velas ou devido ao contacto com pessoas do exterior.','O contacto com estes agentes degradadores, em especial, às alterações de temperatura e humidade, levaram ao aparecimento de lacunas, tanto ao nível da camada policroma como de preparação. Assim como levaram à perda de coesão da camada de preparação, tornando-se pulverulenta.','Deve-se evitar ao máximo coloca-la perto de fontes de calor, como velas, fogueiras ou materiais quentes, assim como evitar transições bruscas de temperatura e humidade, de maneira a que a sua degradação não seja acelerada, levando ao aparecimento de danos e patologias no objeto.',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos processosObra
	sql = "INSERT INTO processosObra(numProcesso,designacao,objeto) VALUES (1,'Coluna neoclássica com policromia',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos procedimentos
	sql = "INSERT INTO procedimentos(idProcedimento,data,designacao,duracao,observacoes,processoObra,tecnicoObra) VALUES (1,'2017-02-21','Escolha e análise do objeto','4h','Coluna neoclássica com policromia',1,1),(2,'2017-02-28','Recolha de fotografias','3h','Geral e de pormenor',1,2),(3,'2017-03-14','Avaliação para a recolha de amostras','2h','',1,3),(4,'2017-03-14','Limpeza superficial','1:30h','',1,4),(5,'2017-03-14','Recolha de fotografias','1:30h','Geral e de pormenor',1,5),(6,'2017-03-21','Avaliação para a recolha de amostras','','',1,6),(7,'2017-03-21','Recolha de amostras','4h','',1,7),(8,'2017-03-21','Recolha de fotografias','4h','À recolha de amostras',1,1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos materiais
	sql = "INSERT INTO  materiais(idMaterial,material,quantidade,procedimento) VALUES (1,'Nikon 3300','',2),(2,'Pano, trincha, água','',4),(3,'Nikon 3300','',5),(4,'Bisturi 11, etiquetas, contentor, zaragatoa','oito',7);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos conservacoes
	sql = "INSERT INTO conservacoes(idConservacao,tipo,estado,estrutura,superficie,elementos,observacoes,objeto) VALUES (1,'Deterioração Física, Química e Mecânica dos Materiais','Alterabilidade: decorrente de envelhecimento natural|Alteração: decorrente de fatores físicos, químicos, biológicos e antrópicos','O suporte da coluna encontra-se em bom estado de conservação. Não revela fragilidade nem falta de coesão. O local onde o seu estado poderá ser classificado como pior é a zona do capitel uma vez que há lacunas de suporte. O suporte do corpo da coluna apenas revela perfurações/cortes que se julgam ser de uma serra elétrica.','A superfície da coluna encontra-se em mau estado de conservação. Esta é constituída por policromia e repolicromia repinte e ambas se encontram em mau estado de conservação, não só por falta de coesão das camadas de preparação como houve degradação das condições químicas e físicas de maior parte da policromia. Para além disso existem lacunas tanto a nível da camada policroma como da camada de preparação.','A coluna tem como acessórios elementos constituídos materialmente por madeira (frisos) e elementos metálicos (pregos e elementos decorativos em bronze)O estado de conservação dos frisos é médio, isto é, encontram-se com várias lacunas de suporte, porém a estrutura que ainda se mantem não revela problemas a nível físico ou químico.Os elementos metálicos encontram-se em mau estado de conservação uma vez que todos eles se encontram oxidados.','O que se pode concluir em relação ao estado de conservação da obra é que este é mau. Apesar do suporte relevar bom estado tudo o resto não se assemelha, o que dificulta a leitura artística da obra, dificultando então a sua intervenção.',1),(2,'Deterioração Biológica dos Materiais','Identificação de Patologias e Agentes de Biodeterioração – Diagnóstico','Não releva qualquer tipo de atividade biologia, ativa ou não ativa (anterior).','Não releva qualquer tipo de atividade biologia, ativa ou não ativa (anterior).','Não releva qualquer tipo de atividade biologia, ativa ou não ativa (anterior).','O que se pode concluir em relação ao estado de conservação da obra é que este é mau. Apesar do suporte relevar bom estado tudo o resto não se assemelha, o que dificulta a leitura artística da obra, dificultando então a sua intervenção.',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos fontes
	sql = "INSERT INTO fontes(idFonte,fonte,tipo,localizacao,cota,dataConsulta,area,objeto) VALUES (1,'Não se aplica','NA','NA','NA','1997-1-1','Arquivísticas | Documentais',1),(2,'Não se aplica','NA','NA','NA','1997-1-1','Iconográficas',1),(3,'CRUZ, João – “Métodos de Exame e Análise – Espectroscopia de infravermelho”, Tomar (2015/2016); pp 4-8','NA','NA','NA','1997-1-1','Bibliográficas',1),(4,'Não se aplica','NA','NA','NA','1997-1-1','Eletrónicas',1),(5,'Não se aplica','NA','NA','NA','1997-1-1','Outras Fontes',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos documentação
	sql = "INSERT INTO documentacao(idDocumentacao,designacao,referencias,autor,tipo,objeto) VALUES (1,'Não identificados. Não se sabe nada sobre a história do objeto, como proveniência e local de origem.','NA','NA','Originais Fotográficos',1),(2,'Exame de FTIR','Ver anexo digital em CD.','Dr. Vitor Gaspar; Beatriz Penas; Leonor Miranda','Documentação Gráfica',1),(3,'Foi feita a análise estratigráfica. A análise estratigráfica consiste na observação microscópica, de amostras, que revelam os diferentes estratos, resultantes da aplicação de novas camadas de preparação e consequentemente, de camadas policromas (repolicromias ou repintes) e ainda, dos seus materiais.Exame de espectroscopia de absorção de infravermelho com transformada de Fourier (FTIR). É feito através de diferentes conjuntos de átomos que vibram de forma diferente. Aos diferentes conjuntos de átomos correspondem transições vibracionais com diferentes energias. Quando as moléculas são expostas a uma fonte de radiação infravermelha, estas absorvem a energia que corresponde à transições vibracionais apresentadas pelos seus grupos constituintes. O conjunto de absorções apresentadas pelas moléculas permite a identificação dos grupos constituinte das mesmas.','Ver anexo digital em CD.','Dr. Victor Gaspar;Beatriz penas;Leonor Miranda.','Exames e Análises',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos exames
	sql = "INSERT INTO exames(idExame,objetivos,interpretacaoResultados,conclusoes,objeto) VALUES (1,'Identificação de materiais, técnicas e tecnologias de produção. Identificação de intervenções efectuadas no objecto. Caracterização do estado de conservação. Identificação de patologias e agentes de biodeterioração. Datação do objecto e das eventuais intervenções que tenha sido alvo. Ensaio de produtos e materiais a empregar na intervenção','Em relação aos materiais, apenas se sabe com certeza a do tronco da madeira, de nogueira, e dos restauros antigos nos capitéis, de cerejeira. Em relação ao capitel, pensasse ser de choupo, afusélia ou marupa, havendo maior probabilidade de ser a ultima.As análises realizadas levaram a várias conclusões. O FTIR revelou que a camada de preparação é constituída por gesso, podendo ser por isso que se encontra pouco coesa e pulverulenta.Com as análises estratigráficas, pretendeu-se distinguir policromias originais, de repolicromias e repintes. A amostra 1 representa uma repolicromia, estando um azul escuro sobre um azul, original, de cor mais clara. Com a amostra 2, havia uma espectativa de estar presente preparação, bollus, ouro e purpurina, assim como vários azuis, o que se comprovou pela análise estratigráfica, sendo que o azul mais escuro aparenta estar sobre o azul mais claro, sendo por isso um repinte. Em relação à amostra 3, pensava-se ser o branco original, não só por estar mais amarelecido que os restantes brancos, mas porque era naquela localização que se encontravam os apliques metálicos, não havendo preocupação numa situação de repolicromia ou repinte, em retira-los. Sobre a superfície são visíveis várias cores, podendo estas ser sujidades ou pigmentos. A amostra 4 pode trazer alguma confusão, pois sobre a camada de preparação, bollus e ouro, é visível pigmento brancos. Este aparece apenas em algumas zonas, pois a amostra foi retirada de uma zona próxima aos frisos, que eram dourados. Aquando do douramento, a zona que levaria a policromia ficou com bollus e ouro por baixo, que foi depois pintada com branco. Na amostra 5 é visível a camada de preparação, branco e vários azuis na superfície. Isto comprova a teoria inicial, de que a superfície seria a imitar lápis lazúli. O branco sujo, na mesma zona, seria um repinte. A amostra 6, será a de um azul original, já muito desvanecido, pois sendo que aparece na parte de trás da coluna, não havia preocupação em fazer uma repolicromia ou um repinte. A recolha da amostras 7, assim como da amostras 7A seria de modo a comparar as massas de vidreiro presentes nos dois locais, mas apresentaram-se completamente diferentes. Na amostras 7, são visíveis 5 estratos: preparação branca, bollus, ouro, outro branco (possivelmente preparação) e purpurina. Observam-se também tons esverdeados, que segundo o Doutor Vítor Gaspar, se trata da oxidação da purpurina. A amostra 7A relevou-se completamente diferente, aparentando apenas a massa de vidreiro ser mais grossa, mas revelando-se um material completamente diferente à 7. É visível uma preparação branca, uma camada grossa de massa de vidreiro e purpurina, estando esta também esverdeada devido à oxidação da mesma.','Devido à análise das estratigrafias, chegou-se à conclusão que a policromia original, seria azul e branca, de modo a imitar lápis lazúli, excluindo-se a hipótese de marmoreado.De acordo com as análises estratigráficas, foi decidida a maneira com se iria intervir na coluna neoclássica. Ficou decidido que as repolicromias seriam mantidas, sendo que geralmente, e no próprio caso, como é o da amostra 1, têm um maior valor artístico assim como são de uma maior qualidade técnica, pois seguem os mesmo procedimentos que o original. Em relação aos repintes, foi decidido o contrário, apresentando-se os mesmos, especialmente os brancos, com fraca qualidade, assim já com grandes problemas, estando bastante envelhecidos. A massa oleica será também retirada, não tendo nenhuma ligação com o resto da coluna, em termos estéticos, nem tem nenhuma função especifica.Em relação ao original, claro está, que se decidiu manter, podendo proceder-se apenas a uma consolidação de maneira a que a sua degradação não fosse acelerada, em grande parte devido à pulverulência da camada de preparação.',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos testes
	sql = "INSERT INTO testes(idTeste,referecia,localizacao,objetivosEspecificos,resultados,data,exame,tecnico) VALUES (1,'Observação á vista desarmada','Corpo da coluna e capitel','Identificação dos materiais','Confirmação do uso de folha de ouro, purpurina, massa oleica, camada de preparação de gesso ou cré, policromia.','2017-02-21',1,1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos pedidosIntervencao
	sql = "INSERT INTO pedidosIntervencao(idPedido,tipo,aspetos,objeto) VALUES (1,'O proprietário deixou este campo sob a responsabilidade de quem fosse realizar a intervenção.','Não se aplica',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});	
	//inserir registos dos intervencoesAnteriores
	sql = "INSERT INTO intervencoesAnteriores(idIntervencao,estrutura,superficie,elementos,observacoes,objeto) VALUES (1,'Desmontagem do capitel. O capitel foi entalhado num bloco separado, que se une à coluna através de uma ligação simples (macho-fêmea), essa fixação é reforçada com adesivo.Foram colocados blocos de madeira nos locais de lacuna de suporte do capitel. O seu entalhe foi iniciado, porém não foi finalizado.','Foram realizadas repolicromia e repintes anteriormente. Também foi colocada massa oleica numa das faces na zona inferior o motivo é desconhecido. Em alguns dos casos foram usadas purpurinas para substituir a falta de folha de ouro, de uma forma mais económica.','Os frisos de madeira foram retirados do corpo da escultura e os elementos metálicos também.','Os restauros anteriores observam-se sobretudo a nível da superfície. Maior parte dos restauros anteriores, ao nível de policromia, verificaram-se incoerentes, uma vez que não respeitam de qualquer modo a policromia original. Tudo isto muda a sua leitura a nível artístico.',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos propostasIntervencao
	sql = "INSERT INTO propostasIntervencao(idProposta,tipo,dataProposto,dataAceite,interlecutoresIPT,interlecutoresCliente,objeto) VALUES (1,'Conservação | Restauro',null,null,'Fernando Antunes (IPT) LCRM CEARC | Beatriz Penas, Leonor Miranda','',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	//inserir registos dos intervencoes
	sql = "INSERT INTO intervencoes(idIntervencao,tipo,intervencao,recursos,estado,proposta) VALUES (1,'Conservação | Restauro','Estrutura | Suporte:No suporte propõe-se apenas a limpeza superficial, com água, e remoção de adesivos antigos.Remoção da massa oleica que se encontra na zona inferior da coluna.Preenchimentos das lacunas devido à serra elétrica, através do entalhamento da madeira de cerejeira.','Para a limpeza prevê-se o uso de um pano humedecido em água.Na remoção do adesivo usar-se-á água para o seu amolecimento e o bisturi para a sua remoção.O bisturi será também usado para remover a massa oleica.','proposto',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});	

//termina coneção
con.end();

});