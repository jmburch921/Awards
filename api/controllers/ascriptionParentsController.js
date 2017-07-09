
exports.get_all_ascriptionParents = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionParents"', function (results) {
        res.send(results);
    });
};

exports.create_a_ascriptionParent = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "AscriptionParentId" FROM public."AscriptionParents" order by "AscriptionParentId" desc LIMIT 1',
        function (numberResults) {
            var id = 1; 
            if(numberResults[0]!=null){
                id = numberResults[0]["AscriptionParentId"] + 1;
            } 
            var teamName = req.body.teamName;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."AscriptionParents"("AscriptionParentId", "TeamName", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + teamName + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_ascriptionParent = function (req, res) {
    var id = req.params.ascriptionParentId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionParents" where "AscriptionParentId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_ascriptionParent = function (req, res) {
    var id = req.params.ascriptionParentId;
    var teamName = req.body.teamName;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."AscriptionParents" ' +
        'SET ' +
        ' "TeamName"=\'' + teamName + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "AscriptionParentId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_ascriptionParent = function (req, res) {
    var id = req.params.ascriptionParentId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."AscriptionParents" where "AscriptionParentId" = ' + id,
        function (results) {
            res.send(results);
        });
};
