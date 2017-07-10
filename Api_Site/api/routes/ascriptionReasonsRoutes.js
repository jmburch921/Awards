'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/ascriptionReasonsController');
    webserver.route('/api/v1/AscriptionReasons')
        .post(controller.create_a_ascriptionReason)
        .get(controller.get_all_ascriptionReasons);
    webserver.route('/api/v1/AscriptionReasons/:ascriptionReasonId')
        .get(controller.read_a_ascriptionReason)
        .put(controller.update_a_ascriptionReason)
        .delete(controller.delete_a_ascriptionReason);
};