const mongoose = require("mongoose");
const Quote = require("../models/Quote");

const getAllQuotes = (req, res) => {
  User.find((err, quotes) => {
    err && res.status(500).send(err.message);

    res.status(200).json(quotes);
  });
};

const addQuote = (req, res) => {
  let philoQuote = new Quote({
    quote: req.body.quote,
    author: req.body.author,
  });

  philoQuote.save((err, qt) => {
    err && res.status(500).send(err.message);

    res.status(200).json(qt);
  });
};


module.exports = {getAllQuotes, addQuote};