'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/groupTypesController');

    webserver.route('/GroupTypes')
        .post(controller.create_a_groupType)
        .get(controller.get_all_groupTypes);
    webserver.route('/GroupTypes/:groupTypesId')
        .get(controller.read_a_groupType)
        .put(controller.update_a_groupType)
        .delete(controller.delete_a_groupType);
};