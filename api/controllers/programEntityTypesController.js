
exports.get_all_programEntityTypes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramEntityTypes"', function (results) {
        res.send(results);
    });
};

exports.create_a_programEntityType = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "ProgramEntityTypeId" FROM public."ProgramEntityTypes" order by "ProgramEntityTypeId" desc LIMIT 1',
        function (numberResults) {
            var id = 1; 
            if(numberResults[0]!=null){
                id = numberResults[0]["ProgramEntityTypeId"] + 1;
            } 
            var programId = req.body.programId;
            var entityTypeId = req.body.entityTypeId;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."ProgramEntityTypes"("ProgramEntityTypeId", "ProgramId", "EntityTypeId", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + programId + '\' ,\'' + entityTypeId + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_programEntityType = function (req, res) {
    var id = req.params.programEntityTypeId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramEntityTypes" where "ProgramEntityTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_programEntityType = function (req, res) {
    var id = req.params.programEntityTypeId;
    var programId = req.body.programId;
    var entityTypeId = req.body.entityTypeId;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."ProgramEntityTypes" ' +
        'SET ' +
        ' "ProgramId"=\'' + programId + '\', ' +
        ' "EntityTypeId"=\'' + entityTypeId + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "ProgramEntityTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_programEntityType = function (req, res) {
    var id = req.params.programEntityTypeId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."ProgramEntityTypes" where "ProgramEntityTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};
