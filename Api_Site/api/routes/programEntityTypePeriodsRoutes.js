'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/programEntityTypePeriodsController');
    webserver.route('/api/v1/ProgramEntityTypePeriods')
        .post(controller.create_a_programEntityTypePeriod)
        .get(controller.get_all_programEntityTypePeriods);
    webserver.route('/api/v1/ProgramEntityTypePeriods/:programEntityTypePeriodId')
        .get(controller.read_a_programEntityTypePeriod)
        .put(controller.update_a_programEntityTypePeriod)
        .delete(controller.delete_a_programEntityTypePeriod);
};