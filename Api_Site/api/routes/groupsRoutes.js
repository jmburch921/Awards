'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/groupsController');
    webserver.route('/api/v1/Groups')
        .post(controller.create_a_group)
        .get(controller.get_all_groups);
    webserver.route('/api/v1/Groups/:groupId')
        .get(controller.read_a_group)
        .put(controller.update_a_group)
        .delete(controller.delete_a_group);
};