
exports.get_all_programAscriptionTypes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramAscriptionTypes"', function (results) {
        res.send(results);
    });
};

exports.create_a_programAscriptionType = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "ProgramAscriptionTypeId" FROM public."ProgramAscriptionTypes" order by "ProgramAscriptionTypeId" desc LIMIT 1',
        function (numberResults) {
            var id = 1; 
            if(numberResults[0]!=null){
                id = numberResults[0]["ProgramAscriptionTypeId"] + 1;
            } 
            var ascriptionTypeId = req.body.ascriptionTypeId;
            var periodTypeId = req.body.periodTypeId;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."ProgramAscriptionTypes"("ProgramAscriptionTypeId", "AscriptionTypeId", "PeriodTypeId", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + ascriptionTypeId + '\' ,\'' + periodTypeId + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_programAscriptionType = function (req, res) {
    var id = req.params.programAscriptionTypeId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramAscriptionTypes" where "ProgramAscriptionTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_programAscriptionType = function (req, res) {
    var id = req.params.programAscriptionTypeId;
    var ascriptionTypeId = req.body.ascriptionTypeId;
    var periodTypeId = req.body.periodTypeId;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."ProgramAscriptionTypes" ' +
        'SET ' +
        ' "AscriptionTypeId"=\'' + ascriptionTypeId + '\', ' +
        ' "PeriodTypeId"=\'' + periodTypeId + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "ProgramAscriptionTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_programAscriptionType = function (req, res) {
    var id = req.params.programAscriptionTypeId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."ProgramAscriptionTypes" where "ProgramAscriptionTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};
