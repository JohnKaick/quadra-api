const db = require('database')
const sidCache = require('helpers/sid')

module.exports.getMany = async function (req, rep) {    
    try {
        let model = await db.Jogo.forge().fetchAll()
        rep(model)
    } catch (error) {
        rep.badImplementation(error)
    }  
    
}

module.exports.create = async function (req, rep) {
    try {
        let model = await db.Jogo.forge({
            nome: req.payload.nome,
            endereco: req.payload.endereco,
            bairro: req.payload.bairro,
            preco: req.payload.preco,
            dia: req.payload.dia,
            horario: req.payload.horario,
            telefone: req.payload.telefone,
            responsavel: req.payload.responsavel,
            obs: req.payload.obs,
            created_at: req.payload.created_at
        }).save()
        rep(model)
    } catch (error) {
        rep.badImplementation(error)
    }
}