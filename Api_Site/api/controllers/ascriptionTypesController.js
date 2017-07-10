
exports.get_all_ascriptionTypes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionTypes"', function (results) {
        res.send(results);
    });
};

exports.create_a_ascriptionType = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "AscriptionTypeId" FROM public."AscriptionTypes" order by "AscriptionTypeId" desc LIMIT 1',
        function (numberResults) {
            var id = 1; 
            if(numberResults[0]!=null){
                id = numberResults[0]["AscriptionTypeId"] + 1;
            } 
            var name = req.body.name;
            var description = req.body.description;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."AscriptionTypes"("AscriptionTypeId", "Name", "Description", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + name + '\' ,\'' + description + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_ascriptionType = function (req, res) {
    var id = req.params.ascriptionTypeId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionTypes" where "AscriptionTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_ascriptionType = function (req, res) {
    var id = req.params.ascriptionTypeId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."AscriptionTypes" ' +
        'SET ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "AscriptionTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_ascriptionType = function (req, res) {
    var id = req.params.ascriptionTypeId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."AscriptionTypes" where "AscriptionTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};
