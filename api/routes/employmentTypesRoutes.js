'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/employmentTypesController');
    webserver.route('/api/v1/EmploymentTypes')
        .post(controller.create_a_employmentType)
        .get(controller.get_all_employmentTypes);
    webserver.route('/api/v1/EmploymentTypes/:employmentTypeId')
        .get(controller.read_a_employmentType)
        .put(controller.update_a_employmentType)
        .delete(controller.delete_a_employmentType);
};