var express = require('express');
var router = express.Router();
var Activity = require('../models/activity');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Implement this.
});

router.post('/', function(req, res, next) {
  activity = req.body;
  res.send("Need to implement this");
});

module.exports = router;

