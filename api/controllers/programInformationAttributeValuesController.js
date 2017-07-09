
exports.get_all_programInformationAttributeValues = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramInformationAttributeValues"', function (results) {
        res.send(results);
    });
};

exports.create_a_programInformationAttributeValue = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "ProgramInformationAttributeValueId" FROM public."ProgramInformationAttributeValues" order by "ProgramInformationAttributeValueId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["ProgramInformationAttributeValueId"] + 1;
            }
            var programId = req.body.programId;
            var programInformationAttributeId = req.body.programInformationAttributeId;
            var itemValue = req.body.itemValue;
            var isHiddenAttribute = req.body.isHiddenAttribute;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."ProgramInformationAttributeValues"("ProgramInformationAttributeValueId", "ProgramId", "ProgramInformationAttributeId", "Value", "IsHiddenAttribute", "InActive", "InActiveDate") ' +
                'VALUES' +
                '(' + id + ',\'' + programId + '\' ,\'' + programInformationAttributeId + '\',\'' + itemValue + '\',\'' + isHiddenAttribute + '\',\'0\', \'1900-01-01\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_programInformationAttributeValue = function (req, res) {
    var id = req.params.programInformationAttributeValueId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."ProgramInformationAttributeValues" where "ProgramInformationAttributeValueId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_programInformationAttributeValue = function (req, res) {
   var id = req.params.programInformationAttributeValueId;
    var programId = req.body.programId;
    var programInformationAttributeId = req.body.programInformationAttributeId;
    var itemValue = req.body.itemValue;
    var isHiddenAttribute = req.body.isHiddenAttribute;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."ProgramInformationAttributeValues" ' +
        'SET ' +
        ' "ProgramId"=\'' + programId + '\', ' +
        ' "ProgramInformationAttributeId"=\'' + programInformationAttributeId + '\', ' +
        ' "Value"=\'' + itemValue + '\', ' +
        ' "IsHiddenAttribute"=\'' + isHiddenAttribute + '\', ' +
        ' "InActive"=\'' + inactive + '\', ' +
        ' "InActiveDate"=\'' + inactiveDate + '\' ' +
        'where "ProgramInformationAttributeValueId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_programInformationAttributeValue = function (req, res) {
    var id = req.params.programInformationAttributeValueId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."ProgramInformationAttributeValues" where "ProgramInformationAttributeValueId" = ' + id,
        function (results) {
            res.send(results);
        });
};
