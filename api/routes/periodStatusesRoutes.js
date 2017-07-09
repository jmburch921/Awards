'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/periodStatusesController');
    webserver.route('/api/v1/PeriodStatuses')
        .post(controller.create_a_periodStatus)
        .get(controller.get_all_periodStatuses);
    webserver.route('/api/v1/PeriodStatuses/:periodStatusId')
        .get(controller.read_a_periodStatus)
        .put(controller.update_a_periodStatus)
        .delete(controller.delete_a_periodStatus);
};