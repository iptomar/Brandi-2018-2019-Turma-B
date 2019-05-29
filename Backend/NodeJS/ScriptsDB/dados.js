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
	
	//inserir registos dos interessados
	sql = "Insert Into interessados(idInteressado,nome,NIF,enderecoPostal,enderecoEletronico,contacto)values(1,'José Alves','265887539','RuaTomar','jalves@email.com','234596954'),(2,'Fábio Jean','858399522','RuaCoimbra','FaJen@email.com','928753211'),(3,'António Guerra','123453321','RuaPorto','Aguerra@email.com','219554354');";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});
	
		//inserir registos dos obras
	sql = "Insert into obras(idObra,designacao,LCRM,CEARC,dataAberturaLCRM,dataAberturaCEARC,dataEntradaLCRM,dataEntradaCEARC)values(1,'Conjunto: Mesa e Cadeiras','0005-04-2006-MOB','1221/21/06','2006-04-28','2006-04-28','2006-04-28','2006-04-28'),(2,'Coluna neoclássica com policromia','0015-05-2007-MOB','1222/22/07','2006-04-29','2006-04-29','2006-04-29','2006-04-29'),(3,'Piano de brincar em madeira','0025-05-2007-MOB','1223/23/08','2006-04-30','2006-04-30','2006-04-30','2006-04-30');";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});

		//inserir registos dos interessadosObra
	sql = "Insert into interessadosObra(interessado,obra,tipo)values(1,1,'mecenas'),(2,1,'Dono da obra'),(3,1,'Proprietário'),(1,2,'Proprietário'),(2,2,'mecenas'),(3,2,'Dono da obra'),(1,3,'Dono da obra'),(2,3,'Proprietário'),(3,3,'mecenas');";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});

		//inserir registos dos pecas
	sql = "Insert into pecas(idPeca,designacao,superCategoria,categoria,subCategoria,tipologia,localizacao,dimensoes,outrasDimensoes,elementosConjunto,elementosAcessorios,marcasAutoria,marcasMontagem,marcasConstrucao,classificacaoPatrimonial,estilo,epoca,qualidade,estruturaMaterial,superficieMaterial,tecnicaEstrutura,tecnicaSuperficie,descricao,analogias,conclusoes,autoria,datacao,localOrigem,condicoesAmbientais,conclusoesAmbientais,objetivosExames,resultadosExames,conclusoesExames,obra)values(1,'Base da Coluna','Bens Culturais','Móvel Integrado','Coluna pertence a um retábulo','Arte Sacra', 'Lisboa', 'Comp x Prof. x Alt. - 131,5 cm | Diâmetro 13 cm','Lado - 19 x 19 cm | Diagonal - 25 cm','Bens do Conjunto - Retábulos e outras alfaias religiosas |Elementos Constituintes do Bem Cultural - Desconhecido','O tronco da coluna é constituído por madeira de nogueira e o capitel será provavelmente de marupa, existindo a hipótese de ser de choupo ou afusélia. Os frisos aparentam ser do mesmo material que o corpo da coluna.','Não foram identificadas quaisquer marcas deste género','Riscador; marcas geométricas quadradas incisas na madeira; marcas de entalhe.','Riscador.', 'Nacional/Regional','Neo-clássico','Coevo','Boa','Suporte: Madeira de nogueira. Intervenções diferenciadas em madeiras de cerejeira.','Preparação branca de cré ou gesso, cola de coelho, bollus (argila da arménia), folha de ouro, policromia, purpurina, elementos metálicos, massa de vidreiro','Suporte: Entalhamento; Ligação entre a coluna e capitel simples (macho-fêmea) colada; frisos pregados com elementos metálicos;','Policromias, repolicromias e repintes. As policromias originais poderiam ser marmoreados/imitação de lápis lazúli.','Coluna neoclássica, com policromia, repolicromias e repintes, tendo sido por isso, alvo de intervenções posteriores. Formada por vários blocos: corpo da coluna, capitel e frisos. Decoração do capitel com volutas; apliques metálicos; bute; perfil decorativo.','Desconhecidas','A coluna pertence a um retábulo que é desconhecido, uma vez que este foi desmantelado e, provavelmente, todas as suas parte constituintes foram vendidas em separado, desconhecendo-se a sua proveniência.','Desconhecida', 'Século XVIII/XIX','Desconhecida','Não é conhecida a sua proveniência, nem o seu percurso até chegar ao proprietário atual, não se conhecendo assim as condições ambientais do local em que esteve preservado. Prevê-se que a possível localização futura será a casa do proprietário, podendo por isso, haver um maior controlo das condições atmosféricas.','','','','',2),(2,'Corpo da Coluna','Bens Culturais','Móvel Integrado','Coluna pertence a um retábulo','Arte Sacra', 'Lisboa', 'Comp x Prof. x Alt. - 131,5 cm | Diâmetro 13 cm','Lado - 19 x 19 cm | Diagonal - 25 cm','Bens do Conjunto - Retábulos e outras alfaias religiosas |Elementos Constituintes do Bem Cultural - Desconhecido','O tronco da coluna é constituído por madeira de nogueira e o capitel será provavelmente de marupa, existindo a hipótese de ser de choupo ou afusélia. Os frisos aparentam ser do mesmo material que o corpo da coluna.','Não foram identificadas quaisquer marcas deste género','Riscador; marcas geométricas quadradas incisas na madeira; marcas de entalhe.','Riscador.', 'Nacional/Regional','Neo-clássico','Coevo','Boa','Suporte: Madeira de nogueira. Intervenções diferenciadas em madeiras de cerejeira.','Preparação branca de cré ou gesso, cola de coelho, bollus (argila da arménia), folha de ouro, policromia, purpurina, elementos metálicos, massa de vidreiro','Suporte: Entalhamento; Ligação entre a coluna e capitel simples (macho-fêmea) colada; frisos pregados com elementos metálicos;','Policromias, repolicromias e repintes. As policromias originais poderiam ser marmoreados/imitação de lápis lazúli.','Coluna neoclássica, com policromia, repolicromias e repintes, tendo sido por isso, alvo de intervenções posteriores. Formada por vários blocos: corpo da coluna, capitel e frisos. Decoração do capitel com volutas; apliques metálicos; bute; perfil decorativo.','Desconhecidas','A coluna pertence a um retábulo que é desconhecido, uma vez que este foi desmantelado e, provavelmente, todas as suas parte constituintes foram vendidas em separado, desconhecendo-se a sua proveniência.','Desconhecida', 'Século XVIII/XIX','Desconhecida','Não é conhecida a sua proveniência, nem o seu percurso até chegar ao proprietário atual, não se conhecendo assim as condições ambientais do local em que esteve preservado. Prevê-se que a possível localização futura será a casa do proprietário, podendo por isso, haver um maior controlo das condições atmosféricas.','','','','',2),(3,'Topo da Coluna','Bens Culturais','Móvel Integrado','Coluna pertence a um retábulo','Arte Sacra', 'Lisboa', 'Comp x Prof. x Alt. - 131,5 cm | Diâmetro 13 cm','Lado - 19 x 19 cm | Diagonal - 25 cm','Bens do Conjunto - Retábulos e outras alfaias religiosas |Elementos Constituintes do Bem Cultural - Desconhecido','O tronco da coluna é constituído por madeira de nogueira e o capitel será provavelmente de marupa, existindo a hipótese de ser de choupo ou afusélia. Os frisos aparentam ser do mesmo material que o corpo da coluna.','Não foram identificadas quaisquer marcas deste género','Riscador; marcas geométricas quadradas incisas na madeira; marcas de entalhe.','Riscador.', 'Nacional/Regional','Neo-clássico','Coevo','Boa','Suporte: Madeira de nogueira. Intervenções diferenciadas em madeiras de cerejeira.','Preparação branca de cré ou gesso, cola de coelho, bollus (argila da arménia), folha de ouro, policromia, purpurina, elementos metálicos, massa de vidreiro','Suporte: Entalhamento; Ligação entre a coluna e capitel simples (macho-fêmea) colada; frisos pregados com elementos metálicos;','Policromias, repolicromias e repintes. As policromias originais poderiam ser marmoreados/imitação de lápis lazúli.','Coluna neoclássica, com policromia, repolicromias e repintes, tendo sido por isso, alvo de intervenções posteriores. Formada por vários blocos: corpo da coluna, capitel e frisos. Decoração do capitel com volutas; apliques metálicos; bute; perfil decorativo.','Desconhecidas','A coluna pertence a um retábulo que é desconhecido, uma vez que este foi desmantelado e, provavelmente, todas as suas parte constituintes foram vendidas em separado, desconhecendo-se a sua proveniência.','Desconhecida', 'Século XVIII/XIX','Desconhecida','Não é conhecida a sua proveniência, nem o seu percurso até chegar ao proprietário atual, não se conhecendo assim as condições ambientais do local em que esteve preservado. Prevê-se que a possível localização futura será a casa do proprietário, podendo por isso, haver um maior controlo das condições atmosféricas.','','','','',2),(4,'Piano de Brincar','Bens Lúdicos','Brinquedo','Piano de Madeira','', 'Porto', 'Comp x Prof. x Alt. - 30 cm | Diâmetro 5 cm','Lado - 19 x 19 cm | Diagonal - 15 cm','Desconhecido','Piano é constituído por madeira de Sabugueiro','Não foram identificadas quaisquer marcas deste género','Riscador; marcas geométricas quadradas incisas na madeira; marcas de entalhe.','Riscador.', 'Nacional/Regional','','Coevo','Boa','Suporte: Madeira de sabugueiro. Intervenções diferenciadas em madeiras de cerejeira.','Preparação branca de cré ou gesso, cola de coelho, bollus (argila da arménia), folha de ouro, policromia, purpurina, elementos metálicos, massa de vidreiro','Suporte: Entalhamento; Ligação entre a coluna e capitel simples (macho-fêmea) colada; frisos pregados com elementos metálicos;','Policromias, repolicromias e repintes. As policromias originais poderiam ser marmoreados/imitação de lápis lazúli.','','Desconhecidas','','Desconhecida', 'Século XVIII/XIX','Desconhecida','Não é conhecida a sua proveniência, nem o seu percurso até chegar ao proprietário atual, não se conhecendo assim as condições ambientais do local em que esteve preservado. Prevê-se que a possível localização futura será a casa do proprietário, podendo por isso, haver um maior controlo das condições atmosféricas.','','','','',3),(5,'Mesa de Mármore','Bens Pessoais','Móvel Integrado','Mesa pertence a conjunto com cadeiras','', 'Tomar', 'Comp x Prof. x Alt. - 175,5 cm | Diâmetro 35 cm','Lado - 29 x 49 cm | Diagonal - 35 cm','Bens do Conjunto - Mesa e Cadeiras','Mesa de mármore polido','Não foram identificadas quaisquer marcas deste género','Riscador; marcas geométricas quadradas incisas no mármore; marcas de entalhe.','Riscador.', 'Nacional/Regional','','Coevo','Boa','Suporte: Madeira de pinheiro. Intervenções diferenciadas em madeiras de cerejeira.','Preparação branca de cré ou gesso, cola de coelho, bollus (argila da arménia)','','','','Desconhecidas','','Desconhecida', 'Século XX','Desconhecida','Não é conhecida a sua proveniência, nem o seu percurso até chegar ao proprietário atual, não se conhecendo assim as condições ambientais do local em que esteve preservado. Prevê-se que a possível localização futura será a casa do proprietário, podendo por isso, haver um maior controlo das condições atmosféricas.','','','','',1),(6,'Cadeira de Madeira trabalhada','Bens Pessoais','Móvel Integrado','Cadeira pertence a conjunto com mesas','', 'Tomar', 'Comp x Prof. x Alt. - 60 cm | Diâmetro 20 cm','Lado - 19 x 29 cm | Diagonal - 20 cm','Bens do Conjunto - Mesa e Cadeiras','Cadeira de madeira trabalhada','Não foram identificadas quaisquer marcas deste género','Riscador; marcas geométricas quadradas incisas na madeira; marcas de entalhe.','Riscador.', 'Nacional/Regional','','Coevo','Boa','Suporte: Madeira de pinheiro. Intervenções diferenciadas em madeiras de cerejeira.','Preparação branca de cré ou gesso, cola de coelho, bollus (argila da arménia)','','','','Desconhecidas','','Desconhecida', 'Século XX','Desconhecida','Não é conhecida a sua proveniência, nem o seu percurso até chegar ao proprietário atual, não se conhecendo assim as condições ambientais do local em que esteve preservado. Prevê-se que a possível localização futura será a casa do proprietário, podendo por isso, haver um maior controlo das condições atmosféricas.','','','','',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});

		//inserir registos dos imagens
	sql = "Insert into imagens(idImagem,imagem,tipo,formato,referencia,documentacao,peca)values(1,'imgColuna1.png','Fotografia','PNG','Nikon 3300','Capitel e pormenores (CD) | Análises estratigráficas (CD)',1),(2,'imgColuna1.jpg','Fotografia','PNG','Nikon 3300','Capitel e pormenores (CD) | Análises estratigráficas (CD)',2),(3,'imgColuna1.jpg','Fotografia','PNG','Nikon 3300','Capitel e pormenores (CD) | Análises estratigráficas (CD)',3),(4,'PianoBrincar.png','Fotografia','PNG','Nikon 3300','',4),(5,'UrnaSantissimo.png','Fotografia','PNG','Nikon 3300','',5),(6,'Gaiola.png','Fotografia','PNG','Nikon 3300','',6);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});


		//inserir registos dos tecnicos
	sql = "INSERT INTO tecnicos (idTecnico, nome, username, password, email, tipo, habilitacoes, nivelProfissional,fotografia) VALUES (1,'Fernando dos Santos Antunes','admin','$2a$10$sTpSjmj0tS7L0l0uNycmKOLsFlikfg0MtfnntEa51UsFvQVduc5YS','fsa@hotmail.com','admin','Mestrado',7,''),(2, 'Elmo Pires', 'epires', '$2a$10$5BnQA8GeB3zgX3e.4pQ5COTJDdORrSD7rzZdXj9nlOqLwDeMjrbM2', 'elmo@email.com', 'aluno', 'Licenciatura', 5,''),(3,'Edgar Oliveira','edgaroli','$2a$10$HO/sryQQ3D7.fflnSMEDHOWsrIndVjVCBHhhpiMXygnGua6cfAIae','eo@hotmail.com','aluno','TESTES',0,''),(4,'Helder Lopes','hellopes','$2a$10$dO8REZLxo4IVdyv8aq.m1OC/b/V.SYJsTZ.VcLeIbRVgwfM5yr8qq','hl@hotmail.com','aluno','',0,''),(5,'Miguel Tomé','mtome','$2a$10$Qz5ef/AV9jpphGXiZt3xO.iB88tkZySuBEMD4P3Os6JcBHb6HPQBG','mt@hotmail.com','aluno','',0,''),(6,'David Moreno','dmoreno','$2a$10$pP2Vr.WF4d9R0sagUWCnUOuZNFTJu3Un3UtDTIUXgSzaxTtqn94/C','dm@hotmail.com','aluno','',0,''),(7,'Diogo Ribeiro','dribeiro','$2a$10$hCWNMKKIFvrwqdMqR7d4geK9klt.UhaNunTOOF7c69t2MSLcKc3Hy','dr@hotmail.com','aluno','',0,''),(8,'Router','afronteira','$2a$10$e.dC.bmx1D9rKlRH9zZIt.w6ctR1reJ0tJ6jy5Wpb6O7zhhg44xAC','af@hotmail.com','aluno','',0,'');";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});

		//inserir registos dos tecnicoPeca
	sql = "insert into tecnicoPeca(tecnico,peca,funcao)values(1,1,'admin'),(2,2,'aluno'),(3,3,'aluno'),(4,4,'aluno'),(5,5,'aluno'),(6,6,'aluno');";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});

		//inserir registos dos procedimentos
	sql = "insert into procedimentos(idProcedimento,data,designacao,duracao,observacoes,peca,tecnico)VALUES (1,'2017-02-21','Escolha e análise do objeto','4h','Coluna neoclássica com policromia',1,1),(2,'2017-02-28','Recolha de fotografias','3h','Geral e de pormenor',2,2),(3,'2017-03-14','Avaliação para a recolha de amostras','2h','',3,3),(4,'2017-03-14','Limpeza superficial','1:30h','',4,4),(5,'2017-03-14','Recolha de fotografias','1:30h','Geral e de pormenor',5,5),(6,'2017-03-21','Avaliação para a recolha de amostras','','',6,6),(7,'2017-03-21','Recolha de amostras','4h','',1,7),(8,'2017-03-21','Recolha de fotografias','4h','À recolha de amostras',2,8);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});

		//inserir registos dos materiais
	sql = "insert into materiais(idMaterial,material,quantidade,procedimento)values(1,'Nikon 3300','',2),(2,'Pano,','',4),(3,'trincha,','',4),(4,'água','',4),(5,'Nikon 3300','',5),(6,'Bisturi 11','oito',7),(7,'etiquetas','oito',7),(8,'contentor','oito',7),(9,'zaragatoa','oito',7);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});

		//inserir registos dos analisesSolventes
	sql = "insert into analisesSolventes(idAnalise,sujidade,data,caracteristicas,tecnico,peca)values(1,'Repintes','2006-04-28','Devido à dificuldade na remoção de repintes de forma mecânica, foi testado o decapante para facilitar a sua extração',1,1),(2,'Manchas','2006-04-29','Presença de manchas na superficie',2,1),(3,'Manchas','2006-05-20','Presença de manchas na superficie',3,1),(4,'Manchas','2006-05-21','Presença de manchas na superficie',4,1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});

		//inserir registos dos testesSolvente
	sql = "insert into testesSolvente(idTeste,solvente,eficacia,observacao,analise)values (1,'Decapante lavável E-013-0070',2,'Marca: Robbialac | Descrição química: Diclorometano Metanol | Optou-se por um decapante em gel para apenas atuar a superfície, não chegando aos substratos inferiores.Deixou-se a atuar durante dez minutos, sendo removido com água/alcool embebidos num cotonete.',1),(2,'Decapante lavável E-013-2334',3,'Marca: Robbialac | Descrição química: Diclorometano Metanol | Optou-se por um decapante em gel para apenas atuar a superfície, não chegando aos substratos inferiores.Deixou-se a atuar durante dez minutos, sendo removido com água/alcool embebidos num cotonete.',2),(3,'Decapante lavável E-014-1231',4,'Marca: Robbialac | Descrição química: Diclorometano Metanol | Optou-se por um decapante em gel para apenas atuar a superfície, não chegando aos substratos inferiores.Deixou-se a atuar durante dez minutos, sendo removido com água/alcool embebidos num cotonete.',3);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});

		//inserir registos dos ciclosClimatericos
	sql = "insert into ciclosClimatericos(idCiclo,temperatura,humidade,periodoAno,peca)values (1,'Frio / Húmido: Desconhecido','Frio / Húmido: Desconhecido','NA',1),(2,'Quente / Seco: Desconhecido','Quente / Seco: Desconhecido','NA',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});


		//inserir registos dos iluminacao
	sql = "insert into iluminacao(idIluminacao,fonte,iluminancia,UVmedido,UVreal,tipo,peca)values(1,'Desconhecido','Desconhecido','Desconhecido','Desconhecido','natural',1),(2,'Desconhecido','Desconhecido','Desconhecido','Desconhecido','artificial',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});


		//inserir registos dos poluicao
	sql = "insert into poluicao(idPoluicao,agente,fonte,resultados,peca)values(1,'Sendo uma coluna pertencente a um restauro, é possível que estivesse inserida num espaço litúrgico, estando exposta a poeiras e fumos. Pertence possivelmente a um retábulo desmantelado, tendo percorrido um longo caminho até ao local atual, devendo por isso ter passado por alterações bruscas de temperatura e humidade relativa.','Em relação às poeiras e fumos, provavelmente, teriam origem em velas ou devido ao contacto com pessoas do exterior.','O contacto com estes agentes degradadores, em especial, às alterações de temperatura e humidade, levaram ao aparecimento de lacunas, tanto ao nível da camada policroma como de preparação. Assim como levaram à perda de coesão da camada de preparação, tornando-se pulverulenta.Deve-se evitar ao máximo coloca-la perto de fontes de calor, como velas, fogueiras ou materiais quentes, assim como evitar transições bruscas de temperatura e humidade, de maneira a que a sua degradação não seja acelerada, levando ao aparecimento de danos e patologias no objeto.',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});


		//inserir registos dos conservacoes
	sql = "insert into conservacoes(idConservacao,tipo,estado,estrutura,superficie,elementos,observacoes,peca)values(1,'Deterioração Biológica dos Materiais','Identificação de Patologias e Agentes de Biodeterioração – Diagnóstico','Não releva qualquer tipo de atividade biologia, ativa ou não ativa (anterior).','Não releva qualquer tipo de atividade biologia, ativa ou não ativa (anterior).','Não releva qualquer tipo de atividade biologia, ativa ou não ativa (anterior).','O que se pode concluir em relação ao estado de conservação da obra é que este é mau. Apesar do suporte relevar bom estado tudo o resto não se assemelha, o que dificulta a leitura artística da obra, dificultando então a sua intervenção',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});


		//inserir registos dos fontes
	sql = "insert into fontes(idFonte,fonte,tipo,localizacao,cota,dataConsulta,area,peca)values(1,'Não se aplica','NA','NA','NA','1997-01-01','Arquivísticas',1),(2,'Não se aplica','NA','NA','NA','1997-01-01','Documentais',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});


		//inserir registos dos documentacao
	sql = "insert into documentacao(idDocumentacao,designacao,referencias,autor,tipo,peca)values(1,'Não identificados. Não se sabe nada sobre a história do objeto, como proveniência e local de origem.','NA','NA','Originais Fotográficos',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});


		//inserir registos dos testes
	sql = "insert into testes(idTeste,referencia,localizacao,objetivos,resultados,data,peca,tecnico)values(1,'Observação á vista desarmada','Corpo da coluna e capitel','Identificação dos materiais','Confirmação do uso de folha de ouro, purpurina, massa oleica, camada de preparação de gesso ou cré, policromia.','2017-02-21',1,1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});

		//inserir registos dos pedidosIntervencao
	sql = "insert into pedidosIntervencao(idPedido,tipo,aspetos,peca)values(1,'O proprietário deixou este campo sob a responsabilidade de quem fosse realizar a intervenção.','Não se aplica',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});

		//inserir registos dos intervencoesAnteriores
	sql = "insert into intervencoesAnteriores(idIntervencao,estrutura,superficie,elementos,observacoes,peca)values(1,'Desmontagem do capitel. O capitel foi entalhado num bloco separado, que se une à coluna através de uma ligação simples (macho-fêmea), essa fixação é reforçada com adesivo.Foram colocados blocos de madeira nos locais de lacuna de suporte do capitel. O seu entalhe foi iniciado, porém não foi finalizado.','Foram realizadas repolicromia e repintes anteriormente. Também foi colocada massa oleica numa das faces na zona inferior o motivo é desconhecido. Em alguns dos casos foram usadas purpurinas para substituir a falta de folha de ouro, de uma forma mais económica.','Os frisos de madeira foram retirados do corpo da escultura e os elementos metálicos também.','Os restauros anteriores observam-se sobretudo a nível da superfície. Maior parte dos restauros anteriores, ao nível de policromia, verificaram-se incoerentes, uma vez que não respeitam de qualquer modo a policromia original. Tudo isto muda a sua leitura a nível artístico.',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});

		//inserir registos dos propostasIntervencao
	sql = "insert into propostasIntervencao(idProposta,tipo,dataProposto,dataAceite,interlocutoresIPT,interlocutoresCliente,peca)values(1,'Conservação',null,null,'Fernando Antunes (IPT) LCRM CEARC | Beatriz Penas, Leonor Miranda','',1),(2,'Restauro',null,null,'Fernando Antunes (IPT) LCRM CEARC | Beatriz Penas, Leonor Miranda','',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});

		//inserir registos dos intervencoes
	sql = "insert into intervencoes(idIntervencao,tipo,intervencao,recursos,estado,proposta)values(1,'Conservação','Estrutura | Suporte:No suporte propõe-se apenas a limpeza superficial, com água, e remoção de adesivos antigos.Remoção da massa oleica que se encontra na zona inferior da coluna.Preenchimentos das lacunas devido à serra elétrica, através do entalhamento da madeira de cerejeira.','Para a limpeza prevê-se o uso de um pano humedecido em água.Na remoção do adesivo usar-se-á água para o seu amolecimento e o bisturi para a sua remoção.O bisturi será também usado para remover a massa oleica.','proposto',1),(2,'Restauro','Estrutura | Suporte:No suporte propõe-se apenas a limpeza superficial, com água, e remoção de adesivos antigos.Remoção da massa oleica que se encontra na zona inferior da coluna.Preenchimentos das lacunas devido à serra elétrica, através do entalhamento da madeira de cerejeira.','Para a limpeza prevê-se o uso de um pano humedecido em água.Na remoção do adesivo usar-se-á água para o seu amolecimento e o bisturi para a sua remoção.O bisturi será também usado para remover a massa oleica.','proposto',1);";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Values inserted");
	});


//termina coneção
con.end();

});
