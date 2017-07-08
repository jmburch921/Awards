'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/personInformationAttributesController');

    webserver.route('/PersonInformationAttributes')
        .post(controller.create_a_personInformationAttribute)
        .get(controller.get_all_personInformationAttributes);
    webserver.route('/PersonInformationAttributes/:personInformationAttributeId')
        .get(controller.read_a_personInformationAttribute)
        .put(controller.update_a_personInformationAttribute)
        .delete(controller.delete_a_personInformationAttribute);
};