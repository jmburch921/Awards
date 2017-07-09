
exports.get_all_personRoles = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."PersonRoles"', function (results) {
        res.send(results);
    });
};

exports.create_a_personRole = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "PersonRoleId" FROM public."PersonRoles" order by "PersonRoleId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["PersonRoleId"] + 1;
            }
            var personId = req.body.personId;
            var roleId = req.body.roleId;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."PersonRoles"("PersonRoleId", "PersonId", "RoleId", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + personId + '\' ,\'' + roleId + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_personRole = function (req, res) {
    var id = req.params.personRoleId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."PersonRoles" where "PersonRoleId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_personRole = function (req, res) {
    var id = req.params.personRoleId;
    var personId = req.body.personId;
    var roleId = req.body.roleId;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."PersonRoles" ' +
        'SET ' +
        ' "PersonId"=\'' + personId + '\', ' +
        ' "RoleId"=\'' + roleId + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "PersonRoleId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_personRole = function (req, res) {
    var id = req.params.personRoleId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."PersonRoles" where "PersonRoleId" = ' + id,
        function (results) {
            res.send(results);
        });
};
