
exports.get_all_ascriptionNotes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionNotes"', function (results) {
        res.send(results);
    });
};

exports.create_a_ascriptionNote = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "AscriptionNoteId" FROM public."AscriptionNotes" order by "AscriptionNoteId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["AscriptionNoteId"] + 1;
            }
            var ascriptionId = req.body.ascriptionId;
            var details = req.body.details;
            var createDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."AscriptionNotes"("AscriptionNoteId", "AscriptionId", "Details", "CreateDate", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + ascriptionId + '\' ,\'' + details + '\' ,\'' + createDate + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_ascriptionNote = function (req, res) {
    var id = req.params.ascriptionNoteId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionNotes" where "AscriptionNoteId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_ascriptionNote = function (req, res) {
    var id = req.params.ascriptionNoteId;
    var ascriptionId = req.body.ascriptionId;
    var details = req.body.details;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."AscriptionNotes" ' +
        'SET ' +
        ' "AscriptionId"=\'' + ascriptionId + '\', ' +
        ' "Details"=\'' + details + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "AscriptionNoteId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_ascriptionNote = function (req, res) {
    var id = req.params.ascriptionNoteId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."AscriptionNotes" where "AscriptionNoteId" = ' + id,
        function (results) {
            res.send(results);
        });
};
