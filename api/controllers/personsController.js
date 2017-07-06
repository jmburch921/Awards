
exports.get_all_persons = function (req, res) {
    var database = require('../dataAccess/databaseConnection');
    database(req, res, 'SELECT * FROM public."ProgramEntityTypes"');
};

exports.create_a_person = function (req, res) {
    var item = req.body.name;
    console.log(item);
    var jsonString = JSON.stringify(item);
    var jsonResult = JSON.parse(jsonString);
    res.send(jsonResult);
    console.log("in create_a_person");
};

exports.read_a_person = function (req, res) {
    res.send("in read_a_person");
    console.log("in read_a_person");
};

exports.update_a_person = function (req, res) {
    res.send("in update_a_person");
    console.log("in update_a_person");
};

exports.delete_a_person = function (req, res) {
    res.send("in delete_a_nomination");
    console.log("in delete_a_nomination");
};
