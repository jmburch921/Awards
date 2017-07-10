'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/personEmploymentTypesController');

    webserver.route('/api/v1/PersonEmploymentTypes')
        .post(controller.create_a_personEmploymentType)
        .get(controller.get_all_personEmploymentTypes);
    webserver.route('/api/v1/PersonEmploymentTypes/:personEmploymentTypeId')
        .get(controller.read_a_personEmploymentType)
        .put(controller.update_a_personEmploymentType)
        .delete(controller.delete_a_personEmploymentType);
};