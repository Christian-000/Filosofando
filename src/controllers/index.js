const mongoose = require("mongoose");
const Quote = require("../models/Quote");
const auth = require("basic-auth");
require('dotenv').config();

const getAllQuotes = (req, res) => {
  Quote.find((err, quotes) => {
    err && res.status(500).send(err.message);

    res.status(200).json(quotes);
  });
};

const getQuotesByAuthor = (req, res) => {
  let author = req.params.author;
  Quote.find({ author: author }, (err, qts) => {
    err && res.status(500).send(err.message);

    return res.json(qts);
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

    return res.json(qt);
  });
};

const adminAuth = async (req, res, next) => {
  const admin = await auth(req);
  const username = process.env.AUTH_USERNAME;
  const password = process.env.AUTH_PASSWORD;
  if (admin && admin.name === username && admin.pass === password) {
    next();
  } else {
    return res.status(401).send("Access denied");
  }
};

module.exports = {
  getAllQuotes,
  addQuote,
  deleteQuote,
  getQuotesByAuthor,
  adminAuth,
};
