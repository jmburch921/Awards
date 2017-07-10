'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/ascriptionsController');
    webserver.route('/api/v1/Ascriptions')
        .post(controller.create_a_ascription)
        .get(controller.get_all_ascriptions);
    webserver.route('/api/v1/Ascriptions/:ascriptionId')
        .get(controller.read_a_ascription)
        .put(controller.update_a_ascription)
        .delete(controller.delete_a_ascription);
};