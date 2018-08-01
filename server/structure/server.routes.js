module.exports = function (server) {
    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: 'client/',
          redirectToSlash: true,
          index: true
        }
      },
      config: {
        auth: false
      }
    })
  
    server.route(require('controllers/jogo/routes'))
}