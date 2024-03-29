'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/personRolesController');

    webserver.route('/api/v1/PersonRoles')
        .post(controller.create_a_personRole)
        .get(controller.get_all_personRoles);
    webserver.route('/api/v1/PersonRoles/:personRoleId')
        .get(controller.read_a_personRole)
        .put(controller.update_a_personRole)
        .delete(controller.delete_a_personRole);
};