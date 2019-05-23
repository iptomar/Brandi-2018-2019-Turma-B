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
        let analise = req.body.analiseID
        let grau = req.body.grau
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

}