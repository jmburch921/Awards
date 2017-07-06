var pg = require('pg');

module.exports = function (req, res, queryString) {

    const client = new pg.Client({
        user: 'Awards_Dev_User',
        host: '127.0.0.1',
        database: 'Awards_Dev',
        password: 'Awards_Dev_User',
        port: 5432,
    });

    var portNo = client.port;
    var dbName = client.database;
    var servName = client.host;
    client.connect((err) => {
        if (err) {
            console.error('CONNECTION ERROR...');
            var jsonString = JSON.stringify(err.stack);
            var jsonResult = JSON.parse(jsonString);
            res.send(jsonResult);
            client.end();
        } else {
            console.log('CONNECTED...');
            client.query(queryString, (err, result) => {
                if (err) {
                    console.log("ERROR")
                    console.log(err.message);
                    var jsonString = JSON.stringify(err.message);
                    var jsonResult = JSON.parse(jsonString);
                    res.send(jsonResult);
                    client.end();
                } else {
                    console.log("SUCCESS")
                    var jsonString = JSON.stringify(result.rows);
                    var jsonResult = JSON.parse(jsonString);
                    res.send(jsonResult);
                    client.end();
                }
            });
        }
    });

};