'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/programInformationAttributeValuesController');
    webserver.route('/api/v1/ProgramInformationAttributeValues')
        .post(controller.create_a_programInformationAttributeValue)
        .get(controller.get_all_programInformationAttributeValues);
    webserver.route('/api/v1/ProgramInformationAttributeValues/:programInformationAttributeValueId')
        .get(controller.read_a_programInformationAttributeValue)
        .put(controller.update_a_programInformationAttributeValue)
        .delete(controller.delete_a_programInformationAttributeValue);
};