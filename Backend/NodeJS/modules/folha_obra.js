//modules
var session = require('express-session')
//export
module.exports = function(app, con, verificaLogin, verificaLoginAdmin) {
	//metodo que permite consultar a lista de processos obra de um objeto
 	app.get("/pecas/:id/procedimentos", verificaLogin, (request, response) => {
		let sql1 = "select * from procedimentos where peca = ?"
		// request.params.id mapeia o :id que está no URL acima.
		con.query(sql1 , [request.params.id], (err, results) => {
			if (err) {
				responseres.status(500).json({ erro: "Erro na query" })
			} else {
				if (results.length == 0) {
					response.status(404).json({ erro: "Procedimentos não encontrados" })
				} else {					
					response.status(200).json(results)
					console.log(JSON.stringify(results,null,2))
				}
			}
		})
	})

	//metodo que permite consultar uma folha de obra
	app.get("/procedimento/:id", verificaLogin, (request, response) => {
		let json=[{
			idProcedimento: null,
			data : null,
			designacao:null,
			duracao:null,
			observacoes:null,
			peca: null,
			tecnico:null,
			materiais:[]
		}]
		let sql1 = "select * from procedimentos where idProcedimento = ?"
		let sql2 = "select * from materiais where procedimento=?"
		// request.params.id mapeia o :id que está no URL acima.
		con.query(sql1 , [request.params.id], (err, results) => {
			if (err) {
				console.log(err)
				response.status(500).json({ erro: "Erro na query" })
			} else {
				if (results.length == 0) {
					response.status(404).json({ erro: "Procedimento não encontrado" })
				} else {	
					console.log(results)				
					json[0].idProcedimento=results[0].idProcedimento
					json[0].data=results[0].data
					json[0].designacao=results[0].designacao
					json[0].duracao=results[0].duracao
					json[0].observacoes=results[0].observacoes
					json[0].peca=results[0].peca
					json[0].tecnico=results[0].tecnico
					console.log(json)
					con.query(sql2, [request.params.id],(err,results2)=>{
						json[0].materiais=results2
						response.status(200).json(json)
						console.log(JSON.stringify(json,null,2))
					})
				}
			}
		})
	})
}