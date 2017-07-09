'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/ascriptionTypesController');
    webserver.route('/api/v1/AscriptionTypes')
        .post(controller.create_a_ascriptionType)
        .get(controller.get_all_ascriptionTypes);
    webserver.route('/api/v1/AscriptionTypes/:ascriptionTypeId')
        .get(controller.read_a_ascriptionType)
        .put(controller.update_a_ascriptionType)
        .delete(controller.delete_a_ascriptionType);
};