
exports.get_all_ascriptionReasons = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionReasons"', function (results) {
        res.send(results);
    });
};

exports.create_a_ascriptionReason = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "AscriptionReasonId" FROM public."AscriptionReasons" order by "AscriptionReasonId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["AscriptionReasonId"] + 1;
            }
            var ascriptionCriteriaId = req.body.ascriptionCriteriaId;
            var reasonText = req.body.reasonText;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."AscriptionReasons"("AscriptionReasonId", "AscriptionCriteriaId", "ReasonText", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + ascriptionCriteriaId + '\' ,\'' + reasonText + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_ascriptionReason = function (req, res) {
    var id = req.params.ascriptionReasonId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionReasons" where "AscriptionReasonId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_ascriptionReason = function (req, res) {
    var id = req.params.ascriptionReasonId;
    var ascriptionCriteriaId = req.body.ascriptionCriteriaId;
    var reasonText = req.body.reasonText;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."AscriptionReasons" ' +
        'SET ' +
        ' "AscriptionCriteriaId"=\'' + ascriptionCriteriaId + '\', ' +
        ' "ReasonText"=\'' + reasonText + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "AscriptionReasonId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_ascriptionReason = function (req, res) {
    var id = req.params.ascriptionReasonId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."AscriptionReasons" where "AscriptionReasonId" = ' + id,
        function (results) {
            res.send(results);
        });
};
