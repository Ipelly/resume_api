'use strict'


const joi = require('joi');
const config = require('config-yml');

const configVars = require('./config.common');


const envVarsSchema = joi.object({
    NODE_ENV : joi.string().allow(['development','test','production']).required(),
    PORT : joi.number()
}).unknown().required();


const {
    error,
    value : envVars
} = joi.validate(configVars.getConfigVars().environment, envVarsSchema);

if(error) {
    console.error(`Env : Config Varidation Error : ${error.message}`);
    process.exit(1);
}

let envVariables = {
    env : envVars.NODE_ENV,
    port : envVars.PORT,
    isTest : envVars.NODE_ENV === 'test',
    isDevelopment : envVars.NODE_ENV === 'development'
}

module.exports = envVariables;