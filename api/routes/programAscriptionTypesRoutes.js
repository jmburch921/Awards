'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/programAscriptionTypesController');
    webserver.route('/api/v1/ProgramAscriptionTypes')
        .post(controller.create_a_programAscriptionType)
        .get(controller.get_all_programAscriptionTypes);
    webserver.route('/api/v1/ProgramAscriptionTypes/:programAscriptionTypeId')
        .get(controller.read_a_programAscriptionType)
        .put(controller.update_a_programAscriptionType)
        .delete(controller.delete_a_programAscriptionType);
};