
var express = require('express');
var cors = require('cors');
var webserver = express();
var port = process.env.PORT || 3002;
var path = require('path');

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

webserver.use(allowCrossDomain);

webserver.use("/css", express.static(__dirname + '/content/css'));

webserver.use("/img", express.static(__dirname + '/content/img/'));

webserver.use("/js", express.static(__dirname + '/content/js'));

webserver.use("/pages", express.static(__dirname + '/content/pages'));

webserver.use("/components", express.static(__dirname + '/content/components'));

webserver.get('/', function (req, res) {res.sendFile(path.join(__dirname + '/client/cdnIndex.html'));});
webserver.get('/home/', function (req, res) {res.sendFile(path.join(__dirname + '/client/cdnIndex.html'));});
webserver.get('/help/', function (req, res) {res.sendFile(path.join(__dirname + '/client/help.html'));});

//Listen on port number
webserver.listen(port);
console.log('CDN server started on: ' + port);