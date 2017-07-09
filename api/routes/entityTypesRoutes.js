'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/entityTypesController');
    webserver.route('/api/v1/EntityTypes')
        .post(controller.create_a_entityType)
        .get(controller.get_all_entityTypes);
    webserver.route('/api/v1/EntityTypes/:entityTypeId')
        .get(controller.read_a_entityType)
        .put(controller.update_a_entityType)
        .delete(controller.delete_a_entityType);
};