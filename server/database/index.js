const knex = require('knex')({
    client: process.env.DB_DIALECT,
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    }
  })
  
const bookshelf = require('bookshelf')(knex)


bookshelf.JOgo = require('./models/jogo')(bookshelf)

module.exports = bookshelf