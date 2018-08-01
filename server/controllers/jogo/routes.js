const handlers = require('./handlers.js')

module.exports = [
    {
        path: '/api/jogo',
        method: 'GET',
        config: {
            handle: handlers.getMany,
            auth: false,
        }
    },
    {
        path: '/api/jogo',
        method: 'PUT',
        config: {
            handle: handlers.create,
            auth: false,
        },
    },
]