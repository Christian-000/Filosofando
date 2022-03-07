const quoteControllers = require('../controllers/index');
const express = require('express');

const router = express.Router();

router.get('/all', quoteControllers.getAllQuotes);

router.post('/add', quoteControllers.addQuote);

router.delete('/del/:id', quoteControllers.deleteQuote);

module.exports = router;