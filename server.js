var express = require('express');
var webserver = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var path = require('path'); 

    
//middleware
webserver.use(bodyParser.urlencoded({ extended: true }));
webserver.use(bodyParser.json());

//static folders to be able to point to css, js etc files in a directory
webserver.use("/css", express.static(__dirname + '/client/content/css'));
webserver.use("/images", express.static(__dirname + '/client/content/images'));
webserver.use("/js", express.static(__dirname + '/client/content/js'));

//web site navigation
webserver.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});
webserver.get('/home/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});
webserver.get('/people/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/peopleSpa.html'));
});
webserver.get('/programmes/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/programsSpa.html'));
});
webserver.get('/ascriptions/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/pages/ascriptionsSpa.html'));
});
webserver.get('/about/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/website/about.html'));
});
webserver.get('/contactus/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/website/contactus.html'));
});
webserver.get('/api/help/', function(req, res) {
    res.sendFile(path.join(__dirname + '/api/docs/apiDocumentation.html'));
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

//3.1 Db table
var groupTypesRoutes = require('./api/routes/groupTypesRoutes');
groupTypesRoutes(webserver);

//4.1 Db table
var groupsRoutes = require('./api/routes/groupsRoutes');
groupsRoutes(webserver);
//4.2 Db table
var groupOfPersonsRoutes = require('./api/routes/groupOfPersonsRoutes');
groupOfPersonsRoutes(webserver);

//5.1 Db table
var entityTypesRoutes = require('./api/routes/entityTypesRoutes');
entityTypesRoutes(webserver);
//5.2 Db table
var programInformationAttributesRoutes = require('./api/routes/programInformationAttributesRoutes');
programInformationAttributesRoutes(webserver);
//5.3 Db table
var periodStatusesRoutes = require('./api/routes/periodStatusesRoutes');
periodStatusesRoutes(webserver);
//5.4 Db table
var periodTypesRoutes = require('./api/routes/periodTypesRoutes');
periodTypesRoutes(webserver);

//6.1 Db table
var programsRoutes = require('./api/routes/programsRoutes');
programsRoutes(webserver);
//6.2 Db table
var programGroupsRoutes = require('./api/routes/programGroupsRoutes');
programGroupsRoutes(webserver);
//6.3 Db table
var programInformationAttributeValuesRoutes = require('./api/routes/programInformationAttributeValuesRoutes');
programInformationAttributeValuesRoutes(webserver);
//6.4 Db table
var programEntityTypesRoutes = require('./api/routes/programEntityTypesRoutes');
programEntityTypesRoutes(webserver);
//6.5 Db table
var programEntityTypePeriodsRoutes = require('./api/routes/programEntityTypePeriodsRoutes');
programEntityTypePeriodsRoutes(webserver);
//6.6 Db table
var programCriteriaTypesRoutes = require('./api/routes/programCriteriaTypesRoutes');
programCriteriaTypesRoutes(webserver);
//6.7 Db table
var programCriteriasRoutes = require('./api/routes/programCriteriasRoutes');
programCriteriasRoutes(webserver);

//7.1 Db table
var ascriptionStatusesRoutes = require('./api/routes/ascriptionStatusesRoutes');
ascriptionStatusesRoutes(webserver);
//7.2 Db table
var ascriptionTypesRoutes = require('./api/routes/ascriptionTypesRoutes');
ascriptionTypesRoutes(webserver);


//8.1 Db table
var programAscriptionTypesRoutes = require('./api/routes/programAscriptionTypesRoutes');
programAscriptionTypesRoutes(webserver);
//8.2 Db table
var programAscriptionTypeStatusRolesRoutes = require('./api/routes/programAscriptionTypeStatusRolesRoutes');
programAscriptionTypeStatusRolesRoutes(webserver);

//9.1 Db table
var ascriptionParentsRoutes = require('./api/routes/ascriptionParentsRoutes');
ascriptionParentsRoutes(webserver);
//9.2 Db table
var ascriptionsRoutes = require('./api/routes/ascriptionsRoutes');
ascriptionsRoutes(webserver);
//9.3 Db table
var ascriptionCriteriasRoutes = require('./api/routes/ascriptionCriteriasRoutes');
ascriptionCriteriasRoutes(webserver);







webserver.listen(port);
console.log('RESTful API server started on: ' + port);