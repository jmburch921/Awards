'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/personInformationAttributeValuesController');

    webserver.route('/api/v1/PersonInformationAttributeValues')
        .post(controller.create_a_personInformationAttributeValue)
        .get(controller.get_all_personInformationAttributeValues);
    webserver.route('/api/v1/PersonInformationAttributeValues/:personInformationAttributeValueId')
        .get(controller.read_a_personInformationAttributeValue)
        .put(controller.update_a_personInformationAttributeValue)
        .delete(controller.delete_a_personInformationAttributeValue);
};