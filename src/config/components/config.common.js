
'use strict'

const config = require('config-yml');

function getConfigVars() {
    let configVars;
    //console.log(`process.env.ENV_NAME ${process.env.ENV_NAME}`);
    switch (process.env.ENV_NAME.trim()) {
        case 'development':
            configVars = config.development;
            break;
        case 'test':
            configVars = config.test;
            break;
        case 'test':
            configVars = config.production;
            break;
        default:
            console.log('Config Common : Node_Env variable has not been set up. Node_ENV : ' + process.env.ENV_NAME + '.')
    }
    return configVars;
}

let configVars = {
    getConfigVars
}

module.exports = configVars;