//modules



//export
module.exports = function(app, con, verificaLogin, verificaLoginAdmin) {

    //método que permite criar uma Análise
    app.post('/analisesSolventes/new', function(req, res){

        //dados recebidos
        let sujidade = req.body.sujidade
        let data = req.body.dataAnalise
        let caracteristicas = req.body.caracteristicas
        let tecnico = req.body.tecnico
        let peca = req.body.peca

        if(sujidade, data, caracteristicas, tecnico, peca){
            sql0 = 'start transaction'
            sql1 = 'insert into analisesSolventes (sujidade, data, caracteristicas, tecnico, peca) values(?,?,?,?,?)'
            con.query(sql0+';'+sql1,[sujidade, data, caracteristicas, tecnico, peca], function(error, results, fields){
                if(error){
                    console.log(error)
					con.query('rollback')
					res.send("Erro ao adicionar análise")
					res.end()
                }
                else{
                    con.query('commit')
					res.send("Sucesso")
					res.end()
                }
            })
        }
        else{
            res.send("Dados incompletos")
			res.end()
        }

    })

    //método que permite criar um Teste
    app.post('/testesSolvente/new', function(req, res){

        //dados recebidos
        let solvente = req.body.solvente
        let analise = req.body.analise
        let grau = req.body.eficacia
        let obs = req.body.obs

        if(solvente, analise, grau, obs){
            sql0 = 'start transaction'
            sql1 = 'insert into testesSolvente (solvente, eficacia, observacao, analise) values(?,?,?,?)'
            con.query(sql0+';'+sql1,[solvente, grau, obs, analise], function(error, results, fields){
                if(error){
                    console.log(error)
					con.query('rollback')
					res.send("Erro ao adicionar teste")
					res.end()
                }
                else{
                    con.query('commit')
					res.send("Sucesso")
					res.end()
                }
            })
        }
        else{
            res.send("Dados incompletos")
			res.end()
        }

    })

    //método que permite apagar uma análise
    app.post('/analisesSolventes/delete', function(req, res){

        sql0 = 'start transaction'
        sql1 = 'delete from testesSolvente where analise = ?'
        sql2 = 'delete from analisesSolventes where idAnalise = ?'
        con.query(sql0+';'+sql1+';'+sql2,[req.body.idAnaliseToDelete, req.body.idAnaliseToDelete], function(error, results, fields){
            if(error){
                console.log(error)
				con.query('rollback')
				res.send("Erro ao apagar análise")
				res.end()
            }
            else{
                con.query('commit')
				res.send("Sucesso")
				res.end()
            }
        })

    })

    //método que permite apagar um teste de uma análise
    app.post('/testesSolvente/delete', function(req, res){

        //let analise = req.body.analise;
        //let teste = req.body.teste;

        sql0 = 'start transaction'
        sql1 = 'delete from testesSolvente where analise = ? and idTeste = ?'
        con.query(sql0+';'+sql1,[req.body.analise, req.body.teste], function(error, results, fields){
            if(error){
                console.log(error)
				con.query('rollback')
				res.send("Erro ao apagar teste")
				res.end()
            }
            else{
                con.query('commit')
				res.send("Sucesso")
				res.end()
            }
        })

    })

}