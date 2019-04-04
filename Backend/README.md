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


