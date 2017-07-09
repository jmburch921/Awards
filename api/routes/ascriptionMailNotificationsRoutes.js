'use strict';
module.exports = function(webserver) {
    var controller = require('../controllers/ascriptionMailNotificationsController');
    webserver.route('/api/v1/AscriptionMailNotifications')
        .post(controller.create_a_ascriptionMailNotification)
        .get(controller.get_all_ascriptionMailNotifications);
    webserver.route('/api/v1/AscriptionMailNotifications/:ascriptionMailNotificationId')
        .get(controller.read_a_ascriptionMailNotification)
        .put(controller.update_a_ascriptionMailNotification)
        .delete(controller.delete_a_ascriptionMailNotification);
};