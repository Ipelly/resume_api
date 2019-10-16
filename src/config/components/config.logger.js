'use strict'


const joi = require('joi');
const config = require('config-yml');
const configVars = require('./config.common');


const envVarsSchema = joi.object({
    LOGGER_LEVEL   : joi.string().allow(['error','info','verbose','debug']).default('info'),
    LOGGER_ENABLED : joi.boolean().default(true),
    LOG_FILE_APP   : joi.string().default('logs/app.log'),
    HTTP_LOG_LEVEL : joi.string().allow(['combined','common','dev','disable'])
}).unknown().required();


const {
    error,
    value : envVars
} = joi.validate(configVars.getConfigVars().logger, envVarsSchema);

if(error) {
    console.error(`Logger : Config Varidation Error : ${error.message}`);
    process.exit(1);
}

let envVariables = {
    level : envVars.LOGGER_LEVEL,
    enabled : envVars.LOGGER_ENABLED,
    appLogFile : envVars.LOG_FILE_APP,
    httpLogLevel : envVars.HTTP_LOG_LEVEL
}

module.exports = envVariables;