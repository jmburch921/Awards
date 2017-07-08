
exports.get_all_personTypes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."PersonTypes"', function (results) {
        res.send(results);
    });
};

exports.create_a_personType = function (req, res) {
    var id = req.body.personTypeId;
    var name = req.body.name;
    var description = req.body.description;
    var dataPost = require('../dataAccess/dataPost');
    dataPost('INSERT INTO public."PersonTypes"("PersonTypeId", "Name", "Description", "InActive", "InActiveDate") ' +
        'VALUES' +
        '(' + id + ',\'' + name + '\' ,\'' + description + '\',\'0\', \'1900-01-01\')',
        function (results) {
            res.send(results);
        });
};

exports.read_a_personType = function (req, res) {
    var id = req.params.personTypeId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."PersonTypes" where "PersonTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_personType = function (req, res) {
    var id = req.params.personTypeId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."PersonTypes" ' +
        'SET ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "PersonTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_personType = function (req, res) {
    var id = req.params.personTypeId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."PersonTypes" where "PersonTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};
