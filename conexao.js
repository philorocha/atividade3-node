const mysql = require('mysql2');

function execSQLQuery(query, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'projetonode',
        database: 'mydb'
    });

    connection.query(query, function(error, results, fields) {
        if (error) {
            res.json(error);
        } else {
            res.json(results);
        }
        connection.end();
        console.log('executou');
    })
}

exports.execSQLQuery = execSQLQuery;