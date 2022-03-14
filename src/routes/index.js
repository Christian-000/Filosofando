const quoteControllers = require('../controllers/index');
const express = require('express');

const router = express.Router();

router.get('/get/all', quoteControllers.getAllQuotes);
router.get('/get/:author', quoteControllers.getQuotesByAuthor);

//PRIVATE ENDPOINTS
router.post('/add', quoteControllers.adminAuth, quoteControllers.addQuote);

router.delete('/del/:id', quoteControllers.adminAuth, quoteControllers.deleteQuote);

module.exports = router;