
exports.get_all_programEntityTypes = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet(req, res, 'SELECT * FROM public."ProgramEntityTypes"');
};

exports.create_a_programEntityType = function (req, res) {
    var ProgramEntityTypeId = req.body.programEntityTypeId;
    var Name = req.body.name;
    var Description = req.body.description;
    var dataPost = require('../dataAccess/dataPost');
    dataPost(req, res, 
    'INSERT INTO public."ProgramEntityTypes"("ProgramEntityTypeId", "Name", "Description", "InActive", "InActiveDate") '+
    'VALUES'+
    '('+ProgramEntityTypeId+',\''+Name+'\' ,\''+Description+'\',\'0\', \'1900-01-01\')');
};

exports.read_a_programEntityType = function (req, res) {
    var id = req.params.programEntityTypeId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet(req, res, 'SELECT * FROM public."ProgramEntityTypes" where "ProgramEntityTypeId" = '+id);
};

exports.update_a_programEntityType = function (req, res) {
    var id = req.params.programEntityTypeId;
    var name = req.body.name;
    var description = req.body.description;
    var inactive = req.body.inactive;
    var inactiveDate = req.body.inactiveDate;
    var dataPut = require('../dataAccess/dataGet');
    dataPut(req, res, 
    ' UPDATE public."ProgramEntityTypes" '+
    'SET '+
    ' "Name"=\''+name+'\', '+
    ' "Description"=\''+description+'\', '+
    ' "InActive"=\''+inactive+'\', '+
    ' "InActiveDate"=\''+inactiveDate+'\' '+
	'where "ProgramEntityTypeId" = '+id);
};

exports.delete_a_programEntityType = function (req, res) {
    var id = req.params.programEntityTypeId;
    var dataDelete = require('../dataAccess/dataGet');
    dataDelete(req, res, 'DELETE FROM public."ProgramEntityTypes" where "ProgramEntityTypeId" = '+id);
};
