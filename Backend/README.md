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

