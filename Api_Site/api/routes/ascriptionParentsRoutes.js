'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/ascriptionParentsController');
    webserver.route('/api/v1/AscriptionParents')
        .post(controller.create_a_ascriptionParent)
        .get(controller.get_all_ascriptionParents);
    webserver.route('/api/v1/AscriptionParents/:ascriptionParentId')
        .get(controller.read_a_ascriptionParent)
        .put(controller.update_a_ascriptionParent)
        .delete(controller.delete_a_ascriptionParent);
};