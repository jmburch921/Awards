
exports.get_all_persons = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."Persons"', function (results) {
        res.send(results);
    });
};

exports.create_a_person = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "PersonId" FROM public."Persons" order by "PersonId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["PersonId"] + 1;
            }
            var personTypeId = req.body.personTypeId;
            var identifierTypeId = req.body.identifierTypeId;
            var identifierValue = req.body.identifierValue;
            var managerPersonId = req.body.managerPersonId;
            var firstname = req.body.firstname;
            var lastname = req.body.lastname;
            var eMail = req.body.eMail;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."Persons"("PersonId", "PersonTypeId", "IdentifierTypeId", "IdentifierValue", "ManagerPersonId", "Firstname", "Lastname", "EMail", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + personTypeId + '\' ,\'' + identifierTypeId + '\',\'' + identifierValue + '\',\'' + managerPersonId + '\',\'' + firstname + '\',\'' + lastname + '\',\'' + eMail + '\', \'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_person = function (req, res) {
    var id = req.params.personId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."Persons" where "PersonId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_person = function (req, res) {
    var id = req.params.personId;
    var personTypeId = req.body.personTypeId;
    var identifierTypeId = req.body.identifierTypeId;
    var identifierValue = req.body.identifierValue;
    var managerPersonId = req.body.managerPersonId;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var eMail = req.body.eMail;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."Persons" ' +
        'SET ' +
        ' "PersonTypeId"=\'' + personTypeId + '\', ' +
        ' "IdentifierTypeId"=\'' + identifierTypeId + '\', ' +
        ' "IdentifierValue"=\'' + identifierValue + '\', ' +
        ' "ManagerPersonId"=\'' + managerPersonId + '\', ' +
        ' "Firstname"=\'' + firstname + '\', ' +
        ' "Lastname"=\'' + lastname + '\', ' +
        ' "EMail"=\'' + eMail + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "PersonId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_person = function (req, res) {
    var id = req.params.personId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."Persons" where "PersonId" = ' + id,
        function (results) {
            res.send(results);
        });
};
