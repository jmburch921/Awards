
exports.get_all_personInformationAttributes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."PersonInformationAttributes"', function (results) {
        res.send(results);
    });
};

exports.create_a_personInformationAttribute = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "PersonInformationAttributeId" FROM public."PersonInformationAttributes" order by "PersonInformationAttributeId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["PersonInformationAttributeId"] + 1;
            }
            var name = req.body.name;
            var description = req.body.description;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."PersonInformationAttributes"("PersonInformationAttributeId", "Name", "Description", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + name + '\' ,\'' + description + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_personInformationAttribute = function (req, res) {
    var id = req.params.personInformationAttributeId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."PersonInformationAttributes" where "PersonInformationAttributeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_personInformationAttribute = function (req, res) {
    var id = req.params.personInformationAttributeId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."PersonInformationAttributes" ' +
        'SET ' +
        ' "Name"=\'' + name + '\', ' +
        ' "Description"=\'' + description + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "PersonInformationAttributeId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_personInformationAttribute = function (req, res) {
    var id = req.params.personInformationAttributeId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."PersonInformationAttributes" where "PersonInformationAttributeId" = ' + id,
        function (results) {
            res.send(results);
        });
};
