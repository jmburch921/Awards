'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/programGroupsController');
    webserver.route('/api/v1/ProgramGroups')
        .post(controller.create_a_programGroup)
        .get(controller.get_all_programGroups);
    webserver.route('/api/v1/ProgramGroups/:programGroupId')
        .get(controller.read_a_programGroup)
        .put(controller.update_a_programGroup)
        .delete(controller.delete_a_programGroup);
};