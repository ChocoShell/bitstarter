var express = require('express');
var fs = require('fs');
var buf = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var new_msg = fs.readFileSync('index.html', 'utf8');
  var buffer = new Buffer(new_msg, "utf-8");
  response.send(buffer.toString);
};
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
