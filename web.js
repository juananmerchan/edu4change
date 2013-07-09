var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var homepage = fs.readFileSync('index.html');
var buf = new Buffer(homepage);                                              
buf.toString('utf8', 0, buf.length);                                  
});              

app.get('/', function(request, response) {
  response.send(buf);
  //response.end('Hi there!');
  /*fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }*/       
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
