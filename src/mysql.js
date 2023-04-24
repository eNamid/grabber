const mysql = require('mysql2');

const MYSQL_HOST = 'localhost';
const MYSQL_USER = 'dima';
const MYSQL_PASS = '543dimon543';
const MYSQL_DB = 'mydatabase';

const getMysql = () => new Promise((resolve, reject) => {
    const conn = {};
    const _conn = mysql.createConnection({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        database: MYSQL_DB,
        multipleStatements: true
    });

    conn.query = q => new Promise((resolve, reject) => {
        _conn.query(q, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });

    conn.close = () => new Promise((resolve) => {
        _conn.end(() => resolve());
    });

    _conn.connect((err) => {
        if (err) {
            reject(err);
        } else {
            resolve(conn);
        }
    });
});

module.exports = {
    getMysql
};