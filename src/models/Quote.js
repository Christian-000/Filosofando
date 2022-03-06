const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const philosophyQuote = new Schema({
    quote: {type: String},
    author: {type: String}
})

module.exports = Quote = mongoose.model('Quote', philosophyQuote);