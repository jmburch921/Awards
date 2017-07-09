'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/ascriptionCriteriasController');
    webserver.route('/api/v1/AscriptionCriterias')
        .post(controller.create_a_ascriptionCriteria)
        .get(controller.get_all_ascriptionCriterias);
    webserver.route('/api/v1/AscriptionCriterias/:ascriptionCriteriaId')
        .get(controller.read_a_ascriptionCriteria)
        .put(controller.update_a_ascriptionCriteria)
        .delete(controller.delete_a_ascriptionCriteria);
};