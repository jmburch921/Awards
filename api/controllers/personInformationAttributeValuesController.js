
exports.get_all_personInformationAttributeValues = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."PersonInformationAttributeValues"', function (results) {
        res.send(results);
    });
};

exports.create_a_personInformationAttributeValue = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "PersonInformationAttributeValueId" FROM public."PersonInformationAttributeValues" order by "PersonInformationAttributeValueId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["PersonInformationAttributeValueId"] + 1;
            }
            var personId = req.body.personId;
            var personInformationAttributeId = req.body.personInformationAttributeId;
            var itemValue = req.body.itemValue;
            var isHiddenAttribute = req.body.isHiddenAttribute;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."PersonInformationAttributeValues"("PersonInformationAttributeValueId", "PersonId", "PersonInformationAttributeId", "Value", "IsHiddenAttribute", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + personId + '\' ,\'' + personInformationAttributeId + '\',\'' + itemValue + '\',\'' + isHiddenAttribute + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_personInformationAttributeValue = function (req, res) {
    var id = req.params.personInformationAttributeValueId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."PersonInformationAttributeValues" where "PersonInformationAttributeValueId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_personInformationAttributeValue = function (req, res) {
    var id = req.params.personInformationAttributeValueId;
    var personId = req.body.personId;
    var personInformationAttributeId = req.body.personInformationAttributeId;
    var itemValue = req.body.itemValue;
    var isHiddenAttribute = req.body.isHiddenAttribute;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."PersonInformationAttributeValues" ' +
        'SET ' +
        ' "PersonId"=\'' + personId + '\', ' +
        ' "PersonInformationAttributeId"=\'' + personInformationAttributeId + '\', ' +
        ' "Value"=\'' + itemValue + '\', ' +
        ' "IsHiddenAttribute"=\'' + isHiddenAttribute + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "PersonInformationAttributeValueId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_personInformationAttributeValue = function (req, res) {
    var id = req.params.personInformationAttributeValueId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."PersonInformationAttributeValues" where "PersonInformationAttributeValueId" = ' + id,
        function (results) {
            res.send(results);
        });
};
