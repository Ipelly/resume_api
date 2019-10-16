'use strict'

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/route.core')

class App {
    constructor(){
        this.express = express();
        this.middleware();
        this.routes();
    }

    middleware(){
        this.express.use(express.static(__dirname + '/static'));
        this.express.use('/docs', express.static('docs'));

        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({
            extended : false
        }));
    }
    
    routes() {
        this.express.use(router);
    }
}

module.exports = new App().express;