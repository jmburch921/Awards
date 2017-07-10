
var express = require('express');
var webserver = express();
var port = process.env.PORT || 3002;
var path = require('path');

webserver.use("/css", express.static(__dirname + '/content/css'));

webserver.use("/img", express.static(__dirname + '/content/img/'));

webserver.use("/js", express.static(__dirname + '/content/js'));

webserver.use("/pages", express.static(__dirname + '/content/pages'));

webserver.get('/', function (req, res) {res.sendFile(path.join(__dirname + '/client/cdnIndex.html'));});
webserver.get('/home/', function (req, res) {res.sendFile(path.join(__dirname + '/client/cdnIndex.html'));});
webserver.get('/help/', function (req, res) {res.sendFile(path.join(__dirname + '/client/help.html'));});

//Listen on port number
webserver.listen(port);
console.log('CDN server started on: ' + port);