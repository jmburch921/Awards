
exports.get_all_personEmploymentTypes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."PersonEmploymentTypes"', function (results) {
        res.send(results);
    });
};

exports.create_a_personEmploymentType = function (req, res) {
    var id = req.body.personEmploymentTypeId;
    var personId = req.body.personId;
    var employmentTypeId = req.body.employmentTypeId;
    var dataPost = require('../dataAccess/dataPost');
    dataPost('INSERT INTO public."PersonEmploymentTypes"("PersonEmploymentTypeId", "PersonId", "EmploymentTypeId", "InActive", "InActiveDate") ' +
        'VALUES' +
        '(' + id + ',\'' + personId + '\' ,\'' + employmentTypeId + '\',\'0\', \'1900-01-01\')',
        function (results) {
            res.send(results);
        });
};

exports.read_a_personEmploymentType = function (req, res) {
    var id = req.params.personEmploymentTypeId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."PersonEmploymentTypes" where "PersonEmploymentTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_personEmploymentType = function (req, res) {
    var id = req.params.personEmploymentTypeId;
    var personId = req.body.personId;
    var employmentTypeId = req.body.employmentTypeId;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."PersonEmploymentTypes" ' +
        'SET ' +
        ' "PersonId"=\'' + personId + '\', ' +
        ' "EmploymentTypeId"=\'' + employmentTypeId + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "PersonEmploymentTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_personEmploymentType = function (req, res) {
    var id = req.params.personEmploymentTypeId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."PersonEmploymentTypes" where "PersonEmploymentTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};
