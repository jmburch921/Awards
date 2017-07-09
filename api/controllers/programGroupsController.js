
exports.get_all_programGroups = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramGroups"', function (results) {
        res.send(results);
    });
};

exports.create_a_programGroup = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "ProgramGroupId" FROM public."ProgramGroups" order by "ProgramGroupId" desc LIMIT 1',
        function (numberResults) {
            var id = 1; 
            if(numberResults[0]!=null){
                id = numberResults[0]["ProgramGroupId"] + 1;
            } 
            var programId = req.body.programId;
            var groupId = req.body.groupId;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."ProgramGroups"("ProgramGroupId", "ProgramId", "GroupId", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + programId + '\' ,\'' + groupId + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_programGroup = function (req, res) {
    var id = req.params.programGroupId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramGroups" where "ProgramGroupId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_programGroup = function (req, res) {
    var id = req.params.programGroupId;
    var programId = req.body.programId;
    var groupId = req.body.groupId;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."ProgramGroups" ' +
        'SET ' +
        ' "ProgramId"=\'' + programId + '\', ' +
        ' "GroupId"=\'' + groupId + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "ProgramGroupId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_programGroup = function (req, res) {
    var id = req.params.programGroupId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."ProgramGroups" where "ProgramGroupId" = ' + id,
        function (results) {
            res.send(results);
        });
};
