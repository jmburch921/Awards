
exports.get_all_ascriptionMailNotifications = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionMailNotifications"', function (results) {
        res.send(results);
    });
};

exports.create_a_ascriptionMailNotification = function (req, res) {
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT "AscriptionMailNotificationId" FROM public."AscriptionMailNotifications" order by "AscriptionMailNotificationId" desc LIMIT 1',
        function (numberResults) {
            var id = 1;
            if (numberResults[0] != null) {
                id = numberResults[0]["AscriptionMailNotificationId"] + 1;
            }
            var createDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
            var ascriptionId = req.body.ascriptionId;
            var mailToPersonId = req.body.mailToPersonId;
            var subject = req.body.subject;
            var bodyText = req.body.bodyText;
            var dataPost = require('../dataAccess/dataPost');
            dataPost('INSERT INTO public."AscriptionMailNotifications"("AscriptionMailNotificationId", "CreateDate", "AscriptionId", "MailToPersonId", "Subject", "Body") ' +
                'VALUES' +
                '(' + id + ',\'' + createDate + '\' ,\'' + ascriptionId + '\' ,\'' + mailToPersonId + '\' ,\'' + subject + '\' ,\'' + bodyText + '\')',
                function (results) {
                    res.send(results);
                });
        });
};

exports.read_a_ascriptionMailNotification = function (req, res) {
    var id = req.params.ascriptionMailNotificationId;
    var dataGet = require('../dataAccess/dataGet');
    dataGet('SELECT * FROM public."AscriptionMailNotifications" where "AscriptionMailNotificationId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.update_a_ascriptionMailNotification = function (req, res) {
    var id = req.params.ascriptionMailNotificationId;
    var ascriptionId = req.body.ascriptionId;
    var mailToPersonId = req.body.mailToPersonId;
    var subject = req.body.subject;
    var bodyText = req.body.bodyText;
    var dataPut = require('../dataAccess/dataPut');
    dataPut(' UPDATE public."AscriptionMailNotifications" ' +
        'SET ' +
        ' "AscriptionId"=\'' + ascriptionId + '\', ' +
        ' "MailToPersonId"=\'' + mailToPersonId + '\', ' +
        ' "Subject"=\'' + subject + '\', ' +
        ' "Body"=\'' + bodyText + '\' ' +
        'where "AscriptionMailNotificationId" = ' + id,
        function (results) {
            res.send(results);
        });
};

exports.delete_a_ascriptionMailNotification = function (req, res) {
    var id = req.params.ascriptionMailNotificationId;
    var dataDelete = require('../dataAccess/dataDelete');
    dataDelete('DELETE FROM public."AscriptionMailNotifications" where "AscriptionMailNotificationId" = ' + id,
        function (results) {
            res.send(results);
        });
};
