const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// to hide the database conection password in a local .env File
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION, console.log('connected to DB'));

// Setting up search Route
const artistSearchRoute = require('./routes/search');
app.use('/artists.search', artistSearchRoute);

// Setting up post  Route
const artistPostRoute = require('./routes/post');
app.use('/artists.post', artistPostRoute);

//runs localy on localhost:8080
app.listen(8080);
