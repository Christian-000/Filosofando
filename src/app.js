const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));

app.set('port', process.env.PORT || 3001)

export default app;