'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/programEntityTypesController');

    webserver.route('/ProgramEntityTypes')
        .post(controller.create_a_programEntityType)
        .get(controller.get_all_programEntityTypes);
    webserver.route('/ProgramEntityTypes/:programEntityTypeId')
        .get(controller.read_a_programEntityType)
        .put(controller.update_a_programEntityType)
        .delete(controller.delete_a_programEntityType);
};