'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/personTypesController');
 
    webserver.route('/PersonTypes')
        .post(controller.create_a_personType)
        .get(controller.get_all_personTypes);
    webserver.route('/PersonTypes/:personTypeId')
        .get(controller.read_a_personType)
        .put(controller.update_a_personType)
        .delete(controller.delete_a_personType);
};