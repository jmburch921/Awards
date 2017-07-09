
exports.get_all_groupOfPersons = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."GroupOfPersons"', function (results) {
        res.send(results);
    });
};

exports.create_a_groupOfPerson = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "GroupOfPersonId" FROM public."GroupOfPersons" order by "GroupOfPersonId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["GroupOfPersonId"] + 1;
            }
            var groupId = req.body.groupId;
            var personId = req.body.personId;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."GroupOfPersons"("GroupOfPersonId", "GroupId", "PersonId", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + groupId + '\' ,\'' + personId + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_groupOfPerson = function (req, res) {
    var id = req.params.groupOfPersonId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."GroupOfPersons" where "GroupOfPersonId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_groupOfPerson = function (req, res) {
    var id = req.params.groupOfPersonId;
    var groupId = req.body.groupId;
    var personId = req.body.personId;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."GroupOfPersons" ' +
        'SET ' +
        ' "GroupId"=\'' + groupId + '\', ' +
        ' "PersonId"=\'' + personId + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "GroupOfPersonId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_groupOfPerson = function (req, res) {
    var id = req.params.groupOfPersonId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."GroupOfPersons" where "GroupOfPersonId" = ' + id,
        function (results) {
            res.send(results);
        });
};
