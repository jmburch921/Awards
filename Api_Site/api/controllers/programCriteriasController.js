
exports.get_all_programCriterias = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramCriterias"', function (results) {
        res.send(results);
    });
};

exports.create_a_programCriteria = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "ProgramCriteriaId" FROM public."ProgramCriterias" order by "ProgramCriteriaId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["ProgramCriteriaId"] + 1;
            }
            var programCriteriaTypeId = req.body.programCriteriaTypeId;
            var programCriteriaParentId = req.body.programCriteriaParentId;
            var name = req.body.name;
            var description = req.body.description;

            if (programCriteriaParentId !== null) {
                var dataPost = require('../dataAccess/dataPost');
                dataPost('INSERT INTO public."ProgramCriterias"("ProgramCriteriaId","ProgramCriteriaTypeId", "ProgramCriteriaParentId", "Name", "Description", "InActive", "InActiveDate") ' +
                    'VALUES' +
                    '(' + id + ',\'' + programCriteriaTypeId + '\' ,\'' + programCriteriaParentId + '\',\'' + name + '\',\'' + description + '\',\'0\', \'1900-01-01\')',
                    function (results) {
                        res.send(results);
                    });
            } else {
                var dataPost = require('../dataAccess/dataPost');
                dataPost('INSERT INTO public."ProgramCriterias"("ProgramCriteriaId","ProgramCriteriaTypeId", "ProgramCriteriaParentId", "Name", "Description", "InActive", "InActiveDate") ' +
                    'VALUES' +
                    '(' + id + ',\'' + programCriteriaTypeId + '\' ,' + programCriteriaParentId + ',\'' + name + '\',\'' + description + '\',\'0\', \'1900-01-01\')',
                    function (results) {
                        res.send(results);
                    });
            }

        });
};

exports.read_a_programCriteria = function (req, res) {
    var id = req.params.programCriteriaId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramCriterias" where "ProgramCriteriaId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_programCriteria = function (req, res) {
    var id = req.params.programCriteriaId;
    var programCriteriaTypeId = req.body.programCriteriaTypeId;
    var programCriteriaParentId = req.body.programCriteriaParentId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    if (programCriteriaParentId !== null) {
        var dataPut = require('../dataAccess/dataPut');
        dataPut(' UPDATE public."ProgramCriterias" ' +
            'SET ' +
            ' "ProgramCriteriaTypeId"=\'' + programCriteriaTypeId + '\', ' +
            ' "ProgramCriteriaParentId"=\'' + programCriteriaParentId + '\', ' +
            ' "Name"=\'' + name + '\', ' +
            ' "Description"=\'' + description + '\', ' +
            ' "InActive"=\'' + inactive + '\', ' +
            ' "InActiveDate"=\'' + inactiveDate + '\' ' +
            'where "ProgramCriteriaId" = ' + id,
            function (results) {
                res.send(results);
            });
    } else {
        var dataPut = require('../dataAccess/dataPut');
        dataPut(' UPDATE public."ProgramCriterias" ' +
            'SET ' +
            ' "ProgramCriteriaTypeId"=\'' + programCriteriaTypeId + '\', ' +
            ' "ProgramCriteriaParentId"=' + programCriteriaParentId +  ',' +
            ' "Name"=\'' + name + '\', ' +
            ' "Description"=\'' + description + '\', ' +
            ' "InActive"=\'' + inactive + '\', ' +
            ' "InActiveDate"=\'' + inactiveDate + '\' ' +
            'where "ProgramCriteriaId" = ' + id,
            function (results) {
                res.send(results);
            });
    }
};

exports.delete_a_programCriteria = function (req, res) {
    var id = req.params.programCriteriaId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."ProgramCriterias" where "ProgramCriteriaId" = ' + id,
        function (results) {
            res.send(results);
        });
};
