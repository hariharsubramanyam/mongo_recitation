$(document).ready(function() {
  // Allow using Handlebars templates as partials as well.
  Handlebars.partials = Handlebars.templates;

  // We will insert new activities after this selector.
  var insertSelector = '#hours-table tr:last';

  // On document load, fetch the activities and display them.
  $.get('/activities', function(resp) {
    var html = Handlebars.templates.activity_items(resp);
    $(insertSelector).after(html);
  });

  // On submit button click, create the activity and display it.
  $('#submit-button').click(function() {
    alert("Need to implement this");
  });
});

