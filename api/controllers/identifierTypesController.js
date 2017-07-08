
exports.get_all_identifierTypes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."IdentifierTypes"', function (results) {
        res.send(results);
    });
};

exports.create_a_identifierType = function (req, res) {
    var id = req.body.identifierTypeId;
    var name = req.body.name;
    var description = req.body.description;
    var dataPost = require('../dataAccess/dataPost');
    dataPost('INSERT INTO public."IdentifierTypes"("IdentifierTypeId", "Name", "Description", "InActive", "InActiveDate") ' +
        'VALUES' +
        '(' + id + ',\'' + name + '\' ,\'' + description + '\',\'0\', \'1900-01-01\')',
        function (results) {
            res.send(results);
        });
};

exports.read_a_identifierType = function (req, res) {
    var id = req.params.identifierTypeId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."IdentifierTypes" where "IdentifierTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_identifierType = function (req, res) {
    var id = req.params.identifierTypeId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."IdentifierTypes" ' +
        'SET ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "IdentifierTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_identifierType = function (req, res) {
    var id = req.params.identifierTypeId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."IdentifierTypes" where "IdentifierTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};
