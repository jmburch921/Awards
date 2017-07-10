'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/programCriteriaTypesController');
    webserver.route('/api/v1/ProgramCriteriaTypes')
        .post(controller.create_a_programCriteriaType)
        .get(controller.get_all_programCriteriaTypes);
    webserver.route('/api/v1/ProgramCriteriaTypes/:programCriteriaTypeId')
        .get(controller.read_a_programCriteriaType)
        .put(controller.update_a_programCriteriaType)
        .delete(controller.delete_a_programCriteriaType);
};