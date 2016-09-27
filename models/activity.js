var mongoose = require("mongoose");

var activitySchema = mongoose.Schema({
  /* Exercise 1: Declare schema here */
  type: String,
});

module.exports = mongoose.model("Activity", activitySchema);

