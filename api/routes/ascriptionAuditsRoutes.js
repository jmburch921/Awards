'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/ascriptionAuditsController');
    webserver.route('/api/v1/AscriptionAudits')
        .post(controller.create_a_ascriptionAudit)
        .get(controller.get_all_ascriptionAudits);
    webserver.route('/api/v1/AscriptionAudits/:ascriptionAuditId')
        .get(controller.read_a_ascriptionAudit)
        .put(controller.update_a_ascriptionAudit)
        .delete(controller.delete_a_ascriptionAudit);
};