const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const indexRoutes = require('./routes/index');

const app = express();

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api', indexRoutes);

app.set('port', process.env.PORT || 3001)

module.exports = app;