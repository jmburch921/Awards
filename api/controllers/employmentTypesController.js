
exports.get_all_employmentTypes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."EmploymentTypes"', function (results) {
        res.send(results);
    });
};

exports.create_a_employmentType = function (req, res) {
    var id = req.body.employmentTypeId;
    var name = req.body.name;
    var description = req.body.description;
    var dataPost = require('../dataAccess/dataPost');
    dataPost('INSERT INTO public."EmploymentTypes"("EmploymentTypeId", "Name", "Description", "InActive", "InActiveDate") ' +
        'VALUES' +
        '(' + id + ',\'' + name + '\' ,\'' + description + '\',\'0\', \'1900-01-01\')',
        function (results) {
            res.send(results);
        });
};

exports.read_a_employmentType = function (req, res) {
    var id = req.params.employmentTypeId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."EmploymentTypes" where "EmploymentTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_employmentType = function (req, res) {
    var id = req.params.employmentTypeId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."EmploymentTypes" ' +
        'SET ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "EmploymentTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_employmentType = function (req, res) {
    var id = req.params.employmentTypeId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."EmploymentTypes" where "EmploymentTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};
