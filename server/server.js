var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 8080);
app.use(express.static('client'));

app.get("/", function(req, res){
    res.sendFile("index.html");
});

// Starts the server.
server.listen(8080, function() {
  console.log('Starting server on port 8080');
});
