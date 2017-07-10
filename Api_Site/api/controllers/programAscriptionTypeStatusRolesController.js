
exports.get_all_programAscriptionTypeStatusRoles = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramAscriptionTypeStatusRoles"', function (results) {
        res.send(results);
    });
};

exports.create_a_programAscriptionTypeStatusRole = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "ProgramAscriptionTypeStatusRoleId" FROM public."ProgramAscriptionTypeStatusRoles" order by "ProgramAscriptionTypeStatusRoleId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["ProgramAscriptionTypeStatusRoleId"] + 1;
            }
            var programAscriptionTypeId = req.body.programAscriptionTypeId;
            var ascriptionStatusId = req.body.ascriptionStatusId;
            var roleId = req.body.roleId;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."ProgramAscriptionTypeStatusRoles"("ProgramAscriptionTypeStatusRoleId", "ProgramAscriptionTypeId", "AscriptionStatusId",  "RoleId","InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + programAscriptionTypeId + '\' ,\'' + ascriptionStatusId + '\' ,\'' + roleId + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_programAscriptionTypeStatusRole = function (req, res) {
    var id = req.params.programAscriptionTypeStatusRoleId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramAscriptionTypeStatusRoles" where "ProgramAscriptionTypeStatusRoleId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_programAscriptionTypeStatusRole = function (req, res) {
    var id = req.params.programAscriptionTypeStatusRoleId;
    var programAscriptionTypeId = req.body.programAscriptionTypeId;
    var ascriptionStatusId = req.body.ascriptionStatusId;
    var roleId = req.body.roleId;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."ProgramAscriptionTypeStatusRoles" ' +
        'SET ' +
        ' "ProgramAscriptionTypeId"=\'' + programAscriptionTypeId + '\', ' +
        ' "AscriptionStatusId"=\'' + ascriptionStatusId + '\', ' +
        ' "RoleId"=\'' + roleId + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "ProgramAscriptionTypeStatusRoleId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_programAscriptionTypeStatusRole = function (req, res) {
    var id = req.params.programAscriptionTypeStatusRoleId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."ProgramAscriptionTypeStatusRoles" where "ProgramAscriptionTypeStatusRoleId" = ' + id,
        function (results) {
            res.send(results);
        });
};
