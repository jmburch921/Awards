'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/programInformationAttributesController');
    webserver.route('/api/v1/ProgramInformationAttributes')
        .post(controller.create_a_programInformationAttribute)
        .get(controller.get_all_programInformationAttributes);
    webserver.route('/api/v1/ProgramInformationAttributes/:programInformationAttributeId')
        .get(controller.read_a_programInformationAttribute)
        .put(controller.update_a_programInformationAttribute)
        .delete(controller.delete_a_programInformationAttribute);
};