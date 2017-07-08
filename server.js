var express = require('express');
var webserver = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
    
debugger;
    
//middleware
webserver.use(bodyParser.urlencoded({ extended: true }));
webserver.use(bodyParser.json());



//1.1 Db table
var personInformationAttributesRoutes = require('./api/routes/personInformationAttributesRoutes');
personInformationAttributesRoutes(webserver);
//1.2 Db table
var employmentTypes = require('./api/routes/employmentTypesRoutes');
employmentTypes(webserver);
//1.3 Db table
var personTypes = require('./api/routes/personTypesRoutes');
personTypes(webserver);



var personsRoutes = require('./api/routes/personsRoutes');
personsRoutes(webserver);

var programEntityTypesRoutes = require('./api/routes/programEntityTypesRoutes');
programEntityTypesRoutes(webserver);

var groupTypesRoutes = require('./api/routes/groupTypesRoutes');
groupTypesRoutes(webserver);

var periodTypes = require('./api/routes/periodTypesRoutes');
periodTypes(webserver);


webserver.listen(port);
console.log('RESTful API server started on: ' + port);