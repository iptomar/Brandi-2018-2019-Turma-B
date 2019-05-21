//modules



//export
module.exports = function(app, con, verificaLogin, verificaLoginAdmin) {

    //método que permite criar uma Análise
    app.post('/analisesSolventes/new', verificaLogin, function(req, res){

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
					response.send("Erro ao adicionar análise")
					response.end()
                }
                else{
                    con.query('commit')
					response.send("Sucesso")
					response.end()
                }
            })
        }
        else{
            response.send("Dados incompletos")
			response.end()
        }

    })

}