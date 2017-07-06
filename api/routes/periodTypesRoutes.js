'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/periodTypesController');

    webserver.route('/PeriodTypes')
        .post(controller.create_a_periodType)
        .get(controller.get_all_periodTypes);
    webserver.route('/PeriodTypes/:periodTypeId')
        .get(controller.read_a_periodType)
        .put(controller.update_a_periodType)
        .delete(controller.delete_a_periodType);
};