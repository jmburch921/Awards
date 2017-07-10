
exports.get_all_periodTypes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."PeriodTypes"', function (results) {
        res.send(results);
    });
};

exports.create_a_periodType = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "PeriodTypeId" FROM public."PeriodTypes" order by "PeriodTypeId" desc LIMIT 1',
        function (numberResults) {
            var id = 1; 
            if(numberResults[0]!=null){
                id = numberResults[0]["PeriodTypeId"] + 1;
            } 
            var name = req.body.name;
            var description = req.body.description;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."PeriodTypes"("PeriodTypeId", "Name", "Description", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + name + '\' ,\'' + description + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_periodType = function (req, res) {
    var id = req.params.periodTypeId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."PeriodTypes" where "PeriodTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_periodType = function (req, res) {
    var id = req.params.periodTypeId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."PeriodTypes" ' +
        'SET ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "PeriodTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_periodType = function (req, res) {
    var id = req.params.periodTypeId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."PeriodTypes" where "PeriodTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};
