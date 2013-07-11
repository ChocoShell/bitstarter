var express = require('express');
var fs = require('fs');
var buf = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  new_msg = fs.readFile('index.html');
  response.send(buf.toString(new_msg));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
