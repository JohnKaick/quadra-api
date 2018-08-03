require('app-module-path').addPath(__dirname)

const hapi = require('hapi')

const server = new hapi.server({
    host: 'localhost',
    port: 8000,
    routes: {
        cors: {
            origin: ["*"],
            headers: ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"],
            additionalHeaders: ['Access-Control-Allow-Origin']
        }
    }
})

server.register(require('structure/server.plugins'), async function (err) {
    if (err) {
      console.error('ERROR: ' + err)
    } else {
      await require('structure/server.routes')(server)
    }
  })

module.exports = server

