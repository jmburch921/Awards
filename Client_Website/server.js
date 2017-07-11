var express = require('express');
var webserver = express();
var port = process.env.PORT || 3001;
var bodyParser = require('body-parser');
var path = require('path'); 


//middleware section
//gets executed on each request
webserver.use(bodyParser.urlencoded({ extended: true }));
webserver.use(bodyParser.json());


//Client website navigational pages
//Each root patch maps to a relevant folder
webserver.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});
webserver.get('/home/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});
webserver.get('/people/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/people.html'));
});
webserver.get('/people/list', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleList.html'));
});
webserver.get('/people/create', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/peoplecreate.html'));
});
webserver.get('/people/view', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleview.html'));
});
webserver.get('/people/edit', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/people/peopleedit.html'));
});


webserver.get('/programmes/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/programsSpa.html'));
});
webserver.get('/ascriptions/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/ascriptionsSpa.html'));
});
webserver.get('/about/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/info/about.html'));
});
webserver.get('/contactus/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/info/contactus.html'));
});


//Listen on port number
webserver.listen(port);
console.log('Award site server started on: ' + port);