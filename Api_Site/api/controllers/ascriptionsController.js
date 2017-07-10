
exports.get_all_ascriptions = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."Ascriptions"', function (results) {
        res.send(results);
    });
};

exports.create_a_ascription = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "AscriptionId" FROM public."Ascriptions" order by "AscriptionId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["AscriptionId"] + 1;
            }
            var ascriptionParentId = req.body.ascriptionParentId;
            var ascriptionStatusId = req.body.ascriptionStatusId;
            var approvalLevelRoleId = req.body.approvalLevelRoleId;
            var ascriptionTypeId = req.body.ascriptionTypeId;
            var personNominatorId = req.body.personNominatorId;
            var personNomineeId = req.body.personNomineeId;
            var createDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
            if (ascriptionParentId !== null) {
                var dataPost = require('../dataAccess/dataPost');
                dataPost('INSERT INTO public."Ascriptions"("AscriptionId","AscriptionParentId", "AscriptionStatusId", "ApprovalLevelRoleId", "AscriptionTypeId", "PersonNominatorId", "PersonNomineeId", "CreateDate", "InActive", "InActiveDate") ' +
                    'VALUES' +
                    '(' + id + ',\'' + ascriptionParentId + '\' ,\'' + ascriptionStatusId + '\' ,\'' + approvalLevelRoleId + '\' ,\'' + ascriptionTypeId + '\' ,\'' + personNominatorId + '\' ,\'' + personNomineeId + '\' ,\'' + createDate + '\',\'0\', \'1900-01-01\')',
                    function (results) {
                        res.send(results);
                    });
            } else {
                var dataPost = require('../dataAccess/dataPost');
                dataPost('INSERT INTO public."Ascriptions"("AscriptionId","AscriptionParentId", "AscriptionStatusId", "ApprovalLevelRoleId", "AscriptionTypeId", "PersonNominatorId", "PersonNomineeId", "CreateDate", "InActive", "InActiveDate") ' +
                    'VALUES' +
                    '(' + id + ' , ' + ascriptionParentId + ' ,\'' + ascriptionStatusId + '\' ,\'' + approvalLevelRoleId + '\' ,\'' + ascriptionTypeId + '\' ,\'' + personNominatorId + '\' ,\'' + personNomineeId + '\' ,\'' + createDate + '\',\'0\', \'1900-01-01\')',
                    function (results) {
                        res.send(results);
                    });
            }

        });
};

exports.read_a_ascription = function (req, res) {
    var id = req.params.ascriptionId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."Ascriptions" where "AscriptionId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_ascription = function (req, res) {
    var id = req.params.ascriptionId;
    var ascriptionParentId = req.body.ascriptionParentId;
    var ascriptionStatusId = req.body.ascriptionStatusId;
    var approvalLevelRoleId = req.body.approvalLevelRoleId;
    var ascriptionTypeId = req.body.ascriptionTypeId;
    var personNominatorId = req.body.personNominatorId;
    var personNomineeId = req.body.personNomineeId;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    if (ascriptionParentId !== null) {
            var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."Ascriptions" ' +
        'SET ' +
        ' "AscriptionParentId"=\'' + ascriptionParentId + '\', ' +
        ' "AscriptionStatusId"=\'' + ascriptionStatusId + '\', ' +
        ' "ApprovalLevelRoleId"=\'' + approvalLevelRoleId + '\', ' +
        ' "AscriptionTypeId"=\'' + ascriptionTypeId + '\', ' +
        ' "PersonNominatorId"=\'' + personNominatorId + '\', ' +
        ' "PersonNomineeId"=\'' + personNomineeId + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "AscriptionId" = ' + id,
        function (results) {
            res.send(results);
        });
    }else{
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."Ascriptions" ' +
        'SET ' +
        ' "AscriptionParentId"= ' + ascriptionParentId + ', ' +
        ' "AscriptionStatusId"=\'' + ascriptionStatusId + '\', ' +
        ' "ApprovalLevelRoleId"=\'' + approvalLevelRoleId + '\', ' +
        ' "AscriptionTypeId"=\'' + ascriptionTypeId + '\', ' +
        ' "PersonNominatorId"=\'' + personNominatorId + '\', ' +
        ' "PersonNomineeId"=\'' + personNomineeId + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "AscriptionId" = ' + id,
        function (results) {
            res.send(results);
        });
    }

};

exports.delete_a_ascription = function (req, res) {
    var id = req.params.ascriptionId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."Ascriptions" where "AscriptionId" = ' + id,
        function (results) {
            res.send(results);
        });
};
