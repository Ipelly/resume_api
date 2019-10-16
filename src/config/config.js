'use strict'


const evnVars = require('./components/config.env');
const logger = require('./components/config.logger');
const config = Object.assign(
    {}, evnVars, {logger}
);

module.exports = config;