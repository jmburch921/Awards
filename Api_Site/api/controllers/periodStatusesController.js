
exports.get_all_periodStatuses = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."PeriodStatuses"', function (results) {
        res.send(results);
    });
};

exports.create_a_periodStatus = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "PeriodStatusId" FROM public."PeriodStatuses" order by "PeriodStatusId" desc LIMIT 1',
        function (numberResults) {
            var id = 1; 
            if(numberResults[0]!=null){
                id = numberResults[0]["PeriodStatusId"] + 1;
            } 
            var name = req.body.name;
            var description = req.body.description;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."PeriodStatuses"("PeriodStatusId", "Name", "Description", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + name + '\' ,\'' + description + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_periodStatus = function (req, res) {
    var id = req.params.periodStatusId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."PeriodStatuses" where "PeriodStatusId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_periodStatus = function (req, res) {
    var id = req.params.periodStatusId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."PeriodStatuses" ' +
        'SET ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "PeriodStatusId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_periodStatus = function (req, res) {
    var id = req.params.periodStatusId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."PeriodStatuses" where "PeriodStatusId" = ' + id,
        function (results) {
            res.send(results);
        });
};
