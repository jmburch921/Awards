
exports.get_all_roles = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."Roles"', function (results) {
        res.send(results);
    });
};

exports.create_a_role = function (req, res) {
    var id = req.body.roleId;
    var name = req.body.name;
    var description = req.body.description;
    var dataPost = require('../dataAccess/dataPost');
    dataPost('INSERT INTO public."Roles"("RoleId", "Name", "Description", "InActive", "InActiveDate") ' +
        'VALUES' +
        '(' + id + ',\'' + name + '\' ,\'' + description + '\',\'0\', \'1900-01-01\')',
        function (results) {
            res.send(results);
        });
};

exports.read_a_role = function (req, res) {
    var id = req.params.roleId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."Roles" where "RoleId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_role = function (req, res) {
    var id = req.params.roleId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."Roles" ' +
        'SET ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "RoleId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_role = function (req, res) {
    var id = req.params.roleId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."Roles" where "RoleId" = ' + id,
        function (results) {
            res.send(results);
        });
};
