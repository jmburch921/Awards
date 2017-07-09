
exports.get_all_ascriptionStatuses = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionStatuses"', function (results) {
        res.send(results);
    });
};

exports.create_a_ascriptionStatus = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "AscriptionStatusId" FROM public."AscriptionStatuses" order by "AscriptionStatusId" desc LIMIT 1',
        function (numberResults) {
            var id = 1; 
            if(numberResults[0]!=null){
                id = numberResults[0]["AscriptionStatusId"] + 1;
            } 
            var name = req.body.name;
            var description = req.body.description;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."AscriptionStatuses"("AscriptionStatusId", "Name", "Description", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + name + '\' ,\'' + description + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_ascriptionStatus = function (req, res) {
    var id = req.params.ascriptionStatusId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionStatuses" where "AscriptionStatusId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_ascriptionStatus = function (req, res) {
    var id = req.params.ascriptionStatusId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."AscriptionStatuses" ' +
        'SET ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "AscriptionStatusId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_ascriptionStatus = function (req, res) {
    var id = req.params.ascriptionStatusId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."AscriptionStatuses" where "AscriptionStatusId" = ' + id,
        function (results) {
            res.send(results);
        });
};
