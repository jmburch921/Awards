'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/programAscriptionTypeStatusRolesController');
    webserver.route('/api/v1/programAscriptionTypeStatusRoles')
        .post(controller.create_a_programAscriptionTypeStatusRole)
        .get(controller.get_all_programAscriptionTypeStatusRoles);
    webserver.route('/api/v1/ProgramAscriptionTypeStatusRoles/:programAscriptionTypeStatusRoleId')
        .get(controller.read_a_programAscriptionTypeStatusRole)
        .put(controller.update_a_programAscriptionTypeStatusRole)
        .delete(controller.delete_a_programAscriptionTypeStatusRole);
};