'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/ascriptionNotesController');
    webserver.route('/api/v1/AscriptionNotes')
        .post(controller.create_a_ascriptionNote)
        .get(controller.get_all_ascriptionNotes);
    webserver.route('/api/v1/AscriptionNotes/:ascriptionNoteId')
        .get(controller.read_a_ascriptionNote)
        .put(controller.update_a_ascriptionNote)
        .delete(controller.delete_a_ascriptionNote);
};