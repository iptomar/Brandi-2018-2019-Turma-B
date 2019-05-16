//modules
var session = require('express-session')
//export
module.exports = function(app, con, verificaLogin, verificaLoginAdmin) {
	//metodo que permite consultar a lista de processos obra de um objeto
 	app.get("/objetos/:id/processosObra", verificaLogin, (req, res) => {
		let sql1 = "select * from processosObra where objeto = ?"
		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql1 , [req.params.id], (err, results) => {
			if (err) {
				res.status(500).json({ erro: "Erro na query" })
			} else {
				if (results.length == 0) {
					res.status(404).json({ erro: "Folhas de obra não encontradas" })
				} else {					
					res.status(200).json(results)
					console.log(JSON.stringify(results,null,2))
				}
			}
		})
	})

	//metodo que permite consultar uma folha de obra
	app.get("/processosObra/:id", verificaLogin, (req, res) => {
		let json=[
		{
			numProcesso:null,
			designacao:null,
			procedimentos:[]
		}
		]
		let procedimentos={
			idProcedimento: null,
			data : null,
			designacao:null,
			duracao:null,
			observacoes:null,
			tecnico:null,
			materiais:[]
		}
		let sql1 = "select * from processosObra where numProcesso = ?"
		let sql2 = "select * from procedimentos where processoObra = ?"
		let sql3 = "select * from materiais where procedimento=?"
		// req.params.id mapeia o :id que está no URL acima.
		con.query(sql1+';'+sql2 , [req.params.id,req.params.id], (err, results) => {
			if (err) {
				console.log(err)
				res.status(500).json({ erro: "Erro na query" })
			} else {
				if (results[0].length == 0) {
					res.status(404).json({ erro: "Folha de obra não encontrada" })
				} else {					
					json[0].numProcesso=results[0].numProcesso
					json[0].designacao=results[0].designacao
					json[0].procedimentos=results[1]
					for (let i = 0; i < results[1].length; i++) {
						con.query(sql3, [results[1][i].idProcedimento],(err,results2)=>{
							for(let j=0; j<json[0].procedimentos.length; j++){
								console.log(i+"  "+j)
								if(json[0].procedimentos[j].idProcedimento===results[1][i].idProcedimento){
									console.log(results[1][i].idProcedimento)
									console.log(results2)
									json[0].procedimentos[j].materiais=results2
									if( i === results[1].length-1 && j===json[0].procedimentos.length-1){
										res.status(200).json(json)
										console.log(JSON.stringify(json,null,2))
									}
								}
							}
						})
					}
				}
			}
		})
	})
}