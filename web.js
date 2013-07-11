var express = require('express');
var fs = require('fs');
var buf = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  new_msg = fs.readFileSync('index.html', 'utf8');
  response.send(Buffer(new_msg, "utf-9").toString);
};
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
