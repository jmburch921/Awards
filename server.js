var express = require('express');
var webserver = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var path = require('path'); 

    
//middleware
webserver.use(bodyParser.urlencoded({ extended: true }));
webserver.use(bodyParser.json());




webserver.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});
webserver.get('/people/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/awardPersons/people.html'));
});
webserver.get('/about/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/website/about.html'));
});




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



var programEntityTypesRoutes = require('./api/routes/programEntityTypesRoutes');
programEntityTypesRoutes(webserver);

var groupTypesRoutes = require('./api/routes/groupTypesRoutes');
groupTypesRoutes(webserver);

var periodTypes = require('./api/routes/periodTypesRoutes');
periodTypes(webserver);


webserver.listen(port);
console.log('RESTful API server started on: ' + port);