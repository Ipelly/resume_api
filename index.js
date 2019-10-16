/*const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.send('OK'))
  .get('/app', (req, res) => res.send('OK OK'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))*/


const http = require('http');
const app = require('./src/app/app');
const config = require('./src/config/config');
const logger = require('./src/logger/app.logger')
const server = http.createServer(app);

//const port = normalizePort(config.port);
const port = process.env.PORT || 5000
app.set('port', port);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val){
    let port = (typeof val === 'string') ? parseInt(val,10) : val;
    if(isNaN(port))         return val;
    else if ( port >= 0)    return port;
    else                    return false;
}

function onError(error) {
    if(error.syscall !== 'listen') throw error;

    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port' + port;

    switch (error.code) {
        case 'EACCES' :
            console.error(`${bind} require elevated privileges.`);
            process.exit(1);
            break;
        case 'EADDRINUSE' :
            console.error(`${bind} already in use.`);
            process.exit(1);
            break;
        default : 
            throw error;
    }   
}

function onListening() {
    //let addr = server.address();
    //let bind = (typeof port === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    logger.debug(`Process ID : ${process.pid}, Application Listening on ${port}.`);
}


module.exports = server;

