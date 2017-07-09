
exports.get_all_groups = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."Groups"', function (results) {
        res.send(results);
    });
};

exports.create_a_group = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "GroupId" FROM public."Groups" order by "GroupId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["GroupId"] + 1;
            }
            var groupTypeId = req.body.groupTypeId;
            var roleId = req.body.roleId;
            var name = req.body.name;
            var description = req.body.description;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."Groups"("GroupId", "GroupTypeId","RoleId","Name", "Description", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + groupTypeId + '\',\'' + roleId + '\',\'' + name + '\',\'' + description + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_group = function (req, res) {
    var id = req.params.groupId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."Groups" where "GroupId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_group = function (req, res) {
    var id = req.params.groupId;
    var groupTypeId = req.body.groupTypeId;
    var roleId = req.body.roleId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."Groups" ' +
        'SET ' +
        ' "GroupTypeId"=\'' + groupTypeId + '\', ' +
        ' "RoleId"=\'' + roleId + '\', ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "GroupId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_group = function (req, res) {
    var id = req.params.groupId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."Groups" where "GroupId" = ' + id,
        function (results) {
            res.send(results);
        });
};
