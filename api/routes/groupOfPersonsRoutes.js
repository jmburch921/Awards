'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/groupOfPersonsController');
    webserver.route('/api/v1/groupOfPersons')
        .post(controller.create_a_groupOfPerson)
        .get(controller.get_all_groupOfPersons);
    webserver.route('/api/v1/groupOfPersons/:groupOfPersonId')
        .get(controller.read_a_groupOfPerson)
        .put(controller.update_a_groupOfPerson)
        .delete(controller.delete_a_groupOfPerson);
};