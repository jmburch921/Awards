'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/identifierTypesController');

    webserver.route('/IdentifierTypes')
        .post(controller.create_a_identifierType)
        .get(controller.get_all_identifierTypes);
    webserver.route('/IdentifierTypes/:identifierTypeId')
        .get(controller.read_a_identifierType)
        .put(controller.update_a_identifierType)
        .delete(controller.delete_a_identifierType);
};