# Brandi-2018-2019-Turma-B
## Pasta Backend


<br/>O backend é um servidor que responde a pedidos do cliente
<br/>É utilizado nodeJS que envia os dados da base de dados em formato JSON
<br/>A tecnologia utilizada para a base de dados é MySQL

## Os webservices disponivies (até agora) são:

### GET /api/tecnicos
#### Retorna todos os Técnicos

#### Se com sucesso:
``` jsonc
[
  {
    "idTecnico" : 1,
    "nome":"JoãoNunes",
    "username":"joaon",
    "password":"pass123",
    "email":"jn@hotmail.com",
    "tipo":"aluno",
    "habilitacoes":"",
    "nivelProfissional":0
},
{
    "idTecnico":2,
    "nome":"EdgarOliveira",
    "username":"edgaroli",
    "password":"pass123",
    "email":"eo@hotmail.com",
    "tipo":"aluno",
    "habilitacoes":"",
    "nivelProfissional":0
    },
{
     "idTecnico":3
     "nome":"HélderLopes",
     "username":"hellopes",
     "password":"pass123",
     "email":"hl@hotmail.com",
     "tipo":"aluno",
     "habilitacoes":"",
     "nivelProfissional":0
     },
     {
     
     "idTecnico":4,
     "nome":"MiguelTomé",
     "username":"mtome",
     "password":"pass123",
     "email":"mt@hotmail.com",
     "tipo":"aluno",
     "habilitacoes":"",
     "nivelProfissional":0
     },
{
    "idTecnico":5,
    "nome":"DavidMoreno",
    "username":"dmoreno",
    "password":"pass123",
    "email":"dm@hotmail.com",
    "tipo":"aluno",
    "habilitacoes":"",
    "nivelProfissional":0
    },
{
   "idTecnico":6,
   "nome":"DiogoRibeiro",
   "username":"dribeiro",
   "password":"pass123",
   "email":"dr@hotmail.com",
   "tipo":"aluno",
   "habilitacoes":"",
   "nivelProfissional":0
   },
{
   "idTecnico":7,
   "nome":"AndréFronteira",
   "username":"afronteira",
   "password":"pass123",
   "email":"af@hotmail.com",
   "tipo":"aluno",
   "habilitacoes":"",
   "nivelProfissional":0
},
{
   "idTecnico":8,
   "nome":"Fernando dos Santos Antunes",
   "username":"admin",
   "password":"admin",
   "email":"fsa@hotmail.com",
   "tipo":"admin",
   "habilitacoes":"Mestrado",
   "nivelProfissional":7
}]
```

### POST /api/auth

### recebe:

<br/> username - nome utilizado para se autenticar
<br/> password- password do utilizador para se autenticar

### devolve

<br/>se com sucesso:
<br/>não devolve erro

<br/>se sem sucesso:
<br/>"Incorrect Username and/or Password!"


### GET /api/tecnicos/{id}
#### Isto retorna um determinado técnico com o respetivo id.
#### Se o id for 1 irá devolver o seguinte output:
```jsonc
[
  {
    "idTecnico":1,
    "nome":"João Nunes",
    "username":"joaon",
    "password":"pass123",
    "email":"jn@hotmail.com",
    "tipo":"aluno",
    "habilitacoes":"",
    "nivelProfissional":0
    }
]
```

### GET /api/tecnicos/username/{username}
#### Isto retorna um determinado técnico com o respetivo username.
#### Se o username for edgaroli irá devolver o seguinte output:
```jsonc
[
  {
  "idTecnico":2,
  "nome":"Edgar Oliveira",
  "username":"edgaroli",
  "password":"pass123",
  "email":"eo@hotmail.com",
  "tipo":"aluno",
  "habilitacoes":"",
  "nivelProfissional":0
  }
]
```


### GET /api/materiais
#### Retorna todos os materiais
```jsonc
[
  {
    {
    "idMaterial":1,
    "material":"Nikon 3300",
    "quantidade":"",
    "procedimento":2
    },
    {
    "idMaterial":2,
    "material":"Pano, trincha, água",
	"quantidade":"",
    "procedimento":4
    },
    {
    "idMaterial":3,
    "material":"Nikon 3300",
    "quantidade":"",
    "procedimento":5
    },
    {
    "idMaterial":4,
    "material":"Bisturi 11, etiquetas, contentor, zaragatoa",
    "quantidade":"oito",
    "procedimento":7
    }
  }
]
```

### GET /api/materiais/id/{id}
#### Isto retorna um determinado material com o respetivo id.
#### Se o id for 4 irá devolver o seguinte output:
```jsonc
[
  {
  "idMaterial":4,
  "material":"Bisturi 11, etiquetas, contentor, zaragatoa",
  "quantidade":"oito",
  "procedimento":7
  }
]
```
### GET /api/procedimentos
#### Isto retorna todos os procedimentos
```jsonc
[
  {
  	{
	"idProcedimento":1,
	"data":"2017-02-21T00:00:00.000Z",
	"designacao":"Escolha e análise do objeto",
	"duracao":"4h",
	"observacoes":"Coluna neoclássica com policromia",
	"processoObra":1,
	"tecnicoObra":1
	},
	{
	"idProcedimento":2,
	"data":"2017-02-28T00:00:00.000Z",
	"designacao":"Recolha de fotografias",
	"duracao":"3h",
	"observacoes":"Geral e de pormenor",
	"processoObra":1,
	"tecnicoObra":2
	},
	{
	"idProcedimento":3,
	"data":"2017-03-14T00:00:00.000Z",
	"designacao":"Avaliação para a recolha de amostras",
	"duracao":"2h",
	"observacoes":"",
	"processoObra":1,
	"tecnicoObra":3
	},
	{
	"idProcedimento":4,
	"data":"2017-03-14T00:00:00.000Z",
	"designacao":"Limpeza superficial",
	"duracao":"1:30h",
	"observacoes":"",
	"processoObra":1,
	"tecnicoObra":4
	},
	{
	"idProcedimento":5,
	"data":"2017-03-14T00:00:00.000Z",
	"designacao":"Recolha de fotografias",
	"duracao":"1:30h",
	"observacoes":"Geral e de pormenor",
	"processoObra":1,
	"tecnicoObra":5
	},
	{
	"idProcedimento":6,
	"data":"2017-03-21T00:00:00.000Z",
	"designacao":"Avaliação para a recolha de amostras",
	"duracao":"",
	"observacoes":"",
	"processoObra":1,
	"tecnicoObra":6
	},
	{
	"idProcedimento":7,
	"data":"2017-03-21T00:00:00.000Z",
	"designacao":"Recolha de amostras",
	"duracao":"4h",
	"observacoes":"",
	"processoObra":1,
	"tecnicoObra":7
	},
	{
	"idProcedimento":8,
	"data":"2017-03-21T00:00:00.000Z",
	"designacao":"Recolha de fotografias",
	"duracao":"4h",
	"observacoes":"À recolha de amostras",
	"processoObra":1,
	"tecnicoObra":1
	}
  }
]
```

### GET /api/procedimento/id/{id}
#### Isto retorna um determinado procedimento com o respetivo id.
#### Se o id for 6 irá devolver o seguinte output:
```jsonc
[
  {
	"idProcedimento":6,
	"data":"2017-03-21T00:00:00.000Z",
	"designacao":"Avaliação para a recolha de amostras",
	"duracao":"",
	"observacoes":"",
	"processoObra":1,
	"tecnicoObra":6
  }
]
```

### GET /api/processosObra
#### Lista de processos de obra
```jsonc
[
  {
	"numProcesso":1,
	"designacao":"Coluna neoclássica com policromia",
	"objeto":1
  }
]
```
### GET /api/processosObra/id/{id}
#### Lista de processos de obra dado um determinado id
#### Por exemplo se o id for 1 irá retornar o seguinte output:
```jsonc
[
  {
	"numProcesso":1,
	"designacao":"Coluna neoclássica com policromia",
	"objeto":1
  }
]
```

### GET /api/processos
#### Lista todos os processos 
```jsonc
[	
	{
		{
		"idProcesso":1,
		"LCRM":"0005-04-2006-MOB",
		"CEARC":"1221/21/06",
		"dataAberturaLCRM":"2006-04-27T23:00:00.000Z",
		"dataAberturaCEARC":"2006-04-27T23:00:00.000Z",
		"dataEntradaLCRM":"2006-04-27T23:00:00.000Z",
		"dataEntradaCEARC":"2006-04-27T23:00:00.000Z",
		"objeto":1
		},
		{
		"idProcesso":2,
		"LCRM":"001/01/07/2016/MOB",
		"CEARC":"2016-12-12",
		"dataAberturaLCRM":"2016-07-01T23:00:00.000Z",
		"dataAberturaCEARC":"2016-07-03T23:00:00.000Z",
		"dataEntradaLCRM":"2016-07-01T23:00:00.000Z",
		"dataEntradaCEARC":"2016-09-03T23:00:00.000Z",
		"objeto":2
		},
		{
		"idProcesso":3,
		"LCRM":"06-006-011-2013-40B",
		"CEARC":"2013-01-04",
		"dataAberturaLCRM":"2013-11-28T00:00:00.000Z",
		"dataAberturaCEARC":"2013-02-21T00:00:00.000Z",
		"dataEntradaLCRM":"2013-11-28T00:00:00.000Z",
		"dataEntradaCEARC":"2013-02-21T00:00:00.000Z",
		"objeto":3
		},
		{
		"idProcesso":4,
		"LCRM":"001-01-05-2015-MOB",
		"CEARC":"16-10-2015-2",
		"dataAberturaLCRM":"2015-05-01T23:00:00.000Z",
		"dataAberturaCEARC":"2015-05-26T23:00:00.000Z",
		"dataEntradaLCRM":"2015-02-02T00:00:00.000Z",
		"dataEntradaCEARC":"2015-05-19T23:00:00.000Z",
		"objeto":4
		},
		{
		"idProcesso":5,
		"LCRM":"0004-04-2006-MOB",
		"CEARC":"1119/19/06",
		"dataAberturaLCRM":"2006-04-17T23:00:00.000Z",
		"dataAberturaCEARC":"2006-04-17T23:00:00.000Z",
		"dataEntradaLCRM":"2006-04-17T23:00:00.000Z",
		"dataEntradaCEARC":"2006-04-17T23:00:00.000Z",
		"objeto":5
		},
		{
		"idProcesso":6,"LCRM":"",
		"CEARC":"861/03/02",
		"dataAberturaLCRM":"2002-03-05T00:00:00.000Z",
		"dataAberturaCEARC":"2002-03-05T00:00:00.000Z",
		"dataEntradaLCRM":"2002-03-05T00:00:00.000Z",
		"dataEntradaCEARC":"2002-03-05T00:00:00.000Z",
		"objeto":6
		},
		{
		"idProcesso":8,
		"LCRM":"080-08-11-2013-mob",
		"CEARC":"1266/02/2013",
		"dataAberturaLCRM":"2013-11-28T00:00:00.000Z",
		"dataAberturaCEARC":"2012-02-02T00:00:00.000Z",
		"dataEntradaLCRM":"2012-02-02T00:00:00.000Z",
		"dataEntradaCEARC":"2012-02-02T00:00:00.000Z",
		"objeto":8
		}
	}
]
```
### GET /api/processos/id/{id}
#### Lista os processos dado um determinado id
#### Por exemplo se o id for 4 irá retornar o seguinte output:
```jsonc
[
  {
	"idProcesso":4,
	"LCRM":"001-01-05-2015-MOB",
	"CEARC":"16-10-2015-2",
	"dataAberturaLCRM":"2015-05-01T23:00:00.000Z",
	"dataAberturaCEARC":"2015-05-26T23:00:00.000Z",
	"dataEntradaLCRM":"2015-02-02T00:00:00.000Z",
	"dataEntradaCEARC":"2015-05-19T23:00:00.000Z",
	"objeto":4
  }
]
```

### GET /api/processos/{id}/tecnicos
#### Lista o tecnico que está encarregado de um determinado processo
#### Por exemplo se o id for 4 irá retornar o seguinte output:
```jsonc
[
  {
	"idTecnico":1,
	"nome":"João Nunes",
	"username":"joaon",
	"password":"pass123",
	"email":"jn@hotmail.com",
	"tipo":"aluno",
	"habilitacoes":"",
	"nivelProfissional":0
  }
]
```

### GET /api/objetos
#### lista todos os objetos
```jsonc
[
	{
		{
		"idObjeto":1,
		"designacao":"Coluna neoclássica com policromia",
		"superCategoria":"Bens Culturais",
		"categoria":"Móvel Integrado",
		"subCategoria":"Coluna pertence a um retábulo",
		"tipologia":"Arte Sacra",
		"localizacao":"Lisboa",
		"dimensoes":"Comp x Prof. x Alt. - 131,5 cm | Diâmetro 13 cm",
		"outrasDimensoes":"Lado - 19 x 19 cm | Diagonal - 25 cm","conjunto":1,
		"elementosConjunto":"Bens do Conjunto - Retábulos e outras alfaias religiosas |Elementos Constituintes do Bem Cultural - Desconhecido",
		"elementosAcessorios":"O tronco da coluna é constituído por madeira de nogueira e o capitel será provavelmente de marupa, existindo a hipótese de ser de choupo ou afusélia. Os frisos aparentam ser do mesmo material que o corpo da coluna.",
		"marcasAutoria":"Não foram identificadas quaisquer marcas deste género",
		"marcasMontagem":"Riscador;marcas geométricas quadradas incisas na madeira; marcas de entalhe.",
		"marcasConstrucao":"Riscador.",
		"classificacaoPatrimonial":"Nacional/Regional",
		"estilo":"Neo-clássico",
		"epoca":"Coevo",
		"qualidade":"Boa",
		"estruturaMaterial":"Suporte: Madeira de nogueira. Intervenções diferenciadas em madeiras de cerejeira.",
		"superficieMaterial":"Preparação branca de cré ou gesso, cola de coelho, bollus (argila da arménia), folha de ouro, policromia, purpurina, elementos metálicos, massa de vidreiro",
		"tecnicaEstrutura":"Suporte: Entalhamento; Ligação entre a coluna e capitel simples (macho-fêmea) colada; frisos pregados com elementos metálicos;",
		"tecnicaSuperficie":"Policromias, repolicromias e repintes. As policromias originais poderiam ser marmoreados/imitação de lápis lazúli.",
		"descricao":"Coluna neoclássica, com policromia, repolicromias e repintes, tendo sido por isso, alvo de intervenções posteriores. Formada por vários blocos: corpo da coluna, capitel e frisos. Decoração do capitel com volutas; apliques metálicos; bute; perfil decorativo.","analogias":"Desconhecidas","conclusoes":"A coluna pertence a um retábulo que é desconhecido, uma vez que este foi desmantelado e, provavelmente, todas as suas parte constituintes foram vendidas em separado, desconhecendo-se a sua proveniência.",
		"autoria":"Desconhecida",
		"datacao":"Século XVIII/XIX",
		"localOrigem":"Desconhecida",
		"condicoesAmbientais":"Não é conhecida a sua proveniência, nem o seu percurso até chegar ao proprietário atual, não se conhecendo assim as condições ambientais do local em que esteve preservado. Prevê-se que a possível localização futura será a casa do proprietário, podendo por isso, haver um maior controlo das condições atmosféricas."
		},
		{"idObjeto":2,
		"designacao":"Piano de Brincar em Madeira",
		"superCategoria":"",
		"categoria":"",
		"subCategoria":"",
		"tipologia":"",
		"localizacao":"",
		"dimensoes":"",
		"outrasDimensoes":"",
		"conjunto":0,
		"elementosConjunto":"",
		"elementosAcessorios":"",
		"marcasAutoria":"",
		"marcasMontagem":"",
		"marcasConstrucao":"",
		"classificacaoPatrimonial":"",
		"estilo":"","epoca":"",
		"qualidade":"",
		"estruturaMaterial":"",
		"superficieMaterial":"",
		"tecnicaEstrutura":"",
		"tecnicaSuperficie":"",
		"descricao":"",
		"analogias":"",
		"conclusoes":"",
		"autoria":"",
		"datacao":"",
		"localOrigem":"",
		"condicoesAmbientais":""
		},
		{"idObjeto":3,
		"designacao":"Estante de missal",
		"superCategoria":"",
		"categoria":"",
		"subCategoria":"",
		"tipologia":"",
		"localizacao":"",
		"dimensoes":"",
		"outrasDimensoes":"",
		"conjunto":0,
		"elementosConjunto":"",
		"elementosAcessorios":"",
		"marcasAutoria":"",
		"marcasMontagem":"",
		"marcasConstrucao":"",
		"classificacaoPatrimonial":"",
		"estilo":"",
		"epoca":"",
		"qualidade":"",
		"estruturaMaterial":"",
		"superficieMaterial":"",
		"tecnicaEstrutura":"",
		"tecnicaSuperficie":"",
		"descricao":"",
		"analogias":"",
		"conclusoes":"",
		"autoria":"",
		"datacao":"",
		"localOrigem":"",
		"condicoesAmbientais":""
		},
		{
		"idObjeto":4,
		"designacao":"Gaiola",
		"superCategoria":"",
		"categoria":"",
		"subCategoria":"",
		"tipologia":"",
		"localizacao":"",
		"dimensoes":"",
		"outrasDimensoes":"",
		"conjunto":0,
		"elementosConjunto":"",
		"elementosAcessorios":"",
		"marcasAutoria":"",
		"marcasMontagem":"",
		"marcasConstrucao":"",
		"classificacaoPatrimonial":"",
		"estilo":"",
		"epoca":"",
		"qualidade":"",
		"estruturaMaterial":"",
		"superficieMaterial":"",
		"tecnicaEstrutura":"",
		"tecnicaSuperficie":"",
		"descricao":"",
		"analogias":"",
		"conclusoes":"",
		"autoria":"",
		"datacao":"",
		"localOrigem":"",
		"condicoesAmbientais":""
		},
		{
		"idObjeto":5,
		"designacao":"Guarda Joias Império",
		"superCategoria":"",
		"categoria":"",
		"subCategoria":"",
		"tipologia":"",
		"localizacao":"",
		"dimensoes":"",
		"outrasDimensoes":"",
		"conjunto":0,
		"elementosConjunto":"",
		"elementosAcessorios":"",
		"marcasAutoria":"",
		"marcasMontagem":"",
		"marcasConstrucao":"",
		"classificacaoPatrimonial":"",
		"estilo":"",
		"epoca":"",
		"qualidade":"",
		"estruturaMaterial":"",
		"superficieMaterial":"",
		"tecnicaEstrutura":"",
		"tecnicaSuperficie":"",
		"descricao":"",
		"analogias":"",
		"conclusoes":"",
		"autoria":"",
		"datacao":"",
		"localOrigem":"",
		"condicoesAmbientais":""
		},
		{
		"idObjeto":6,
		"designacao":"Oratório Policromado",
		"superCategoria":"",
		"categoria":"",
		"subCategoria":"",
		"tipologia":"",
		"localizacao":"",
		"dimensoes":"",
		"outrasDimensoes":"",
		"conjunto":0,
		"elementosConjunto":"",
		"elementosAcessorios":"",
		"marcasAutoria":"",
		"marcasMontagem":"",
		"marcasConstrucao":"",
		"classificacaoPatrimonial":"",
		"estilo":"",
		"epoca":"",
		"qualidade":"",
		"estruturaMaterial":"",
		"superficieMaterial":"",
		"tecnicaEstrutura":"",
		"tecnicaSuperficie":"",
		"descricao":"",
		"analogias":"",
		"conclusoes":"",
		"autoria":"",
		"datacao":"",
		"localOrigem":"",
		"condicoesAmbientais":""
		},
		{"idObjeto":7,
		"designacao":"Sacrário de madeira policromada com resplendor entalhado na porta","superCategoria":"",
		"categoria":"",
		"subCategoria":"",
		"tipologia":"",
		"localizacao":"",
		"dimensoes":"",
		"outrasDimensoes":"",
		"conjunto":0,
		"elementosConjunto":"",
		"elementosAcessorios":"",
		"marcasAutoria":"",
		"marcasMontagem":"",
		"marcasConstrucao":"",
		"classificacaoPatrimonial":"",
		"estilo":"",
		"epoca":"",
		"qualidade":"",
		"estruturaMaterial":"",
		"superficieMaterial":"",
		"tecnicaEstrutura":"",
		"tecnicaSuperficie":"",
		"descricao":"",
		"analogias":"",
		"conclusoes":"",
		"autoria":"",
		"datacao":"",
		"localOrigem":"",
		"condicoesAmbientais":""
		},
		{
		"idObjeto":8,
		"designacao":"Urna Santissimo",
		"superCategoria":"",
		"categoria":"",
		"subCategoria":"",
		"tipologia":"",
		"localizacao":"",
		"dimensoes":"",
		"outrasDimensoes":"",
		"conjunto":0,
		"elementosConjunto":"",
		"elementosAcessorios":"",
		"marcasAutoria":"",
		"marcasMontagem":"",
		"marcasConstrucao":"",
		"classificacaoPatrimonial":"",
		"estilo":"",
		"epoca":"",
		"qualidade":"",
		"estruturaMaterial":"",
		"superficieMaterial":"",
		"tecnicaEstrutura":"",
		"tecnicaSuperficie":"",
		"descricao":"",
		"analogias":"",
		"conclusoes":"",
		"autoria":"",
		"datacao":"",
		"localOrigem":"",
		"condicoesAmbientais":""
		}
	}
]
```

### GET /api/objetos/id/{id}
#### Lista os objetos dado um determinado id
#### Por exemplo se o id for 3 irá retornar o seguinte output:
```jsonc
[
  {
	"idObjeto":3,
	"designacao":"Estante de missal",
	"superCategoria":"",
	"categoria":"",
	"subCategoria":"",
	"tipologia":"",
	"localizacao":"",
	"dimensoes":"",
	"outrasDimensoes":"",
	"conjunto":0,
	"elementosConjunto":"",
	"elementosAcessorios":"",
	"marcasAutoria":"",
	"marcasMontagem":"",
	"marcasConstrucao":"",
	"classificacaoPatrimonial":"",
	"estilo":"",
	"epoca":"",
	"qualidade":"",
	"estruturaMaterial":"",
	"superficieMaterial":"",
	"tecnicaEstrutura":"",
	"tecnicaSuperficie":"",
	"descricao":"",
	"analogias":"",
	"conclusoes":"",
	"autoria":"",
	"datacao":"",
	"localOrigem":"",
	"condicoesAmbientais":""
  }
]
```
### GET /api/imagens
#### Lista todas as imagens
```jsonc
[
  {
	  {"idImagem":1,
	  "imagem":"imgColuna1.jpg",
	  "tipo":"fotografia",
	  "formato":"JPEG",
	  "referencia":"Nikon 3300",
	  "documentacao":"Capitel e pormenores (CD) | Análises estratigráficas (CD)",
	  "objeto":1
	  },
	  {
	  "idImagem":2,
	  "imagem":"grafColuna1.jpg",
	  "tipo":"grafico",
	  "formato":"JPEG",
	  "referencia":"Nikon 3300",
	  "documentacao":"FTIR",
	  "objeto":1
	  },
	  {
	  "idImagem":3,
	  "imagem":"PianoBrincar.png",
	  "tipo":"fotografia",
	  "formato":"PNG",
	  "referencia":"",
	  "documentacao":"",
	  "objeto":2
	  },
	  {
	  "idImagem":4,
	  "imagem":"EstanteMissal.png",
	  "tipo":"fotografia",
	  "formato":"PNG",
	  "referencia":"",
	  "documentacao":"",
	  "objeto":3
	  },
	  {
	  "idImagem":5,
	  "imagem":"Gaiola.png",
	  "tipo":"fotografia",
	  "formato":"PNG",
	  "referencia":"",
	  "documentacao":"",
	  "objeto":4
	  },
	  {
	  "idImagem":6,
	  "imagem":"GuardaJoias.png",
	  "tipo":"fotografia",
	  "formato":"PNG",
	  "referencia":"",
	  "documentacao":"",
	  "objeto":5
	  },
	  {
	  "idImagem":7,
	  "imagem":"OratorioPolicromado.png",
	  "tipo":"fotografia","formato":"PNG",
	  "referencia":"",
	  "documentacao":"",
	  "objeto":6
	  },
	  {
	 "idImagem":8,
	 "imagem":"SacrarioDouradoPolicromado.png",
	 "tipo":"fotografia",
	 "formato":"PNG",
	 "referencia":"",
	 "documentacao":"",
	 "objeto":7
	 },
	 {
	 "idImagem":9,
	 "imagem":"UrnaSantissimo.png",
	 "tipo":"fotografia",
	 "formato":"PNG",
	 "referencia":"",
 	 "documentacao":"",
	 "objeto":8
	 }
  }
]
```

### GET /api/objetos/{id}/imagens
#### Mostra a imagem que esta definida para aquele id do objeto
#### Por exemplo se o id for 2 irá retornar o seguinte output:
```jsonc
[
  {
	"idImagem":3,
	"imagem":"PianoBrincar.png",
	"tipo":"fotografia",
	"formato":"PNG",
	"referencia":"",
	"documentacao":"",
	"objeto":2
  }
]
```
### GET /api/objetos/{id}/interessados
#### Mostra a lista de interessados de um certo objeto
#### Por exemplo se o id for 1 irá retornar o seguinte output:
```jsonc
[
  {
	{"idInteressado":1,
	"enderecoPostal":"Coimbra",
	"enderecoEletronico":"Sem informação",
	"contacto":"Sem informação",
	"tipo":"Proprietário"
	},
	{
	"idInteressado":2,
	"enderecoPostal":"Lisboa",
	"enderecoEletronico":"Sem informação",
	"contacto":"Sem informação",
	"tipo":"Salvador Sanchez"
	},
	{
	"idInteressado":3,
	"enderecoPostal":"Não se aplica",
	"enderecoEletronico":"Não se aplica",
	"contacto":"Não se aplica",
	"tipo":"Mecenas"
	}
  }
]
```

### GET /api/objetos/{id}/ciclosclimatericos
#### Mostra os ciclos climatéricos de um objeto dado o seu id
#### Por exemplo se o id for 1 irá retornar o seguinte output:
```jsonc
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
### GET /api/objetos/{id}/fontes
#### Mostra as fontes de um objeto dado o seu id
#### Por exemplo se o id for 1 irá retornar o seguinte output:
```jsonc
[
  {
	"idFonte":1,
	"fonte":"Não se aplica",
	"tipo":"NA",
	"localizacao":"NA",
	"cota":"NA",
	"dataConsulta":"1997-01-01T00:00:00.000Z",
	"area":"Arquivísticas | Documentais",
	"objeto":1
	},
	{
	"idFonte":2,
	"fonte":"Não se aplica",
	"tipo":"NA",
	"localizacao":"NA",
	"cota":"NA",
	"dataConsulta":"1997-01-01T00:00:00.000Z",
	"area":"Iconográficas",
	"objeto":1
	},
	{
	"idFonte":3,
	"fonte":"CRUZ, João – Métodos de Exame e Análise – Espectroscopia de infravermelho, Tomar (2015/2016); pp 4-8",
	"tipo":"NA",
	"localizacao":"NA",
	"cota":"NA",
	"dataConsulta":"1997-01-01T00:00:00.000Z",
	"area":"Bibliográficas",
	"objeto":1
	},
	{
	"idFonte":4,
	"fonte":"Não se aplica",
	"tipo":"NA",
	"localizacao":"NA",
	"cota":"NA",
	"dataConsulta":"1997-01-01T00:00:00.000Z",
	"area":"Eletrónicas",
	"objeto":1
	},
	{
	"idFonte":5,
	"fonte":"Não se aplica",
	"tipo":"NA",
	"localizacao":"NA",
	"cota":"NA",
	"dataConsulta":"1997-01-01T00:00:00.000Z",
	"area":
	"Outras Fontes",
	"objeto":
	}
  }
]
```
### GET /api/objetos/{id}/poluicao
#### Isto mostra a poluição de um objeto atraves do id
#### Se o id for 1 irá devolver o seguinte output:
```jsonc
[
  {
"idPoluicao":1,
"agente":"Sendo uma coluna pertencente a um restauro, é possível que estivesse inserida num espaço litúrgico, estando exposta a poeiras e fumos. Pertence possivelmente a um retábulo desmantelado, tendo percorrido um longo caminho até ao local atual, devendo por isso ter passado por alterações bruscas de temperatura e humidade relativa.",
"fonte":"Em relação às poeiras e fumos, provavelmente, teriam origem em velas ou devido ao contacto com pessoas do exterior.",
"resultados":"O contacto com estes agentes degradadores, em especial, às alterações de temperatura e humidade, levaram ao aparecimento de lacunas, tanto ao nível da camada policroma como de preparação. Assim como levaram à perda de coesão da camada de preparação, tornando-se pulverulenta.",
"observacoes":"Deve-se evitar ao máximo coloca-la perto de fontes de calor, como velas, fogueiras ou materiais quentes, assim como evitar transições bruscas de temperatura e humidade, de maneira a que a sua degradação não seja acelerada, levando ao aparecimento de danos e patologias no objeto.",
"objeto":1
  }
]
```

### GET /api/objetos/{id}/iluminacao
#### Isto mostra a iluminacao de um objeto atraves do id
#### Se o id for 1 irá devolver o seguinte output:
```jsonc
[
  {
	{
	"idIlumicao":1,
	"fonte":"Desconhecido",
	"iluminancia":"Desconhecido",
	"UVmedido":"Desconhecido",
	"UVreal":"Desconhecido",
	"tipo":"natural",
	"objeto":1
	},
	{
	"idIlumicao":2,
	"fonte":"Desconhecido",
	"iluminancia":"Desconhecido",
	"UVmedido":"Desconhecido",
	"UVreal":"Desconhecido",
	"tipo":"artificial",
	"objeto":1
	}
  }
]
```

### GET /api/objetos/{id}/pedidosintervencao
#### Isto mostra os pedidos de intervenção de um objeto atraves do id
#### Se o id for 1 irá devolver o seguinte output:
```jsonc
[
  {
	"idPedido":1,
	"tipo":"O proprietário deixou este campo sob a responsabilidade de quem fosse realizar a intervenção.",
	"aspetos":"Não se aplica",
	"objeto":1
  }
]
```

### GET /api/objetos/{id}/conservacoes
#### Isto mostra as conservações de um objeto através do id
#### Se o id for 1 irá devolver o seguinte output:
```jsonc
[
  {
  	{
	"idConservacao":1,
	"tipo":"Deterioração Física, Química e Mecânica dos Materiais",
	"estado":"Alterabilidade: decorrente de envelhecimento natural|Alteração: decorrente de fatores físicos, químicos, biológicos e antrópicos",
	"estrutura":"O suporte da coluna encontra-se em bom estado de conservação. Não revela fragilidade nem falta de coesão. O local onde o seu estado poderá ser classificado como pior é a zona do capitel uma vez que há lacunas de suporte. O suporte do corpo da coluna apenas revela perfurações/cortes que se julgam ser de uma serra elétrica.",
"superficie":"A superfície da coluna encontra-se em mau estado de conservação. Esta é constituída por policromia e repolicromia repinte e ambas se encontram em mau estado de conservação, não só por falta de coesão das camadas de preparação como houve degradação das condições químicas e físicas de maior parte da policromia. Para além disso existem lacunas tanto a nível da camada policroma como da camada de preparação.",
"elementos":"A coluna tem como acessórios elementos constituídos materialmente por madeira (frisos) e elementos metálicos (pregos e elementos decorativos em bronze)O estado de conservação dos frisos é médio, isto é, encontram-se com várias lacunas de suporte, porém a estrutura que ainda se mantem não revela problemas a nível físico ou químico.Os elementos metálicos encontram-se em mau estado de conservação uma vez que todos eles se encontram oxidados.",
"observacoes":"O que se pode concluir em relação ao estado de conservação da obra é que este é mau. Apesar do suporte relevar bom estado tudo o resto não se assemelha, o que dificulta a leitura artística da obra, dificultando então a sua intervenção.",
"objeto":1
	},
	{
	"idConservacao":2,
	"tipo":"Deterioração Biológica dos Materiais",
	"estado":"Identificação de Patologias e Agentes de Biodeterioração – Diagnóstico",
	"estrutura":"Não releva qualquer tipo de atividade biologia, ativa ou não ativa (anterior).",
	"superficie":"Não releva qualquer tipo de atividade biologia, ativa ou não ativa (anterior).",
	"elementos":"Não releva qualquer tipo de atividade biologia, ativa ou não ativa (anterior).",
	"observacoes":"O que se pode concluir em relação ao estado de conservação da obra é que este é mau. Apesar do suporte relevar bom estado tudo o resto não se assemelha, o que dificulta a leitura artística da obra, dificultando então a sua intervenção.",
	"objeto":1
  }
]
```

### GET /api/propostasintervecao
#### Mostra todas as propostas de intervecão
```jsonc
[
  {
	"idProposta":1,
	"tipo":"Conservação | Restauro",
	"dataProposto":null,"dataAceite":null,
	"interlecutoresIPT":"Fernando Antunes (IPT) LCRM CEARC | Beatriz Penas, Leonor Miranda",
	"interlecutoresCliente":"",
	"objeto":1
  }
]
```
### GET /api/intervencoes
#### Mostra a lista de todas as intervencoes
```jsonc
[
  {"idIntervencao":1,
  "tipo":"Conservação | Restauro","intervencao":"Estrutura | Suporte:No suporte propõe-se apenas a limpeza superficial, com água, e remoção de adesivos antigos.Remoção da massa oleica que se encontra na zona inferior da coluna.Preenchimentos das lacunas devido à serra elétrica, através do entalhamento da madeira de cerejeira.",
  "recursos":"Para a limpeza prevê-se o uso de um pano humedecido em água.Na remoção do adesivo usar-se-á água para o seu amolecimento e o bisturi para a sua remoção.O bisturi será também usado para remover a massa oleica.",
  "estado":"proposto",
  "proposta":1
  }
]
```
### GET /api/objetos/{id}/intervencoes
#### Mostra as intervencoes de um objeto dado o seu id
#### Se o seu id for 1 resulta do seguinte output:
```jsonc
[
	{
"idIntervencao":1,
"tipo":"Conservação | Restauro",
"intervencao":"Estrutura | Suporte:No suporte propõe-se apenas a limpeza superficial, com água, e remoção de adesivos antigos.Remoção da massa oleica que se encontra na zona inferior da coluna.Preenchimentos das lacunas devido à serra elétrica, através do entalhamento da madeira de cerejeira.",
"recursos":"Para a limpeza prevê-se o uso de um pano humedecido em água.Na remoção do adesivo usar-se-á água para o seu amolecimento e o bisturi para a sua remoção.O bisturi será também usado para remover a massa oleica.",
"estado":"proposto",
"proposta":1
	}
]
```
### GET /api/objetos/exames
#### Mostra os exames.
```jsonc
[
	{
	"idExame":1,
	"objetivos":"Identificação de materiais, técnicas e tecnologias de produção. Identificação de intervenções efectuadas no objecto. Caracterização do estado de conservação. Identificação de patologias e agentes de biodeterioração. Datação do objecto e das eventuais intervenções que tenha sido alvo. Ensaio de produtos e materiais a empregar na intervenção","interpretacaoResultados":"Em relação aos materiais, apenas se sabe com certeza a do tronco da madeira, de nogueira, e dos restauros antigos nos capitéis, de cerejeira. Em relação ao capitel, pensasse ser de choupo, afusélia ou marupa, havendo maior probabilidade de ser a ultima.As análises realizadas levaram a várias conclusões. O FTIR revelou que a camada de preparação é constituída por gesso, podendo ser por isso que se encontra pouco coesa e pulverulenta.Com as análises estratigráficas, pretendeu-se distinguir policromias originais, de repolicromias e repintes. A amostra 1 representa uma repolicromia, estando um azul escuro sobre um azul, original, de cor mais clara. Com a amostra 2, havia uma espectativa de estar presente preparação, bollus, ouro e purpurina, assim como vários azuis, o que se comprovou pela análise estratigráfica, sendo que o azul mais escuro aparenta estar sobre o azul mais claro, sendo por isso um repinte. Em relação à amostra 3, pensava-se ser o branco original, não só por estar mais amarelecido que os restantes brancos, mas porque era naquela localização que se encontravam os apliques metálicos, não havendo preocupação numa situação de repolicromia ou repinte, em retira-los. Sobre a superfície são visíveis várias cores, podendo estas ser sujidades ou pigmentos. A amostra 4 pode trazer alguma confusão, pois sobre a camada de preparação, bollus e ouro, é visível pigmento brancos. Este aparece apenas em algumas zonas, pois a amostra foi retirada de uma zona próxima aos frisos, que eram dourados. Aquando do douramento, a zona que levaria a policromia ficou com bollus e ouro por baixo, que foi depois pintada com branco. Na amostra 5 é visível a camada de preparação, branco e vários azuis na superfície. Isto comprova a teoria inicial, de que a superfície seria a imitar lápis lazúli. O branco sujo, na mesma zona, seria um repinte. A amostra 6, será a de um azul original, já muito desvanecido, pois sendo que aparece na parte de trás da coluna, não havia preocupação em fazer uma repolicromia ou um repinte. A recolha da amostras 7, assim como da amostras 7A seria de modo a comparar as massas de vidreiro presentes nos dois locais, mas apresentaram-se completamente diferentes. Na amostras 7, são visíveis 5 estratos: preparação branca, bollus, ouro, outro branco (possivelmente preparação) e purpurina. Observam-se também tons esverdeados, que segundo o Doutor Vítor Gaspar, se trata da oxidação da purpurina. A amostra 7A relevou-se completamente diferente, aparentando apenas a massa de vidreiro ser mais grossa, mas revelando-se um material completamente diferente à 7. É visível uma preparação branca, uma camada grossa de massa de vidreiro e purpurina, estando esta também esverdeada devido à oxidação da mesma.","conclusoes":"Devido à análise das estratigrafias, chegou-se à conclusão que a policromia original, seria azul e branca, de modo a imitar lápis lazúli, excluindo-se a hipótese de marmoreado.De acordo com as análises estratigráficas, foi decidida a maneira com se iria intervir na coluna neoclássica. Ficou decidido que as repolicromias seriam mantidas, sendo que geralmente, e no próprio caso, como é o da amostra 1, têm um maior valor artístico assim como são de uma maior qualidade técnica, pois seguem os mesmo procedimentos que o original. Em relação aos repintes, foi decidido o contrário, apresentando-se os mesmos, especialmente os brancos, com fraca qualidade, assim já com grandes problemas, estando bastante envelhecidos. A massa oleica será também retirada, não tendo nenhuma ligação com o resto da coluna, em termos estéticos, nem tem nenhuma função especifica.Em relação ao original, claro está, que se decidiu manter, podendo proceder-se apenas a uma consolidação de maneira a que a sua degradação não fosse acelerada, em grande parte devido à pulverulência da camada de preparação.",
	"objeto":1
	}
]
```

### GET /api/exames/{id}/testes
#### Mostra os exames dado o seu id
#### Se o seu id for 1 mostra o seguinte output:
```jsonc

[
	{
	"idTeste":1,
	"referecia":"Observação á vista desarmada",
	"localizacao":"Corpo da coluna e capitel",
	"objetivosEspecificos":"Identificação dos materiais",
	"resultados":"Confirmação do uso de folha de ouro, purpurina, massa oleica, camada de preparação de gesso ou cré, policromia.",
	"data":"2017-02-21T00:00:00.000Z",
	"exame":1,
	"tecnico":1
	}
]
```

### GET /api/tecnicos/{id}/testes
#### Mostra os testes feitos por um tecnico dado o seu id
#### Se o seu id for 1 mostra o seguinte output:
```jsonc

[
	{
	"idTeste":1,
	"referecia":"Observação á vista desarmada",
	"localizacao":"Corpo da coluna e capitel",
	"objetivosEspecificos":"Identificação dos materiais",
	"resultados":"Confirmação do uso de folha de ouro, purpurina, massa oleica, camada de preparação de gesso ou cré, policromia.",
	"data":"2017-02-21T00:00:00.000Z",
	"exame":1,
	"tecnico":1
	}
]
```

### GET /api//objetos/{id}/documentacao
#### Mostra a documentação de um objeto
#### Se o seu id for 1 mostra o seguinte output:
```jsonc

[
	{
		{
		"idDocumentacao":1,
		"designacao":"Não identificados. Não se sabe nada sobre a história do objeto, como proveniência e local de origem.",
		"referencias":"NA",
		"autor":"NA",
		"tipo":"Originais Fotográficos",
		"objeto":1
		},
		{
		"idDocumentacao":2,
		"designacao":"Exame de FTIR",
		"referencias":"Ver anexo digital em CD.",
		"autor":"Dr. Vitor Gaspar; Beatriz Penas; Leonor Miranda",
		"tipo":"Documentação Gráfica",
		"objeto":1
		},
		{
		"idDocumentacao":3,
		"designacao":"Foi feita a análise estratigráfica. A análise estratigráfica consiste na observação microscópica, de amostras, que revelam os diferentes estratos, resultantes da aplicação de novas camadas de preparação e consequentemente, de camadas policromas (repolicromias ou repintes) e ainda, dos seus materiais.Exame de espectroscopia de absorção de infravermelho com transformada de Fourier (FTIR). É feito através de diferentes conjuntos de átomos que vibram de forma diferente. Aos diferentes conjuntos de átomos correspondem transições vibracionais com diferentes energias. Quando as moléculas são expostas a uma fonte de radiação infravermelha, estas absorvem a energia que corresponde à transições vibracionais apresentadas pelos seus grupos constituintes. O conjunto de absorções apresentadas pelas moléculas permite a identificação dos grupos constituinte das mesmas.",
		"referencias":"Ver anexo digital em CD.",
		"autor":"Dr. Victor Gaspar;Beatriz penas;Leonor Miranda.",
		"tipo":"Exames e Análises",
		"objeto":1
		}
	}
]
```

### GET /api/analisesSolventes/{id}/testesSolvente
#### Mostra os testes de uma analise dado o seu id
#### Se o seu id for 1 mostra o seguinte output:
```jsonc

[
	{
	"idTeste": 1,
	"solvente":"Decapante lavável E-013-0070",
	"eficacia": 2,
	"observacao":"Marca: Robbialac | Descrição química: Diclorometano Metanol | Optou-se por um decapante em gel para apenas atuar a superfície, não chegando aos substratos inferiores.Deixou-se a atuar durante dez minutos, sendo removido com água/alcool embebidos num cotonete.",
	"analise": 1 
	}
]
```

### GET api/analisesSolventes
#### Mostra a lista de analise de solventes
```jsonc

[
	{
	"idAnalise":1,
	"sujidade":"Repintes",
	"data":"1970-01-01T00:00:00.000Z",
	"caracteristicas":"Devido à dificuldade na remoção de repintes de forma mecânica, foi testado o decapante para facilitar a sua extração",
	"tecnico":1,
	"objeto":1
	}
]
```

### GET api/objetos/{id}/analisesSolventes"
#### Mostra analises de solventes de um objeto pelo id do objeto.
#### Se id for 1 irá mostrar o seguinte output:
```jsonc

[
	{
	"idAnalise": 1,
	"sujidade":"Repintes",
	"data":"1970-01-01T00:00:00.000Z",
	"caracteristicas":"Devido à dificuldade na remoção de repintes de forma mecânica, foi testado o decapante para facilitar a sua extração",
	"tecnico": 1,
	"objeto": 1
	}
]
```

### GET api/tecnicos/{id}/analisesSolventes"
#### Mostra analises de solventes de um tecnico pelo id do tecnico.
#### Se id for 1 irá mostrar o seguinte output:
```jsonc

[
	{
	"idAnalise": 1,
	"sujidade":"Repintes",
	"data":"1970-01-01 T00:00:00:000",
	"caracteristicas":"Devido à dificuldade na remoção de repintes de forma mecânica, foi testado o decapante para facilitar a sua extração",
	"tecnico": 1,
	"objeto": 1
	}
]
```

### GET api/objetos/{id}/intervencoesanteriores"
#### Mostra as intervenções anterioes que um objeto esteve sujeito dado o seu id.
#### Se id for 1 irá mostrar o seguinte output:
```jsonc

[
	{
	"idIntervencao":1,
	"estrutura":"Desmontagem do capitel. O capitel foi entalhado num bloco separado, que se une à coluna através de uma ligação simples (macho-fêmea), essa fixação é reforçada com adesivo.Foram colocados blocos de madeira nos locais de lacuna de suporte do capitel. O seu entalhe foi iniciado, porém não foi finalizado.",
	"superficie":"Foram realizadas repolicromia e repintes anteriormente. Também foi colocada massa oleica numa das faces na zona inferior o motivo é desconhecido. Em alguns dos casos foram usadas purpurinas para substituir a falta de folha de ouro, de uma forma mais económica.",
	"elementos":"Os frisos de madeira foram retirados do corpo da escultura e os elementos metálicos também.",
	"observacoes":"Os restauros anteriores observam-se sobretudo a nível da superfície. Maior parte dos restauros anteriores, ao nível de policromia, verificaram-se incoerentes, uma vez que não respeitam de qualquer modo a policromia original. Tudo isto muda a sua leitura a nível artístico.",
	"objeto":1
	}
]
```




