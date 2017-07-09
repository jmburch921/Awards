'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/programsController');
    webserver.route('/api/v1/Programs')
        .post(controller.create_a_program)
        .get(controller.get_all_programs);
    webserver.route('/api/v1/Programs/:programId')
        .get(controller.read_a_program)
        .put(controller.update_a_program)
        .delete(controller.delete_a_program);
};