var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var file_buf = fs.readFileSync("index.html");
  var text_file = file_buf.toString();
  response.send(text_file);
  /*response.send('Hello World 2!');*/
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
