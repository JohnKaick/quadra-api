const start = require('./server')

start().then(server => {
    console.log('[SERVER] Started at: ', server.info.uri);
}).catch(err => {
    console.log('[SERVER] Error: ', err);
})