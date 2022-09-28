const express = require('express');
const router = express.Router();
const fs = require('fs');
const converter = require('json-2-csv');
const path = require('path');

const Artist = require('../models/Artist');

router.get('/:artistName/:filename', async (req, res) => {
  const artistParam = req.params.artistName;
  const filenameParam = req.params.filename;
  try {
    const artist = await Artist.findOne({ name: artistParam });
    if (!artist) {
      // if the mongose shema returns null, return the local Json List
      const jsonList = fs.readFileSync(path.resolve('src/data/json/data.json'));
      const list = JSON.parse(jsonList);
      res.json(list.artistsList);
    } else {
      //converting json to csv
      const csv = await converter.json2csvAsync(artist);
      //checks if there is already an csv with user provided filename
      if (!fs.existsSync(`src/data/csv/${filenameParam}.csv`)) {
        fs.writeFileSync(`src/data/csv/${filenameParam}.csv`, csv);
      } else {
        fs.appendFileSync(`src/data/csv/${filenameParam}.csv`, csv);
      }

      res.json(artist);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
