const mongoose = require('mongoose');

// setting up Mongoose Shema, Id will be generated when posted to the Database
const ArtistsShema = mongoose.Schema({
  name: String,
  url: String,
  image_small: String,
  image: String,
});

module.exports = mongoose.model('Artists', ArtistsShema);
