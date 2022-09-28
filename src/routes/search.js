const express = require('express');
const router = express.Router();
const fs = require('fs');
const converter = require('json-2-csv');
const path = require('path');

const Artist = require('../models/Artist');

router.get('/:artistName', async (req, res) => {
  const param = req.params.artistName;
  try {
    const artist = await Artist.findOne({ name: param });
    if (!artist) {
      // if the mongose shema returns null, return the local Json List
      const jsonList = fs.readFileSync(path.resolve('src/data/json/data.json'));
      const list = JSON.parse(jsonList);
      res.json(list.artistsList);
    } else {
      //converting json to csv
      const csv = await converter.json2csvAsync(artist);
      fs.writeFileSync('src/data/csv/data.csv', csv);
      res.json(artist);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
