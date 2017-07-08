var express = require('express');
var webserver = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var path = require('path'); 

    
//middleware
webserver.use(bodyParser.urlencoded({ extended: true }));
webserver.use(bodyParser.json());

//static folders to be able to point to css, js etc files in a directory
webserver.use("/css", express.static(__dirname + '/client/css'));
webserver.use("/images", express.static(__dirname + '/client/content/images'));

//web site navigation
webserver.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});
webserver.get('/home/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});
webserver.get('/people/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/awardPersons/peopleManager.html'));
});
webserver.get('/programmes/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/awardPrograms/programsManager.html'));
});
webserver.get('/ascriptions/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/awardAscriptions/ascriptionsManager.html'));
});
webserver.get('/about/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/website/about.html'));
});
webserver.get('/contactus/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/website/contactus.html'));
});
webserver.get('/aboutapi/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/website/aboutapi.html'));
});



//API's
//1.1 Db table
var personInformationAttributesRoutes = require('./api/routes/personInformationAttributesRoutes');
personInformationAttributesRoutes(webserver);
//1.2 Db table
var employmentTypesRoutes = require('./api/routes/employmentTypesRoutes');
employmentTypesRoutes(webserver);
//1.3 Db table
var personTypesRoutes = require('./api/routes/personTypesRoutes');
personTypesRoutes(webserver);
//1.4 Db table
var identifierTypesRoutes = require('./api/routes/identifierTypesRoutes');
identifierTypesRoutes(webserver);
//1.5 Db table
var rolesRoutes = require('./api/routes/rolesRoutes');
rolesRoutes(webserver);

//2.1 Db table
var personsRoutes = require('./api/routes/personsRoutes');
personsRoutes(webserver);
//2.2 Db table
var personEmploymentTypesRoutes = require('./api/routes/personEmploymentTypesRoutes');
personEmploymentTypesRoutes(webserver);
//2.3 Db table
var personInformationAttributeValuesRoutes = require('./api/routes/personInformationAttributeValuesRoutes');
personInformationAttributeValuesRoutes(webserver);
//2.4 Db table
var personRolesRoutes = require('./api/routes/personRolesRoutes');
personRolesRoutes(webserver);



var programEntityTypesRoutes = require('./api/routes/programEntityTypesRoutes');
programEntityTypesRoutes(webserver);

var groupTypesRoutes = require('./api/routes/groupTypesRoutes');
groupTypesRoutes(webserver);

var periodTypes = require('./api/routes/periodTypesRoutes');
periodTypes(webserver);


webserver.listen(port);
console.log('RESTful API server started on: ' + port);