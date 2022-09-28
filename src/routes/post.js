const express = require('express');
const router = express.Router();

const Artist = require('../models/Artist');

router.post('/', async (req, res) => {
  const data = req.body;

  //  creating new Artist from the Request Body
  const artist = new Artist({
    name: data.name,
    url: data.url,
    image_small: data.image_small,
    image: data.image,
  });

  // saving Artist to Database
  try {
    const saveArtist = await artist.save();
    res.json(saveArtist);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
