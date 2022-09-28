const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('route works');
});

module.exports = router;
