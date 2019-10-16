'use strict'

const logger = require('../../logger/app.logger')

class ServiceDataReader {
    fetchAllAnswers(){
        try {
            let answers = require('../../../tool/answers.json');
            return answers;
        } catch (error) {
            logger.error(`ServiceDataReader - fetchAllAnswers : Not able to get the response. ${error}`)
            throw error;
        }
    }
}

module.exports = new ServiceDataReader();


