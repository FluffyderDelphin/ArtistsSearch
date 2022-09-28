const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// to hide the database conection password in a local .env File
require('dotenv/config');
