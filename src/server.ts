var express = require('express');
var app = express();
var cors = require('cors');
var mongoose = require('mongoose');

require('dotenv').config();

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file';
}

//mongoose.connect(process.env.MONGO_URI, process.env.MONGO_OPTION);

app.use(cors());

require('./routes')(app);

app.listen(3001);
console.log('Listening on http://localhost:3001');
