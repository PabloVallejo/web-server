var express = require('express');
var app = express();

// Respond to any GET request.
app.get('*', function(req, res) {
  res.json({
    status: 200,
  });
});

// Have the app listening on port 3000.
app.listen(3000, function () {
    console.log('Listening on port 3000!');
});