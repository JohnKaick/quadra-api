
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTableIfNotExists('jogo', function (table) {
          table.increments('id').primary()
          table.string('sid').notNullable().index()
          table.string('nome', 255)
          table.string('endereco', 255)
          table.string('bairro', 255)
          table.string('preco', 255)
          table.string('dia', 255)
          table.string('horario', 255)
          table.string('telefone', 255)
          table.string('responsavel', 255)
          table.string('obs', 510)
          table.string('created_by')
          table.dateTime('created_at')
      })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('jogo')
  ])
};