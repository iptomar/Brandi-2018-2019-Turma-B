# Brandi-2018-2019-Turma-B
## Pasta Backend

<br/>O backend é um servidor que responde a pedidos do cliente
<br/>É utilizado nodeJS que envia os dados da base de dados em formato JSON
<br/>A tecnologia utilizada para a base de dados é MySQL

## Webservices disponívies (até agora):
**NOTA** 
<br/>Alguns dados para serem retornados necessitam de permissão de admin, caso contrário irá ser devolvido o seguinte output:
```json
[
    {"erro": "Permission denied"}
]
``` 

### GET /api/tecnicos
<br/> Retorna todos os Técnicos (só estão representados o primeiro e o último id)
<br/> Se com sucesso:
``` json
[
    {"idTecnico" :1,"nome":"JoãoNunes","username":"joaon","password":"pass123","email":"jn@hotmail.com","tipo":"aluno","habilitacoes":"",
"nivelProfissional":0},
    {"idTecnico":8,"nome":"Fernando dos Santos Antunes","username":"admin","password":"admin","email":"fsa@hotmail.com","tipo":"admin","habilitacoes":"Mestrado","nivelProfissional":7}
]
```

### GET /api/tecnicos/{id}
<br/> Isto retorna um determinado técnico com o respetivo id.
<br/> Se com sucesso e o id for 1 irá devolver o seguinte output:
```json
[
    {"idTecnico":1, "nome":"João Nunes", "username":"joaon", "password":"pass123", "email":"jn@hotmail.com", "tipo":"aluno", "habilitacoes":"", "nivelProfissional":0}
]
```
<br/> Se o id do técnico não existir irá devolver o seguinte output:
```json
[
    {"erro":"Tecnico not found"}
]
```

### GET /api/tecnicos/username/{username}
<br/> Isto retorna um determinado técnico com o respetivo username.
<br/> Se o username for edgaroli irá devolver o seguinte output:

```json
[
    {"idTecnico":2,"nome":"Edgar Oliveira","username":"edgaroli","password":"pass123","email":"eo@hotmail.com","tipo":"aluno","habilitacoes":"","nivelProfissional":0}
]
```
<br/> Se o username do técnico não existir irá devolver o seguinte output:
```json
[
    {"erro":"Tecnico not found"}
]
```

### GET /api/materiais
<br/> Retorna todos os materiais (só estão representados o primeiro e o último id)
```json
[
    {"idMaterial":1,"material":"Nikon 3300","quantidade":"","procedimento":2},
    {"idMaterial":4,"material":"Bisturi 11, etiquetas, contentor, zaragatoa","quantidade":"oito","procedimento":7}
]
```
### GET /api/materiais/id/{id}
<br/> Isto retorna um determinado material com o respetivo id.
<br/> Se o id for 4 irá devolver o seguinte output:
```json
[
  {
  "idMaterial":4,
  "material":"Bisturi 11, etiquetas, contentor, zaragatoa",
  "quantidade":"oito",
  "procedimento":7
  }
]
```
<br/> Se o id do material não existir irá devolver o seguinte output:
```json
[
    {"erro":"Material not found"}
]
```

### GET /api/procedimentos
<br/> Isto retorna todos os procedimentos (só estão representados o primeiro e o último id)
```json
[ 
  	{"idProcedimento":1,"data":"2017-02-21T00:00:00.000Z","designacao":"Escolha e análise do objeto","duracao":"4h","observacoes":"Coluna neoclássica com policromia","processoObra":1,"tecnicoObra":1},
	{"idProcedimento":8,"data":"2017-03-21T00:00:00.000Z","designacao":"Recolha de fotografias","duracao":"4h","observacoes":"À recolha de amostras","processoObra":1,"tecnicoObra":1}
]
```

### GET /api/procedimento/id/{id}
<br/> Isto retorna um determinado procedimento com o respetivo id.
<br/> Se o id for 6 irá devolver o seguinte output:
```json
[
  {"idProcedimento":6,"data":"2017-03-21T00:00:00.000Z","designacao":"Avaliação para a recolha de amostras","duracao":"","observacoes":"","processoObra":1,"tecnicoObra":6}
]
```
<br/> Se o id do procedimento não existir irá devolver o seguinte output:
```json
[
    {"erro":"Procedimento not found"}
]
```

### GET /api/processosObra
<br/> Lista de processos de obra
```json
[
  {
	"numProcesso":1,
	"designacao":"Coluna neoclássica com policromia",
	"objeto":1
  }
]
```

### GET /api/processosObra/id/{id}
<br/> Lista de processos de obra dado um determinado id
<br/> Por exemplo se o id for 1 irá retornar o seguinte output:
```json
[
  {
	"numProcesso":1,
	"designacao":"Coluna neoclássica com policromia",
	"objeto":1
  }
]
```
<br/> Se o id do processo de uma obra não existir irá devolver o seguinte output:
```json
[
    {"erro":"ProcessoObra not found"}
]
```

### GET /api/processos
<br/> Lista todos os processos (só estão representados o primeiro e o último id)
```json
[	
	{"idProcesso":1,"LCRM":"0005-04-2006-MOB","CEARC":"1221/21/06","dataAberturaLCRM":"2006-04-27T23:00:00.000Z","dataAberturaCEARC":"2006-04-27T23:00:00.000Z","dataEntradaLCRM":"2006-04-27T23:00:00.000Z","dataEntradaCEARC":"2006-04-27T23:00:00.000Z","objeto":1},
	{"idProcesso":8,"LCRM":"080-08-11-2013-mob","CEARC":"1266/02/2013","dataAberturaLCRM":"2013-11-28T00:00:00.000Z","dataAberturaCEARC":"2012-02-02T00:00:00.000Z","dataEntradaLCRM":"2012-02-02T00:00:00.000Z","dataEntradaCEARC":"2012-02-02T00:00:00.000Z","objeto":8}
]
```

### GET /api/processos/id/{id}
<br/> Lista os processos dado um determinado id
<br/> Por exemplo se o id for 4 irá retornar o seguinte output:
```json
[
  {"idProcesso":4,"LCRM":"001-01-05-2015-MOB","CEARC":"16-10-2015-2","dataAberturaLCRM":"2015-05-01T23:00:00.000Z","dataAberturaCEARC":"2015-05-26T23:00:00.000Z","dataEntradaLCRM":"2015-02-02T00:00:00.000Z","dataEntradaCEARC":"2015-05-19T23:00:00.000Z","objeto":4}
]
```
<br/> Se o id de um processo não existir irá devolver o seguinte output:
```json
[
    {"erro":"Processo not found"}
]
```

### GET /api/processos/{id}/tecnicos
<br/> Lista o tecnico que está encarregado de um determinado processo
<br/> Por exemplo se o id for 4 irá retornar o seguinte output:
```json
[
  {"idTecnico":1,"nome":"João Nunes","username":"joaon","password":"pass123","email":"jn@hotmail.com","tipo":"aluno","habilitacoes":"","nivelProfissional":0}
]
```
<br/> Se o id do técnico responsável não existir irá devolver o seguinte output:
```json
[
    {"erro":"Tecnicos not found"}
]
```

### GET /api/objetos
<br/> lista todos os objetos (só estão representados o primeiro e o último id)
```json
[
	{"idObjeto":1,"designacao":"Coluna neoclássica com policromia","superCategoria":"Bens Culturais","categoria":"Móvel Integrado","subCategoria":"Coluna pertence a um retábulo","tipologia":"Arte Sacra","localizacao":"Lisboa","dimensoes":"Comp x Prof. x Alt. - 131,5 cm | Diâmetro 13 cm","outrasDimensoes":"Lado - 19 x 19 cm | Diagonal - 25 cm","conjunto":1,"elementosConjunto":"Bens do Conjunto - Retábulos e outras alfaias religiosas |Elementos Constituintes do Bem Cultural - Desconhecido","elementosAcessorios":"O tronco da coluna é constituído por madeira de nogueira e o capitel será provavelmente de marupa, existindo a hipótese de ser de choupo ou afusélia. Os frisos aparentam ser do mesmo material que o corpo da coluna.","marcasAutoria":"Não foram identificadas quaisquer marcas deste género","marcasMontagem":"Riscador;marcas geométricas quadradas incisas na madeira; marcas de entalhe.","marcasConstrucao":"Riscador.","classificacaoPatrimonial":"Nacional/Regional","estilo":"Neo-clássico","epoca":"Coevo","qualidade":"Boa","estruturaMaterial":"Suporte: Madeira de nogueira. Intervenções diferenciadas em madeiras de cerejeira.","superficieMaterial":"Preparação branca de cré ou gesso, cola de coelho, bollus (argila da arménia), folha de ouro, policromia, purpurina, elementos metálicos, massa de vidreiro","tecnicaEstrutura":"Suporte: Entalhamento; Ligação entre a coluna e capitel simples (macho-fêmea) colada; frisos pregados com elementos metálicos;","tecnicaSuperficie":"Policromias, repolicromias e repintes. As policromias originais poderiam ser marmoreados/imitação de lápis lazúli.","descricao":"Coluna neoclássica, com policromia, repolicromias e repintes, tendo sido por isso, alvo de intervenções posteriores. Formada por vários blocos: corpo da coluna, capitel e frisos. Decoração do capitel com volutas; apliques metálicos; bute; perfil decorativo.","analogias":"Desconhecidas","conclusoes":"A coluna pertence a um retábulo que é desconhecido, uma vez que este foi desmantelado e, provavelmente, todas as suas parte constituintes foram vendidas em separado, desconhecendo-se a sua proveniência.","autoria":"Desconhecida","datacao":"Século XVIII/XIX","localOrigem":"Desconhecida","condicoesAmbientais":"Não é conhecida a sua proveniência, nem o seu percurso até chegar ao proprietário atual, não se conhecendo assim as condições ambientais do local em que esteve preservado. Prevê-se que a possível localização futura será a casa do proprietário, podendo por isso, haver um maior controlo das condições atmosféricas."},
	{"idObjeto":8,"designacao":"Urna Santissimo","superCategoria":"","categoria":"","subCategoria":"","tipologia":"","localizacao":"","dimensoes":"","outrasDimensoes":"","conjunto":0,"elementosConjunto":"","elementosAcessorios":"","marcasAutoria":"","marcasMontagem":"","marcasConstrucao":"","classificacaoPatrimonial":"","estilo":"","epoca":"","qualidade":"","estruturaMaterial":"","superficieMaterial":"","tecnicaEstrutura":"","tecnicaSuperficie":"","descricao":"","analogias":"","conclusoes":"","autoria":"","datacao":"","localOrigem":"","condicoesAmbientais":""}	
]
```

### GET /api/objetos/id/{id}
<br/> Lista os objetos dado um determinado id
<br/> Por exemplo se o id for 3 irá retornar o seguinte output:
```json
[
  {"idObjeto":3,"designacao":"Estante de missal","superCategoria":"","categoria":"","subCategoria":"","tipologia":"","localizacao":"","dimensoes":"","outrasDimensoes":"","conjunto":0,"elementosConjunto":"","elementosAcessorios":"","marcasAutoria":"","marcasMontagem":"","marcasConstrucao":"","classificacaoPatrimonial":"","estilo":"","epoca":"","qualidade":"","estruturaMaterial":"","superficieMaterial":"","tecnicaEstrutura":"","tecnicaSuperficie":"","descricao":"","analogias":"","conclusoes":"","autoria":"","datacao":"","localOrigem":"","condicoesAmbientais":""}
]
```
<br/> Se o id do técnico responsável não existir irá devolver o seguinte output:
```json
[
    {"erro":"Objeto not found"}
]
```

### GET /api/imagens
<br/> Lista todas as imagens (só estão representados o primeiro e o último id)
```jsonc
[
	{"idImagem":1,"imagem":"imgColuna1.jpg","tipo":"fotografia","formato":"JPEG","referencia":"Nikon 3300","documentacao":"Capitel e pormenores (CD) | Análises estratigráficas (CD)","objeto":1},
	{"idImagem":9,"imagem":"UrnaSantissimo.png","tipo":"fotografia","formato":"PNG","referencia":"","documentacao":"","objeto":8}
]
```

### GET /api/objetos/{id}/imagens
<br/> Mostra a imagem que esta definida para aquele id do objeto
<br/> Por exemplo se o id for 2 irá retornar o seguinte output:
```jsonc
[
  {
	"idImagem":3,"imagem":"PianoBrincar.png","tipo":"fotografia","formato":"PNG","referencia":"","documentacao":"","objeto":2
  }
]
```
<br/> Se o id da imagem não existir irá devolver o seguinte output:
```json
[
    {"erro":"Imagens not found"}
]
```

### GET /api/interessados
<br/> Mostra a lista de interessados (só estão representados o primeiro e o último id)
```jsonc
[
	{"idInteressado":1,"nome":"Zuao","NIF":"123454678","enderecoPostal":"Coimbra","enderecoEletronico":"Sem informação","contacto":"Sem informação"},{"idInteressado":3,"nome":"Ze","NIF":"444555666","enderecoPostal":"Não se aplica","enderecoEletronico":"Não se aplica","contacto":"Não se aplica"}
]
```
<br/> Se não existirem interessados irá devolver o seguinte output:
```json
[
    {"erro":"Interessados not found"}
]
```

### GET /api/interessados/{id}
<br/> Mostra o interessado que esta definido para aquele id do objeto
<br/> Por exemplo se o id for 2 irá retornar o seguinte output:
```jsonc
[
  {"idInteressado":2,"nome":"Salvador Sanchez","NIF":"111222333","enderecoPostal":"Lisboa","enderecoEletronico":"Sem informação","contacto":"Sem informação"}
]
```
<br/> Se o id do interessado não existir irá devolver o seguinte output:
```json
[
    {"erro":"Interessado not found"}
]
```

### GET /api/objetos/{id}/interessados
<br/> Mostra a lista de interessados de um certo objeto (só estão representados o primeiro e o último id)
<br/> Por exemplo se o id do objeto for 1 irá retornar o seguinte output:
```jsonc
[
	{"idInteressado":1,"enderecoPostal":"Coimbra","enderecoEletronico":"Sem informação","contacto":"Sem informação","tipo":"Proprietário"},
	{"idInteressado":3,"enderecoPostal":"Não se aplica","enderecoEletronico":"Não se aplica","contacto":"Não se aplica","tipo":"Mecenas"}
]
```
<br/> Se não existirem interessados irá devolver o seguinte output:
```json
[
    {"erro":"Interessados not found"}
]
```

### GET /api/objetos/{id}/ciclosclimatericos
<br/> Mostra os ciclos climatéricos de um objeto dado o seu id
<br/> Por exemplo se o id for 1 irá retornar o seguinte output:
```json
[
  {
	"idCiclo":1,
	"temperatura":"Frio / Húmido: Desconhecido | Quente / Seco: Desconhecido",
	"humidade":"Frio / Húmido: Desconhecido  | Quente / Seco: Desconhecido",
	"periodoAno":"NA",
	"objeto":1
  }
]
```
<br/> Se não existirem ciclos climatéricos de um objeto irá devolver o seguinte output:
```json
[
    {"erro":"Ciclos climatéricos not found"}
]
```

### GET /api/objetos/{id}/fontes
<br/> Mostra as fontes de um objeto dado o seu id (só estão representados o primeiro e o último id)
<br/> Por exemplo se o id for 1 irá retornar o seguinte output:
```json
[
  {"idFonte":1,"fonte":"Não se aplica","tipo":"NA","localizacao":"NA","cota":"NA","dataConsulta":"1997-01-01T00:00:00.000Z","area":"Arquivísticas | Documentais","objeto":1},
	{"idFonte":5,"fonte":"Não se aplica","tipo":"NA","localizacao":"NA","cota":"NA","dataConsulta":"1997-01-01T00:00:00.000Z","area":"Outras Fontes","objeto":}
]
```
<br/> Se não existirem fontes de um objeto irá devolver o seguinte output:
```json
[
    {"erro":"Fontes not found"}
]
```

### GET /api/objetos/{id}/poluicao
<br/> Isto mostra os dados de poluição de um objeto atraves do id
<br/> Se o id for 1 irá devolver o seguinte output:
```jsonc
[
  {"idPoluicao":1,"agente":"Sendo uma coluna pertencente a um restauro, é possível que estivesse inserida num espaço litúrgico, estando exposta a poeiras e fumos. Pertence possivelmente a um retábulo desmantelado, tendo percorrido um longo caminho até ao local atual, devendo por isso ter passado por alterações bruscas de temperatura e humidade relativa.","fonte":"Em relação às poeiras e fumos, provavelmente, teriam origem em velas ou devido ao contacto com pessoas do exterior.","resultados":"O contacto com estes agentes degradadores, em especial, às alterações de temperatura e humidade, levaram ao aparecimento de lacunas, tanto ao nível da camada policroma como de preparação. Assim como levaram à perda de coesão da camada de preparação, tornando-se pulverulenta.","observacoes":"Deve-se evitar ao máximo coloca-la perto de fontes de calor, como velas, fogueiras ou materiais quentes, assim como evitar transições bruscas de temperatura e humidade, de maneira a que a sua degradação não seja acelerada, levando ao aparecimento de danos e patologias no objeto.","objeto":1}
]
```
<br/> Se não existirem dados de poluição de um objeto irá devolver o seguinte output:
```json
[
    {"erro":"Poluição not found"}
]
```

### GET /api/objetos/{id}/iluminacao
<br/> Isto mostra a iluminacao de um objeto atraves do id
<br/> Se o id for 1 irá devolver o seguinte output:
```json
[
  {"idIlumicao":1,"fonte":"Desconhecido","iluminancia":"Desconhecido","UVmedido":"Desconhecido","UVreal":"Desconhecido","tipo":"natural","objeto":1},
	{"idIlumicao":2,"fonte":"Desconhecido","iluminancia":"Desconhecido","UVmedido":"Desconhecido","UVreal":"Desconhecido","tipo":"artificial","objeto":1}
]
```
<br/> Se não existirem dados da iluminação de um objeto irá devolver o seguinte output:
```json
[
    {"erro":"Iluminação not found"}
]
```

### GET /api/objetos/{id}/pedidosintervencao
<br/> Isto mostra os pedidos de intervenção de um objeto atraves do id
<br/> Se o id for 1 irá devolver o seguinte output:
```json
[
  {
	"idPedido":1,
	"tipo":"O proprietário deixou este campo sob a responsabilidade de quem fosse realizar a intervenção.",
	"aspetos":"Não se aplica",
	"objeto":1
  }
]
```
<br/> Se não existirem pedidos de intervenção de um objeto irá devolver o seguinte output:
```json
[
    {"erro":"Pedidos de intervenção not found"}
]
```

### GET /api/objetos/{id}/conservacoes
<br/> Isto mostra as conservações de um objeto através do id
<br/> Se o id for 1 irá devolver o seguinte output:
```json
[
  {"idConservacao":1,"tipo":"Deterioração Física, Química e Mecânica dos Materiais","estado":"Alterabilidade: decorrente de envelhecimento natural|Alteração: decorrente de fatores físicos, químicos, biológicos e antrópicos","estrutura":"O suporte da coluna encontra-se em bom estado de conservação. Não revela fragilidade nem falta de coesão. O local onde o seu estado poderá ser classificado como pior é a zona do capitel uma vez que há lacunas de suporte. O suporte do corpo da coluna apenas revela perfurações/cortes que se julgam ser de uma serra elétrica.","superficie":"A superfície da coluna encontra-se em mau estado de conservação. Esta é constituída por policromia e repolicromia repinte e ambas se encontram em mau estado de conservação, não só por falta de coesão das camadas de preparação como houve degradação das condições químicas e físicas de maior parte da policromia. Para além disso existem lacunas tanto a nível da camada policroma como da camada de preparação.","elementos":"A coluna tem como acessórios elementos constituídos materialmente por madeira (frisos) e elementos metálicos (pregos e elementos decorativos em bronze)O estado de conservação dos frisos é médio, isto é, encontram-se com várias lacunas de suporte, porém a estrutura que ainda se mantem não revela problemas a nível físico ou químico.Os elementos metálicos encontram-se em mau estado de conservação uma vez que todos eles se encontram oxidados.","observacoes":"O que se pode concluir em relação ao estado de conservação da obra é que este é mau. Apesar do suporte relevar bom estado tudo o resto não se assemelha, o que dificulta a leitura artística da obra, dificultando então a sua intervenção.","objeto":1},
	{"idConservacao":2,"tipo":"Deterioração Biológica dos Materiais","estado":"Identificação de Patologias e Agentes de Biodeterioração – Diagnóstico","estrutura":"Não releva qualquer tipo de atividade biologia, ativa ou não ativa (anterior).","superficie":"Não releva qualquer tipo de atividade biologia, ativa ou não ativa (anterior).","elementos":"Não releva qualquer tipo de atividade biologia, ativa ou não ativa (anterior).","observacoes":"O que se pode concluir em relação ao estado de conservação da obra é que este é mau. Apesar do suporte relevar bom estado tudo o resto não se assemelha, o que dificulta a leitura artística da obra, dificultando então a sua intervenção.","objeto":1}
]
```
<br/> Se não existirem dados de conservação de um objeto irá devolver o seguinte output:
```json
[
    {"erro":"Conservacoes not found"}
]
```

### GET /api/propostasintervecao
<br/> Mostra todas as propostas de intervecão
```json
[
  {"idProposta":1,"tipo":"Conservação | Restauro","dataProposto":null,"dataAceite":null,"interlecutoresIPT":"Fernando Antunes (IPT) LCRM CEARC | Beatriz Penas, Leonor Miranda","interlecutoresCliente":"","objeto":1}
]
```

### GET /api/intervencoes
<br/> Mostra a lista de todas as intervencoes
```json
[
  {"idIntervencao":1,"tipo":"Conservação | Restauro","intervencao":"Estrutura | Suporte:No suporte propõe-se apenas a limpeza superficial, com água, e remoção de adesivos antigos.Remoção da massa oleica que se encontra na zona inferior da coluna.Preenchimentos das lacunas devido à serra elétrica, através do entalhamento da madeira de cerejeira.","recursos":"Para a limpeza prevê-se o uso de um pano humedecido em água.Na remoção do adesivo usar-se-á água para o seu amolecimento e o bisturi para a sua remoção.O bisturi será também usado para remover a massa oleica.","estado":"proposto","proposta":1}
]
```

### GET /api/objetos/{id}/intervencoes
<br/> Mostra as intervencoes de um objeto dado o seu id
<br/> Se o seu id for 1 resulta do seguinte output:
```json
[
	{"idIntervencao":1,"tipo":"Conservação | Restauro","intervencao":"Estrutura | Suporte:No suporte propõe-se apenas a limpeza superficial, com água, e remoção de adesivos antigos.Remoção da massa oleica que se encontra na zona inferior da coluna.Preenchimentos das lacunas devido à serra elétrica, através do entalhamento da madeira de cerejeira.","recursos":"Para a limpeza prevê-se o uso de um pano humedecido em água.Na remoção do adesivo usar-se-á água para o seu amolecimento e o bisturi para a sua remoção.O bisturi será também usado para remover a massa oleica.","estado":"proposto","proposta":1}
]
```
<br/> Se não existirem dados de intervenções de um objeto irá devolver o seguinte output:
```json
[
    {"erro":"intervencoes not found"}
]
```

### GET /api/objetos/{id}/testes
<br/> Mostra os testes de um objeto dado o seu id
<br/> Se o seu id for 1 resulta do seguinte output:
```json
[{"idTeste":1,"referencia":"Observação á vista desarmada","localizacao":"Corpo da coluna e capitel","objetivos":"Identificação dos materiais","resultados":"Confirmação do uso de folha de ouro, purpurina, massa oleica, camada de preparação de gesso ou cré, policromia.","data":"2017-02-21T00:00:00.000Z","objeto":1,"tecnico":1}]
```
<br/> Se não existirem dados de testes de um objeto irá devolver o seguinte output:
```json
[
    {"erro":"Objeto not found"}
]
```

### GET /api/tecnicos/{id}/testes
<br/> Mostra os testes feitos por um tecnico dado o seu id
<br/> Se o seu id for 1 resulta do seguinte output:
```json
[{"idTeste":1,"referencia":"Observação á vista desarmada","localizacao":"Corpo da coluna e capitel","objetivos":"Identificação dos materiais","resultados":"Confirmação do uso de folha de ouro, purpurina, massa oleica, camada de preparação de gesso ou cré, policromia.","data":"2017-02-21T00:00:00.000Z","objeto":1,"tecnico":1}]
```
<br/> Se não existirem dados de testes feitos por um técnico irá devolver o seguinte output:
```json
[
    {"erro":"Objeto not found"}
]
```

### GET /api/objetos/{id}/documentacao
<br/> Mostra a documentação de um objeto dado o seu id (só estão representados o primeiro e o último id)
<br/> Se o seu id for 1 resulta do seguinte output:
```json
[{"idDocumentacao":1,"designacao":"Não identificados. Não se sabe nada sobre a história do objeto, como proveniência e local de origem.","referencias":"NA","autor":"NA","tipo":"Originais Fotográficos","objeto":1},{"idDocumentacao":3,"designacao":"Foi feita a análise estratigráfica. A análise estratigráfica consiste na observação microscópica, de amostras, que revelam os diferentes estratos, resultantes da aplicação de novas camadas de preparação e consequentemente, de camadas policromas (repolicromias ou repintes) e ainda, dos seus materiais.Exame de espectroscopia de absorção de infravermelho com transformada de Fourier (FTIR). É feito através de diferentes conjuntos de átomos que vibram de forma diferente. Aos diferentes conjuntos de átomos correspondem transições vibracionais com diferentes energias. Quando as moléculas são expostas a uma fonte de radiação infravermelha, estas absorvem a energia que corresponde à transições vibracionais apresentadas pelos seus grupos constituintes. O conjunto de absorções apresentadas pelas moléculas permite a identificação dos grupos constituinte das mesmas.","referencias":"Ver anexo digital em CD.","autor":"Dr. Victor Gaspar;Beatriz penas;Leonor Miranda.","tipo":"Exames e Análises","objeto":1}]
```
<br/> Se não existir documentação de um objeto irá devolver o seguinte output:
```json
[
    {"erro":"Documentacao not found"}
]
```

### GET /api/analisesSolventes/{id}/testesSolvente
<br/> Mostra os testes de uma analise dado o seu id
<br/> Se o seu id for 1 mostra o seguinte output:
```json
[
	{"idTeste": 1,"solvente":"Decapante lavável E-013-0070","eficacia":2,"observacao":"Marca: Robbialac | Descrição química: Diclorometano Metanol | Optou-se por um decapante em gel para apenas atuar a superfície, não chegando aos substratos inferiores.Deixou-se a atuar durante dez minutos, sendo removido com água/alcool embebidos num cotonete.","analise":1}
]
```
<br/> Se não existirem testes de uma analise irá devolver o seguinte output:
```json
[
    {"erro":"Testes not found"}
]
```

### GET api/analisesSolventes
<br/> Mostra a lista de analise de solventes
```json
[
	{"idAnalise": 1,"sujidade":"Repintes","data":"1970-01-01T00:00:00.000Z","caracteristicas":"Devido à dificuldade na remoção de repintes de forma mecânica, foi testado o decapante para facilitar a sua extração","tecnico": 1,"objeto": 1}
]
```

### GET api/objetos/{id}/analisesSolventes
<br/> Mostra analises de solventes de um objeto pelo id do objeto.
<br/> Se id for 1 irá mostrar o seguinte output:
```json
[
	{"idAnalise": 1,"sujidade":"Repintes","data":"1970-01-01T00:00:00.000Z","caracteristicas":"Devido à dificuldade na remoção de repintes de forma mecânica, foi testado o decapante para facilitar a sua extração","tecnico": 1,"objeto": 1}
]
```
<br/> Se não existirem analises de solventes de um objeto irá devolver o seguinte output:
```json
[
    {"erro":"analisesSolventes not found"}
]
```

### GET api/tecnicos/:id/analisesSolventes
<br/> Mostra analises de solventes feitos por um tecnico dado o seu id.
<br/> Se id for 1 irá mostrar o seguinte output:
```json
[
	{"idAnalise": 1,"sujidade":"Repintes","data":"1970-01-01T00:00:00.000Z","caracteristicas":"Devido à dificuldade na remoção de repintes de forma mecânica, foi testado o decapante para facilitar a sua extração","tecnico": 1,"objeto": 1}
]
```
<br/> Se não existirem analises de solventes feitos por um tecnico irá devolver o seguinte output:
```json
[
    {"erro":"analisesSolventes not found"}
]
```

### GET api/objetos/{id}/intervencoesanteriores"
<br/> Mostra as intervenções anterioes que um objeto esteve sujeito dado o seu id.
<br/> Se id for 1 irá mostrar o seguinte output:
```json
[
	{"idIntervencao":1,"estrutura":"Desmontagem do capitel. O capitel foi entalhado num bloco separado, que se une à coluna através de uma ligação simples (macho-fêmea), essa fixação é reforçada com adesivo.Foram colocados blocos de madeira nos locais de lacuna de suporte do capitel. O seu entalhe foi iniciado, porém não foi finalizado.","superficie":"Foram realizadas repolicromia e repintes anteriormente. Também foi colocada massa oleica numa das faces na zona inferior o motivo é desconhecido. Em alguns dos casos foram usadas purpurinas para substituir a falta de folha de ouro, de uma forma mais económica.","elementos":"Os frisos de madeira foram retirados do corpo da escultura e os elementos metálicos também.","observacoes":"Os restauros anteriores observam-se sobretudo a nível da superfície. Maior parte dos restauros anteriores, ao nível de policromia, verificaram-se incoerentes, uma vez que não respeitam de qualquer modo a policromia original. Tudo isto muda a sua leitura a nível artístico.","objeto":1}
]
```
<br/> Se não existirem intervenções anterioes que um objeto esteve sujeito irá devolver o seguinte output:
```json
[
    {"erro":"Testes not found"}
]
```

### POST /api/auth
<br/> Autentica na aplicação
#### recebe:
* username - nome utilizado para se autenticar
* password - password do utilizador para se autenticar

#### devolve
<br/>se com sucesso:
* não devolve erro

<br/>se sem sucesso mas:
<br/> Utilizador inexistente
* User not found
<br/> Utilizador existe mas credenciais erradas
* "Incorrect username and/or password, please try again"
<br/> Campos vazios
* Please enter Username and Password!

### POST /api/logout
<br/> O utilizador deixa de estar autenticado na aplicação
#### recebe:
* Nada

#### devolve:
* Nada

### POST /api/register
<br/> Regista na aplicação
#### recebe:
* username - nome utilizado para se autenticar
* password - password do utilizador para se autenticar
* email - email do utilizador
* tipo - que tipo de utilizador é
* Habilitações - habilitações do utilizador
* NivProfissional - nível profissional do utilizador

#### devolve:
<br/>se com sucesso:
* Sucesso

<br/>se sem sucesso mas:
<br/> Campos vazios
* Por favor peencha todos os campos.