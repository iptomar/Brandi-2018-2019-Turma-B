# Pasta TestesBackend

## Testes.postman_collection.json

##### Este ficheiro permite a realização de testes sobre o Login e sobre os pedidos a /Users.

### Testes ao Login
##### Ligação é bem sucedida
```javascript
  pm.test("Ligação bem sucedida", function () { pm.response.to.have.status(200);});
```
##### Mensagem de erro está presente
```javascript
  pm.test("Mensagem de erro presente", function () { pm.response.to.have.body("Incorrect Username and/or Password!"); });
```
##### Mensagem de erro não está presente
```javascript
  pm.test("Mensagem de erro não presente", function () {pm.response.to.have.body("");});
```

### Testes ao pedido de um User
#### Ligação não encontrada - User não encontrado
```javascript
  pm.test("Ligação não encontrada", function () { pm.response.to.have.status(404);});
 ```  
#### Mensagem de erro encontrada - User não encontrado
 ```javascript
	pm.test("Mensagem de erro - Utilizador não encontrado", function () { pm.response.to.have.body({ "erro": "User not found"});});
```