'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/personsController');

    webserver.route('/Persons')
        .post(controller.create_a_person)
        .get(controller.get_all_persons);
    webserver.route('/Persons/:personId')
        .get(controller.read_a_person)
        .put(controller.update_a_person)
        .delete(controller.delete_a_person);
};