exports.get_all_groupTypes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."GroupTypes"', function (results) {
        res.send(results);
    });
};

exports.create_a_groupType = function (req, res) {
    var groupTypesId = req.body.groupTypesId;
    var name = req.body.name;
    var description = req.body.description;
    var dataPost = require('../dataAccess/dataPost');
    dataPost('INSERT INTO public."GroupTypes"("GroupTypeId", "Name", "Description", "InActive", "InActiveDate") ' +
        'VALUES' +
        '(' + groupTypesId + ',\'' + name + '\' ,\'' + description + '\',\'0\', \'1900-01-01\')',
        function (results) {
            res.send(results);
        });
};

exports.read_a_groupType = function (req, res) {
    var id = req.params.groupTypesId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."GroupTypes" where "GroupTypeId" = ' + id, function (results) {
        res.send(results);
    });
};

exports.update_a_groupType = function (req, res) {
    var id = req.params.groupTypesId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."GroupTypes" ' +
        'SET ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "GroupTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_groupType = function (req, res) {
    var id = req.params.groupTypesId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."GroupTypes" where "GroupTypeId" = ' + id, function (results) {
        res.send(results);
    });
};