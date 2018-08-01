const db = require('database')

module.exports.translate = async function (sid, tabela) {
    if (!sid) {
        return null
    }
    try {
        let model = await db[tabela].query((qb) => {
            qb.where('sid', sid)
        }).fetch({
            columns: ['id']
        })
        if (!model) return null        
        return model.id
    } catch (error) {
        return null
    }
}