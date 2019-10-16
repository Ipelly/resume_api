'use strict'

const express = require('express');
const dataReaderController = require('../controllers/controller.data.reader');
let router = express.Router();


router.get('/questionnaires',dataReaderController.getData);
router.get('/app', (req, res) => {
    res.send('OK');
});

module.exports = router;