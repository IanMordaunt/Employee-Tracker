const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Ian8mord',
        database: 'employees_db'
    }
);

console.log("Connected to the employee database.");

module.exports = db;




  