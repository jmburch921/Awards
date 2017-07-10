
exports.get_all_programCriteriaTypes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramCriteriaTypes"', function (results) {
        res.send(results);
    });
};

exports.create_a_programCriteriaType = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "ProgramCriteriaTypeId" FROM public."ProgramCriteriaTypes" order by "ProgramCriteriaTypeId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["ProgramCriteriaTypeId"] + 1;
            }
            var programEntityTypeId = req.body.programEntityTypeId;
            var name = req.body.name;
            var description = req.body.description;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."ProgramCriteriaTypes"("ProgramCriteriaTypeId",  "ProgramEntityTypeId", "Name", "Description", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + programEntityTypeId + '\' ,\''  + name + '\' ,\'' + description + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_programCriteriaType = function (req, res) {
    var id = req.params.programCriteriaTypeId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramCriteriaTypes" where "ProgramCriteriaTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_programCriteriaType = function (req, res) {
    var id = req.params.programCriteriaTypeId;
    var programEntityTypeId = req.body.programEntityTypeId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."ProgramCriteriaTypes" ' +
        'SET ' +
        ' "ProgramEntityTypeId"=\'' + programEntityTypeId + '\', ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "ProgramCriteriaTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_programCriteriaType = function (req, res) {
    var id = req.params.programCriteriaTypeId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."ProgramCriteriaTypes" where "ProgramCriteriaTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};
