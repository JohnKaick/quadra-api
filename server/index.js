require('app-module-path').addPath(__dirname)

let opts = {}
opts.origin = opts.origin || ["*"]
opts.headers = opts.headers || ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"]
opts.additionalHeaders = opts.additionalHeaders || ['Access-Control-Allow-Origin']

const hapi = require('hapi')

const server = new hapi.Server({
    connections: {
        routes: {
            cors: {
                origin: opts.origin,
                headers: opts.headers,
                additionalHeaders: opts.additionalHeaders
            }
        }
    }
})

server.register(require('structure/server.plugins'), function (err) {
    if (err) {
      console.error('ERROR: ' + err)
    } else {
      require('structure/server.routes')(server)
    }
  })

server.connection({ port: process.env.PORT || 3000 })

module.exports = server

