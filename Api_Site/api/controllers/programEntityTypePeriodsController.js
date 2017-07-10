
exports.get_all_programEntityTypePeriods = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramEntityTypePeriods"', function (results) {
        res.send(results);
    });
};

exports.create_a_programEntityTypePeriod = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "ProgramEntityTypePeriodId" FROM public."ProgramEntityTypePeriods" order by "ProgramEntityTypePeriodId" desc LIMIT 1',
        function (numberResults) {
            var id = 1; 
            if(numberResults[0]!=null){
                id = numberResults[0]["ProgramEntityTypePeriodId"] + 1;
            } 
            var programEntityTypeId = req.body.programEntityTypeId;
            var periodStatusId = req.body.periodStatusId;
            var periodTypeId = req.body.periodTypeId;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."ProgramEntityTypePeriods"("ProgramEntityTypePeriodId", "ProgramEntityTypeId", "PeriodStatusId", "PeriodTypeId","InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + programEntityTypeId + '\' ,\'' + periodStatusId + '\',\'' + periodTypeId + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_programEntityTypePeriod = function (req, res) {
    var id = req.params.programEntityTypePeriodId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramEntityTypePeriods" where "ProgramEntityTypePeriodId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_programEntityTypePeriod = function (req, res) {
    var id = req.params.programEntityTypePeriodId;
    var programEntityTypeId = req.body.programEntityTypeId;
    var periodStatusId = req.body.periodStatusId;
    var periodTypeId = req.body.periodTypeId;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."ProgramEntityTypePeriods" ' +
        'SET ' +
        ' "ProgramEntityTypeId"=\'' + programEntityTypeId + '\', ' +
        ' "PeriodStatusId"=\'' + periodStatusId + '\', ' +
        ' "PeriodTypeId"=\'' + periodTypeId + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "ProgramEntityTypePeriodId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_programEntityTypePeriod = function (req, res) {
    var id = req.params.programEntityTypePeriodId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."ProgramEntityTypePeriods" where "ProgramEntityTypePeriodId" = ' + id,
        function (results) {
            res.send(results);
        });
};
