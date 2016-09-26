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
  Activity.create({ type: activity.type, 
                    duration: activity.duration, 
                    intensity: activity.intensity}, 
    function(err, record) {
      if (err) {
        console.log(err);
        res.json({
          'success': false, 
          'message': err.message
        });
      }
      console.log(record.getDescription());
      res.json({
        'success': true, 
        'activity': record
      });
  });
});

module.exports = router;

