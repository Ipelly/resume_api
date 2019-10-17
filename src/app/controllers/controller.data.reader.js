'use strict'

const url = require('url');
const querystring = require('querystring');
const config = require('../../config/config');
const logger = require('../../logger/app.logger')
const dataReaderService = require('../services/service.data.reader');

class ControllerDataReader {
    async getData(req, res){
        try{
            let answers = await dataReaderService.fetchAllAnswers();
            let parsedUrl = url.parse(req.url);
            let parsedQs = querystring.parse(parsedUrl.query);
            let ans = answers.find(o => o.type === parsedQs.q);
            
            // if(parsedQs.q === "Puzzle")  
            //     res.send(` ABCD \nA=><>\nB<=<<\nC>>=>\nD<><=`);
            if(parsedQs.q == undefined){
                res.send('OK');
            } else res.send(ans.answer);
        } catch (error) {
            logger.error(`ControllerDataReader - GetData: Not able to get the response. ${error}`)
            res.status(500).json(error);
        }
    }
}

module.exports = new ControllerDataReader();