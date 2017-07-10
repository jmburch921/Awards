'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/programCriteriasController');
    webserver.route('/api/v1/ProgramCriterias')
        .post(controller.create_a_programCriteria)
        .get(controller.get_all_programCriterias);
    webserver.route('/api/v1/ProgramCriterias/:programCriteriaId')
        .get(controller.read_a_programCriteria)
        .put(controller.update_a_programCriteria)
        .delete(controller.delete_a_programCriteria);
};