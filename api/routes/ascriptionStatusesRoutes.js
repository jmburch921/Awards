'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/ascriptionStatusesController');
    webserver.route('/api/v1/AscriptionStatuses')
        .post(controller.create_a_ascriptionStatus)
        .get(controller.get_all_ascriptionStatuses);
    webserver.route('/api/v1/AscriptionStatuses/:ascriptionStatusId')
        .get(controller.read_a_ascriptionStatus)
        .put(controller.update_a_ascriptionStatus)
        .delete(controller.delete_a_ascriptionStatus);
};