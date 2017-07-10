
exports.get_all_ascriptionCriterias = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionCriterias"', function (results) {
        res.send(results);
    });
};

exports.create_a_ascriptionCriteria = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "AscriptionCriteriaId" FROM public."AscriptionCriterias" order by "AscriptionCriteriaId" desc LIMIT 1',
        function (numberResults) {
            var id = 1; 
            if(numberResults[0]!=null){
                id = numberResults[0]["AscriptionCriteriaId"] + 1;
            } 
            var ascriptionId = req.body.ascriptionId;
            var programCriteriaId = req.body.programCriteriaId;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."AscriptionCriterias"("AscriptionCriteriaId", "AscriptionId", "ProgramCriteriaId", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + ascriptionId + '\' ,\'' + programCriteriaId + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_ascriptionCriteria = function (req, res) {
    var id = req.params.ascriptionCriteriaId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionCriterias" where "AscriptionCriteriaId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_ascriptionCriteria = function (req, res) {
    var id = req.params.ascriptionCriteriaId;
    var ascriptionId = req.body.ascriptionId;
    var programCriteriaId = req.body.programCriteriaId;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."AscriptionCriterias" ' +
        'SET ' +
        ' "AscriptionId"=\'' + ascriptionId + '\', ' +
        ' "ProgramCriteriaId"=\'' + programCriteriaId + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "AscriptionCriteriaId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_ascriptionCriteria = function (req, res) {
    var id = req.params.ascriptionCriteriaId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."AscriptionCriterias" where "AscriptionCriteriaId" = ' + id,
        function (results) {
            res.send(results);
        });
};
