var express = require('express');
var router = express.Router();
var Activity = require('../models/activity');

/* GET home page. */
router.get('/', function(req, res, next) {
	Activity.find(function(err, activitiesList) {
		if (err) console.log(err);
		res.json({
			'activities': activitiesList
		});
	});
});

router.post('/', function(req, res, next) {
  activity = req.body;
  res.send("Implement this");
});

module.exports = router;

