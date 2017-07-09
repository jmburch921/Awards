
exports.get_all_programs = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."Programs"', function (results) {
        res.send(results);
    });
};

exports.create_a_program = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "ProgramId" FROM public."Programs" order by "ProgramId" desc LIMIT 1',
        function (numberResults) {
            var id = 1; 
            if(numberResults[0]!=null){
                id = numberResults[0]["ProgramId"] + 1;
            } 
            var name = req.body.name;
            var description = req.body.description;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."Programs"("ProgramId", "Name", "Description", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + name + '\' ,\'' + description + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_program = function (req, res) {
    var id = req.params.programId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."Programs" where "ProgramId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_program = function (req, res) {
    var id = req.params.programId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."Programs" ' +
        'SET ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "ProgramId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_program = function (req, res) {
    var id = req.params.programId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."Programs" where "ProgramId" = ' + id,
        function (results) {
            res.send(results);
        });
};
