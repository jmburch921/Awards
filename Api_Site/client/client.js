var express = require('express');
var webserver = express();
var port = process.env.PORT || 3001;
var bodyParser = require('body-parser');
var path = require('path'); 


//middleware section
//gets executed on each request
webserver.use(bodyParser.urlencoded({ extended: true }));
webserver.use(bodyParser.json());


// static folders to be able to point to css, js etc files in a directory
// directory structure from "client" folder, when you create another folder for example the "api" folder 
// use the "../css/client.css" path to get one up folder so the path is correct
webserver.use("/css", express.static(__dirname + '/content/css'));
webserver.use("/images", express.static(__dirname + '/content/images'));
webserver.use("/js", express.static(__dirname + '/content/js'));


//Client website navigational pages
//Each root patch maps to a relevant folder
webserver.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
webserver.get('/home/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
webserver.get('/people/', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/peopleSpa.html'));
});
webserver.get('/programmes/', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/programsSpa.html'));
});
webserver.get('/ascriptions/', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/ascriptionsSpa.html'));
});
webserver.get('/about/', function(req, res) {
    res.sendFile(path.join(__dirname + '/info/about.html'));
});
webserver.get('/contactus/', function(req, res) {
    res.sendFile(path.join(__dirname + '/info/contactus.html'));
});
webserver.get('/api/help/', function(req, res) {
    res.sendFile(path.join(__dirname + '/info/apiDocumentation.html'));
});


//Listen on port number
webserver.listen(port);
console.log('Site server started on: ' + port);