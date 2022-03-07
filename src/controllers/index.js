const mongoose = require("mongoose");
const Quote = require("../models/Quote");

const getAllQuotes = (req, res) => {
  Quote.find((err, quotes) => {
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

const deleteQuote = (req, res) => {
    let id = req.params.id;
    Quote.findByIdAndDelete(id, (err, qt) => {
        err && res.status(500).send(err.message);
        
        return res.json(qt)
    })

    return res.send("failed")
}

module.exports = {getAllQuotes, addQuote, deleteQuote};