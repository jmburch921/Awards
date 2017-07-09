'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/personTypesController');
 
    webserver.route('/api/v1/PersonTypes')
        .post(controller.create_a_personType)
        .get(controller.get_all_personTypes);
    webserver.route('/api/v1/PersonTypes/:personTypeId')
        .get(controller.read_a_personType)
        .put(controller.update_a_personType)
        .delete(controller.delete_a_personType);
};