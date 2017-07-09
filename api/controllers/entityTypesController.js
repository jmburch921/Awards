
exports.get_all_entityTypes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."EntityTypes"', function (results) {
        res.send(results);
    });
};

exports.create_a_entityType = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "EntityTypeId" FROM public."EntityTypes" order by "EntityTypeId" desc LIMIT 1',
        function (numberResults) {
            var id = 1; 
            if(numberResults[0]!=null){
                id = numberResults[0]["EntityTypeId"] + 1;
            } 
            var name = req.body.name;
            var description = req.body.description;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."EntityTypes"("EntityTypeId", "Name", "Description", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + name + '\' ,\'' + description + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_entityType = function (req, res) {
    var id = req.params.entityTypeId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."EntityTypes" where "EntityTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_entityType = function (req, res) {
    var id = req.params.entityTypeId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."EntityTypes" ' +
        'SET ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "EntityTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_entityType = function (req, res) {
    var id = req.params.entityTypeId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."EntityTypes" where "EntityTypeId" = ' + id,
        function (results) {
            res.send(results);
        });
};
