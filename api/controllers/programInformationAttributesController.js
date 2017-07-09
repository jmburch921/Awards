
exports.get_all_programInformationAttributes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramInformationAttributes"', function (results) {
        res.send(results);
    });
};

exports.create_a_programInformationAttribute = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "ProgramInformationAttributeId" FROM public."ProgramInformationAttributes" order by "ProgramInformationAttributeId" desc LIMIT 1',
        function (numberResults) {
            var id = 1; 
            if(numberResults[0]!=null){
                id = numberResults[0]["ProgramInformationAttributeId"] + 1;
            } 
            var name = req.body.name;
            var description = req.body.description;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."ProgramInformationAttributes"("ProgramInformationAttributeId", "Name", "Description", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + name + '\' ,\'' + description + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_programInformationAttribute = function (req, res) {
    var id = req.params.programInformationAttributeId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramInformationAttributes" where "ProgramInformationAttributeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_programInformationAttribute = function (req, res) {
    var id = req.params.programInformationAttributeId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."ProgramInformationAttributes" ' +
        'SET ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "ProgramInformationAttributeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_programInformationAttribute = function (req, res) {
    var id = req.params.programInformationAttributeId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."ProgramInformationAttributes" where "ProgramInformationAttributeId" = ' + id,
        function (results) {
            res.send(results);
        });
};
