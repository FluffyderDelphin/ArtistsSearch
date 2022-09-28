const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// to hide the database conection password in a local .env File
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION, console.log('connected to DB'));

const artistSearch = require('./routes/search');

//runs localy on localhost:8080
app.listen(8080);
