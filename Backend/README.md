# Brandi-2018-2019-Turma-B
## Pasta Backend


<br/>O backend é um servidor que responde a pedidos do cliente
<br/>É utilizado nodeJS que envia os dados da base de dados em formato JSON
<br/>A tecnologia utilizada para a base de dados é MySQL

## Os webservices disponivies (até agora) são:

### GET /api/users


### recebe:

<br/> Nada

### devolve:

<br/>se com sucesso:
[{"idTecnico":1,"nome":"João Nunes","username":"joaon","password":"pass123","email":"jn@hotmail.com","tipo":"aluno","habilitacoes":"","nivelProfissional":0},{"idTecnico":2,"nome":"Edgar Oliveira","username":"edgaroli","password":"pass123","email":"eo@hotmail.com","tipo":"aluno","habilitacoes":"","nivelProfissional":0},{"idTecnico":3,"nome":"Hélder Lopes","username":"hellopes","password":"pass123","email":"hl@hotmail.com","tipo":"aluno","habilitacoes":"","nivelProfissional":0},{"idTecnico":4,"nome":"Miguel Tomé","username":"mtome","password":"pass123","email":"mt@hotmail.com","tipo":"aluno","habilitacoes":"","nivelProfissional":0},{"idTecnico":5,"nome":"David Moreno","username":"dmoreno","password":"pass123","email":"dm@hotmail.com","tipo":"aluno","habilitacoes":"","nivelProfissional":0},{"idTecnico":6,"nome":"Diogo Ribeiro","username":"dribeiro","password":"pass123","email":"dr@hotmail.com","tipo":"aluno","habilitacoes":"","nivelProfissional":0},{"idTecnico":7,"nome":"André Fronteira","username":"afronteira","password":"pass123","email":"af@hotmail.com","tipo":"aluno","habilitacoes":"","nivelProfissional":0}]

<br/>se id inválido:
{"erro":"User not found"}


### POST /api/auth

### recebe:

<br/> username - nome utilizado para se autenticar
<br/> password- password do utilizador para se autenticar

### devolve

<br/>se com sucesso:
<br/>não devolve erro

<br/>se sem sucesso:
<br/>"Incorrect Username and/or Password!"
