'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/rolesController');

    webserver.route('/Roles')
        .post(controller.create_a_role)
        .get(controller.get_all_roles);
    webserver.route('/Roles/:roleId')
        .get(controller.read_a_role)
        .put(controller.update_a_role)
        .delete(controller.delete_a_role);
};