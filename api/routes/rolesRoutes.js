'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/rolesController');

    webserver.route('/api/v1/Roles')
        .post(controller.create_a_role)
        .get(controller.get_all_roles);
    webserver.route('/api/v1/Roles/:roleId')
        .get(controller.read_a_role)
        .put(controller.update_a_role)
        .delete(controller.delete_a_role);
};