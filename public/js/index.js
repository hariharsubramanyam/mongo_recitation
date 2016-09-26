$(document).ready(function() {
  // Allow using Handlebars templates as partials as well.
  Handlebars.partials = Handlebars.templates;

  // We will insert new activities after this selector.
  var insertSelector = '#hours-table tr:last';

  // On submit button click, create the activity and display it.
  $('#submit-button').click(function() {
    // Create activity with POST request.
    $.post('/activities', {
        type: $('#type-input').val(),
        duration: $('#minutes-input').val(),
        intensity: $('#intensity-input').val()
    }, function(resp) {
      alert("Need to implement this!");
    });
  });
});

