'use strict'


const winston = require('winston');
const fs = require('fs');
const config = require('../config/config');
const logDir = 'logs'


// Create directory if not exists.

if( fs.existsSync(logDir)){
    fs.mkdirSync(logDir);
}

const transports = [
    new (winston.transports.Console)({
        colorize : true,
        level : config.logger.level,
        timestamp : true,
        silent : config.isTest,
        handleExceptions : true, 
        json: false
    })
]; 


if( !config.isDevelopment) {
    transports.push(new (winston.transports.file)({
        filename : config.logger.appLogFile,
        timestamp : true,
        silent : true,
        createDirectory : true,
        handleExceptions : true,
        colorize : false,
        json: false,
        maxFiles : 5,
        maxsize : 5242880
    }));
}

const logger = winston.createLogger({transports});

module.exports = logger;