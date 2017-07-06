
exports.get_all_periodTypes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet(req, res, 'SELECT * FROM public."PeriodTypes"');
};

exports.create_a_periodType = function (req, res) {
    var id = req.body.periodTypeId;
    var name = req.body.name;
    var description = req.body.description;
    var dataPost = require('../dataAccess/dataPost');
    dataPost(req, res, 
    'INSERT INTO public."PeriodTypes"("PeriodTypeId", "Name", "Description", "InActive", "InActiveDate") '+
    'VALUES'+
    '('+id+',\''+name+'\' ,\''+description+'\',\'0\', \'1900-01-01\')');
};

exports.read_a_periodType = function (req, res) {
    var id = req.params.periodTypeId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet(req, res, 'SELECT * FROM public."PeriodTypes" where "PeriodTypeId" = '+id);
};

exports.update_a_periodType = function (req, res) {
    var id = req.params.periodTypeId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataGet');
    dataPut(req, res, 
    ' UPDATE public."PeriodTypes" '+
    'SET '+
    ' "Name"=\''+name+'\', '+
    ' "Description"=\''+description+'\', '+
    ' "InActive"=\''+inactive+'\', '+
    ' "InActiveDate"=\''+inactiveDate+'\' '+
	'where "PeriodTypeId" = '+id);
};

exports.delete_a_periodType = function (req, res) {
    var id = req.params.periodTypeId;
    var dataDelete = require('../dataAccess/dataGet');
    dataDelete(req, res, 'DELETE FROM public."PeriodTypes" where "PeriodTypeId" = '+id);
};
