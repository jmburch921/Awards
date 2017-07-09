
exports.get_all_ascriptionAudits = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionAudits"', function (results) {
        res.send(results);
    });
};

exports.create_a_ascriptionAudit = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "AscriptionAuditId" FROM public."AscriptionAudits" order by "AscriptionAuditId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["AscriptionAuditId"] + 1;
            }
            var ascriptionId = req.body.ascriptionId;
            var fromAscriptionStatusId = req.body.fromAscriptionStatusId;
            var toAscriptionStatusId = req.body.toAscriptionStatusId;
            var details = req.body.details;
            var createDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."AscriptionAudits"("AscriptionAuditId", "AscriptionId", "FromAscriptionStatusId", "ToAscriptionStatusId","Details", "CreateDate") ' +
                'VALUES' +
                '(' + id + ',\'' + ascriptionId + '\' ,\'' + fromAscriptionStatusId + '\' ,\'' + toAscriptionStatusId + '\' ,\'' + details + '\' ,\'' + createDate + '\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_ascriptionAudit = function (req, res) {
    var id = req.params.ascriptionAuditId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionAudits" where "AscriptionAuditId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_ascriptionAudit = function (req, res) {
    var id = req.params.ascriptionAuditId;
    var ascriptionId = req.body.ascriptionId;
    var fromAscriptionStatusId = req.body.fromAscriptionStatusId;
    var toAscriptionStatusId = req.body.toAscriptionStatusId;
    var details = req.body.details;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."AscriptionAudits" ' +
        'SET ' +
        ' "AscriptionId"=\'' + ascriptionId + '\', ' +
        ' "FromAscriptionStatusId"=\'' + fromAscriptionStatusId + '\', ' +
        ' "ToAscriptionStatusId"=\'' + toAscriptionStatusId + '\', ' +
        ' "Details"=\'' + details + '\' ' +
        'where "AscriptionAuditId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_ascriptionAudit = function (req, res) {
    var id = req.params.ascriptionAuditId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."AscriptionAudits" where "AscriptionAuditId" = ' + id,
        function (results) {
            res.send(results);
        });
};
